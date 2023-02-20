import { Box } from "@mui/material";
import { blue } from "@mui/material/colors";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/footer/Footer";
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
        <Box className="side-container" sx={{ backgroundColor: blue[100] }}>
          <SearchForm />
        </Box>
        <section>
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="detail" element={<Detail />} />
              <Route path="*" element={<Error />} />
            </Routes>
          </main>
          <Footer />
        </section>
      </main>
    </BrowserRouter>
  );
}
