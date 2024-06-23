import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <Sidebar />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
