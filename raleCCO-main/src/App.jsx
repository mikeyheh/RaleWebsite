import './App.css'
import Dashboard from "./components/Dashboard";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import Header from "./components/Header";
import FirstPage from "./components/FirstPage";
import Footer from "./components/Footer";
import ShopSection from "./components/shopSection";
import PageBreak1 from "./components/pagebreak1";
import ShirtCatalog from "./components/shirtcatalog";
import Design from "./components/design";
import ShopPageTop from "./components/shopPagetop";
import ShopPage2 from "./components/shopPage2";
import ProductPage from "./components/productPage";
import CheckoutPage from "./components/checkoutPage";
import AccountPage from "./components/accountPage";
import LoginPage from "./components/loginPage";
import RegisterPage from "./components/registerPage";
import ShopPage from "./components/shopPage";
import FrontPage from "./components/frontPage";

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/components/shirtcatalog" element={<ShirtCatalog />} />
        <Route path="/components/shopPage" element={<ShopPage />} />
        <Route path="/components/frontPage" element={<FrontPage />} />
        <Route path="/components/checkoutPage" element={<CheckoutPage />} />
        <Route path="/components/accountPage" element = {<AccountPage/>} />
        <Route path="/components/productPage" element = {<ProductPage/>} />
      </Routes>
    </Router>
  );
}

export default App;
