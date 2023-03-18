import React from "react";
import Pagewrapper from "/src/components/layout/page-wrapper/page-wrapper";
import advantages from "/src/mocks/advantages";
import products from "/src/mocks/products";
import { GlobalStyle } from "./styles";
import { AppRoute } from "/src/const";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BuyPage from "/src/components/pages/buy-page/buy-page";
import MainPage from "/src/components/pages/main-page/main-page";
import ScrollTop from "/src/components/ui/scroll-top/scroll-top";

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <ScrollTop />
        <Routes>
          <Route path={AppRoute.MAIN} element={<Pagewrapper />}>
            <Route index element={<MainPage advantages={advantages} />} />
            <Route
              path={AppRoute.BUY.replace(AppRoute.MAIN, "")}
              element={<BuyPage products={products} />}
            />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
