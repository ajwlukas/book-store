import { useEffect, useState } from "react";
import { Category } from "../models/category.model";
import { fetchCategory } from "../api/category.api";
import { useLocation } from "react-router-dom";

export const useCategory = () => {
    const location = useLocation();//쿼리를 따주는 함수 location.search
    const [categories, setCategories] = useState<Category[]>([]);

    const setActive = () => {
        const params = new URLSearchParams(location.search);
        if (params.get('category_id')) {
            setCategories((prev) => {
                return prev.map((category) => {
                    return category.id === Number(params.get('category_id'))
                        ? { ...category, isActive: true }
                        : { ...category, isActive: false }
                })
            })
        }
        else
        {
            setCategories((prev) => {
                return prev.map((category) => {
                    return category.id === null
                        ? { ...category, isActive: true }
                        : { ...category, isActive: false }
                })
            })
        }
    }

    useEffect(() => {
        fetchCategory().then((categories) => {

            const categoryWithAll = [
                {
                    id: null,
                    name: "전체",
                    isActive: false,
                },
                ...categories,
            ];

            setCategories(categoryWithAll);
            setActive();
        })
    }, []);

    useEffect(()=>{
        setActive();
    },[location.search]);

    return { categories };
}