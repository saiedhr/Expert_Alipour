import React from "react";
import "./App.scss";
import Navbar from "./pages/site/components/Navbar/Navbar";
import HomePage from "./pages/site/home/HomePage";
import Footer from "./pages/site/components/Footer/Footer";
import Details from "./pages/site/details/Details";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Blog from "./pages/site/blog/Blog";
import Bots from "./pages/site/bots/Bots";
import LearnBots from "./pages/site/learn-bots/LearnBots";
import AboutUs from "./pages/site/about-us/AboutUs";
import ContactUs from "./pages/site/contact-us/ContactUs";
import Tutorials from "./pages/site/tutorials/Tutorials";
import { BestBotsProvider } from "./contexts/BestBotsContext";
import { FooterRefProvider } from "./contexts/FooterRefContext";
import AdminNavbar from "./pages/admin/components/Admin-Navbar/AdminNavbar";
import AdminPanel from "./pages/admin/admin-panel/AdminPanel";
import AddBots from "./pages/admin/bots/AddBots";

function App() {
  return (
    <>
      <Router>
        <BestBotsProvider>
          <FooterRefProvider>
            <Navbar />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/details/:id" element={<Details />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/bots" element={<Bots />} />
              <Route path="/tutorials" element={<Tutorials />} />
              <Route path="/learn-bots" element={<LearnBots />} />
              <Route path="/about-us" element={<AboutUs />} />
              <Route path="/contact-us" element={<ContactUs />} />
              <Route
                path="/admin/panel"
                element={
                  <AdminNavbar>
                    <AdminPanel />
                  </AdminNavbar>
                }
              />
              <Route
                path="/admin/bots"
                element={
                  <AdminNavbar title="بات‌ها">
                    <AddBots />
                  </AdminNavbar>
                }
              />
            </Routes>
            <Footer />
          </FooterRefProvider>
        </BestBotsProvider>
        {/* <Routes>
          <Route path="/admin/panel" element={<Panel />} />
          <Route path="/admin/add-bot" element={<AddBot />} />
        </Routes> */}
      </Router>
    </>
  );
}

export default App;
