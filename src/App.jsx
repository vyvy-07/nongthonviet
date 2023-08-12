import { Route, Routes } from "react-router-dom";
import { PATH } from "./constants/path";
import HomePage from "./pages/HomePage";
import ProductDetail from "./pages/ProductDetail/ProductDetail";
import MainLayout from "./layouts/MainLayout";

function App() {
  return (
    <>
      <Routes>
        <Route path={PATH.INDEX} element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path={PATH.NEWS_DETAIL} element={<ProductDetail />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
