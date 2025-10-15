import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import App from "./App.jsx"
import Home from "./pages/Home/Home.jsx"
import News from "./pages/News/News.jsx"
import NewsDetail from "./pages/NewsDetails/NewsDetails.jsx"
import AboutUs from "./pages/AboutUs/AboutUs.jsx"
import "./index.css"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="news" element={<News />} />
          <Route path="news/:id" element={<NewsDetail />} />
          <Route path="aboutus" element={<AboutUs/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
