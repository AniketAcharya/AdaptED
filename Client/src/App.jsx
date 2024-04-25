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
import HtmlTagList from "./Components/HtmlTagList";
import VideoPage from "./Components/VideoPage";
import Articles from "./Components/Articles";
import ArticlePage from "./Components/ArticlePage";
import Shimmer from "./Components/Shimmer";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Home />}>
        <Route index element={<Body />}></Route>
        <Route path="/html" element={<Html />}></Route>
        <Route path="/quiz" element={<Quiz />}></Route>
        <Route path="/embed" element={<VideoPage />}></Route>
        <Route path="/articlepage" element={<ArticlePage />}></Route>
        <Route
          path="/html/htmlTagList/videos"
          element={<HtmlTagList />}
        ></Route>
        <Route
          path="/html/htmlAttributes/articles"
          element={<Articles />}
        ></Route>
      </Route>
      <Route path="/signup" element={<Signup />}></Route>
      <Route path="/shimmer" element={<Shimmer />}></Route>
      <Route path="/questions" element={<Questions />}></Route>
      <Route path="/login" element={<Login />}></Route>
    </Route>
  )
);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
