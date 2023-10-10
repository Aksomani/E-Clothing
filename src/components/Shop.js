import { Routes, Route } from "react-router-dom";
import CategoriesPreview from "../routes/categories-Preview/CategoriesPreview";
import Category from "../routes/Categories/Category";

const Shop = () => {
  return (
    <Routes>
      <Route index element={<CategoriesPreview/>} />
      <Route path=":category" element={<Category/>} />
    </Routes>
  );
};

export default Shop;
