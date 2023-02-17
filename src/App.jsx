import { BrowserRouter, Routes, Route } from "react-router-dom";
import HeaderComponent from "./components/header/HeaderComponent";
import SearchForm from "./components/search/SearchForm";
import Detail from "./pages/Detail";
import Error from "./pages/Error";
import Home from "./pages/Home";

export default function App() {
  return (
    <BrowserRouter>
      <header>
        <HeaderComponent />
      </header>
      <main className="main-content">
        <aside>
          <SearchForm />
        </aside>
        <section>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="detail" element={<Detail />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </section>
      </main>
      <footer>Footer</footer>
    </BrowserRouter>
  );
}
