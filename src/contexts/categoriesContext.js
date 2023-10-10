import { createContext, useState, useEffect } from "react";
// import { getCategoriesAndDocuments } from '../utils/Firebase'; // Assuming this is the correct import path
import { getCategoriesAndDoucuments } from '../utils/Firebase';
//       getCategoriesAndDocuments
import SHOP_DATA from '../shop-data.js';

export const CategoriesContext = createContext({
    CategoriesMap: {},
});

export const CategoriesProvider = ({ children }) => {
    const [categoriesMap, setCategoriesMap] = useState({});

    useEffect(() => {
        const getCategoryMap = async () => {
            const categoryMap = await getCategoriesAndDoucuments('categories', SHOP_DATA);
            setCategoriesMap(categoryMap);
        }

        getCategoryMap();
    }, [])

    const value = { categoriesMap };

    return (
        <CategoriesContext.Provider value={value}>
            {children}
        </CategoriesContext.Provider>
    );
}
