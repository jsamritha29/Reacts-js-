import React from "react";
import ReactDOM from "react-dom/client";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from "./Home";
import Post from "./Post";

ReactDOM createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/" element={<Post/>}/>
    </Routes>
  </BrowserRouter>
);
