import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
// import IndexUser from "./pages/users/Index";
// import ShowUser from "./pages/users/Show";
import RouterUser from "./pages/users/Router";
import RouterPost from "./pages/posts/Router";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}/>
        {/* <Route path="/users" element={<IndexUser />}/>
        <Route path="/users/:userId" element={<ShowUser />}/> */}
        <Route path="/users/*" element={<RouterUser />}/>
        <Route path="/posts/*" element={<RouterPost />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
