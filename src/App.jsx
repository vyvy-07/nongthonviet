import { Route, Routes } from "react-router-dom";
import { PATH } from "./constants/path";
import HomePage from "./pages/HomePage";
import MainLayout from "./layouts/MainLayout";
import Error404 from "./pages/Error404";
import DetailPage from "./pages/DetailPage";
import NewsDetail from "./pages/NewsDetail";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path={PATH.DETAIL_PAGE} element={<DetailPage />} />
          <Route path={PATH.NEWS_DETAIL} element={<NewsDetail />} />
        </Route>
        <Route path="*" element={<Error404 />} />
      </Routes>
    </>
  );
}

export default App;
