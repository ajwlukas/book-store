import { useEffect, useState } from "react";
import { Category } from "../models/category.model";
import { fetchCategory } from "../api/category.api";

export const useCategory = () =>{
    const [categories, setCategories] = useState<Category[]>([]);

    useEffect(() => {
        fetchCategory().then((categories) => {

            const categoryWithAll = [
                {
                    id : null,
                    name : "전체",
                },
                ...categories,
            ];

            setCategories(categoryWithAll);
        })
    }, []);

    return {categories};
}