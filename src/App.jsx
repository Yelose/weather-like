import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/footer/Footer";
import HeaderComponent from "./components/header/HeaderComponent";
import CookiesPolicy from "./pages/cookies/CookiesPolicy";
import Detail from "./pages/detail/Detail";
import Error from "./pages/error/Error";
import Home from "./pages/home/Home";

export default function App() {
  return (
    <BrowserRouter>
      <header>
        <HeaderComponent />
      </header>
      <main className="main-content">
        <section className="router-content">
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="detail" element={<Detail />} />
              <Route path="cookies" element={<CookiesPolicy />} />
              <Route path="*" element={<Error />} />
            </Routes>
          </main>
          <Footer />
        </section>
      </main>
    </BrowserRouter>
  );
}
