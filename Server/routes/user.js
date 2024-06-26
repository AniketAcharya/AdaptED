import express from "express";
import bcryt from "bcrypt";
import { User } from "../models/User.js";
import jwt from "jsonwebtoken";

const router = express.Router();

router.post("/signup", async (req, res) => {
  const { username, email, password } = req.body;
  const user = await User.findOne({ email });
  if (user) {
    return res.json({ message: "user already existed" });
  }

  const hashpassword = await bcryt.hash(password, 10);
  const newUser = new User({
    username,
    email,
    password: hashpassword,
  });

  await newUser.save();
  return res.json({
    status: true,
    message: "record registed",
    username: username,
  });
});

router.post("/questions", async (req, res) => {
  const {
    username,
    age,
    edu,
    exp,
    interest,
    rating,
    consume,
    time,
    duration,
    freq,
    device,
  } = req.body;
  const user = await User.find({ username });
  if (user) {
    await User.updateMany(
      { username },
      {
        $set: {
          age: age,
          edu: edu,
          exp: exp,
          interest: interest,
          rating: rating,
          consume: consume,
          time: time,
          duration: duration,
          freq: freq,
          device: device,
        },
      }
    );
    return res.json({ status: true, message: "all answers inserted" });
  } else {
    return res.json({ message: "somthing went wrong" });
  }
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    return res.json({ message: "user is not registered" });
  }

  const validPassword = await bcryt.compare(password, user.password);
  if (!validPassword) {
    return res.json({ message: "password is incorrect" });
  }

  const token = jwt.sign({ username: user.username }, process.env.KEY, {
    expiresIn: "1h",
  });
  res.cookie("token", token, { httpOnly: true, maxAge: 360000 });
  return res.json({
    status: true,
    message: "login successfully",
    username: user.username,
  });
});

const verifyUser = async (req, res, next) => {
  try {
    const token = req.cookies.token;
    if (!token) {
      return res.json({ status: false, message: "no token" });
    }
    const decoded = jwt.verify(token, process.env.KEY);
    req.user = { username: decoded.username };
    next();
  } catch (err) {
    return res.json(err);
  }
};

router.get("/verify", verifyUser, (req, res) => {
  return res.json({ status: true, message: "authorized" });
});

router.get("/logout", (req, res) => {
  res.clearCookie("token");
  return res.json({ status: true });
});

router.get("/user", verifyUser, async (req, res) => {
  const username = req.user.username;
  const user = await User.find({ username });
  const interest = user[0].interest;
  return res.json({ status: true, username: username, interest: interest });
});

router.post("/update", async (req, res) => {
  const username = req.body.name;
  const interest = req.body.newInterest;

  const user = await User.find({ username });
  if (user) {
    await User.updateOne(
      { username },
      {
        $set: {
          interest: interest,
        },
      }
    );
    return res.json({ status: true, message: "inserted" });
  } else {
    return res.json({ message: "somthing went wrong" });
  }
});

export { router as UserRouter };
