import { Route, Routes } from "react-router-dom";
import { PATH } from "./constants/path";
import HomePage from "./pages/HomePage";
import ProductDetail from "./pages/ProductDetail/ProductDetail";
import MainLayout from "./layouts/MainLayout";
import Error404 from "./pages/Error404";

function App() {
  return (
    <>
      <Routes>
        <Route path={PATH.INDEX} element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path={PATH.NEWS_DETAIL} element={<ProductDetail />} />
          <Route path="*" element={<Error404 />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
