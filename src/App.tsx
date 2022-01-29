import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import About from "./pages/About";
import Article from "./pages/Article";
import Articles from "./pages/Articles";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Mypage from "./pages/Mypage";
import NotFound from "./pages/NotFound";
import Profiles from "./pages/Profiles";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route path="/About" element={<About />}></Route>
          <Route path="/profiles/:username" element={<Profiles />} />
          <Route path="/articles" element={<Articles />}>
            <Route path=":id" element={<Article />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/mypage" element={<Mypage />} />
        </Route>

        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </>
  );
}

export default App;
