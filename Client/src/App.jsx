import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Signup from "./Components/Signup";
import Login from "./Components/Login";
import Home from "./Components/Home";
import Body from "./Components/Body";
import Html from "./Components/Html";
import Quiz from "./Components/Quiz";
import Questions from "./Components/Questions";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Home />}>
        <Route index element={<Body />}></Route>
        <Route path="html" element={<Html />}></Route>
        <Route path="quiz" element={<Quiz />}></Route>
      </Route>
      <Route path="/signup" element={<Signup />}></Route>
      <Route path="/questions" element={<Questions />}></Route>
      <Route path="/login" element={<Login />}></Route>
    </Route>
  )
);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
