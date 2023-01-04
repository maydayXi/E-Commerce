import topCake1URL from "../images/cake1.jpg";
import topCake2URL from "../images/cake2.jpg";
import topCake3URL from "../images/cake3.jpg";
import topCake4URL from "../images/cake4.jpg";
import newCake1URL from "../images/new-cake1.jpg";
import newCake2URL from "../images/new-cake2.jpg";
import newCake3URL from "../images/new-cake3.jpg";
import newCake4URL from "../images/new-cake4.jpg";
import recipeImg from "../images/about-recipe.jpg";
import ingredientImg from "../images/about-ingredient.jpg";
import socialPhoto1URL from "../images/social1.jpg";
import socialPhoto2URL from "../images/social2.jpg";
import socialPhoto3URL from "../images/social3.jpg";
import socialPhoto4URL from "../images/social4.jpg";
import socialPhoto5URL from "../images/social5.jpg";

/**
 * Demo data
 */
const data = {
    // 關於
    about: [
        {
            title: "Recipe",
            image: { src: recipeImg, alt: "Recipe image" },
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio libero optio impedit, repudiandae explicabo veritatis enim nostrum odit nesciunt voluptate.",
        },
        {
            title: "Ingredient",
            image: { src: ingredientImg, alt: "Ingredient image" },
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid quasi minima temporibus! Debitis eaque quis illo tenetur similique quaerat dolorum.",
        },
    ],
    // 熱銷
    bestSellers: [
        {
            id: 1,
            // 圖片
            image: { src: topCake1URL, alt: "top cake1" },
            // 產品名稱
            title: "top cake 1",
            // 產品說明
            intro: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem labore in veniam reprehenderit. Animi, laborum natus voluptatibus provident sunt obcaecati!`,
            // 產品價格
            price: 990,
            // 原料
            ingredients: [
                "1 cup (226 grams) unsalted butter, softened",
                "2 cups (370 grams) granulated sugar",
                "4 large eggs (200 grams), room temperature",
                "3 cups (300 grams) cake flour",
                "1 tablespoon (12 grams) baking powder",
                "1 cup (240 grams) milk, room temperature",
                "2 teaspoons vanilla extract",
            ],
            // 營養標示
            nutritionFacts: {
                // 脂肪
                TotalFat: {
                    weight: "8g",
                    value: 10,
                    // 飽和脂肪
                    SaturatedFat: {
                        weight: "1g",
                        value: 5,
                    },
                    // 反式脂肪
                    TransFat: {
                        weight: "0g",
                        value: 0,
                    },
                },
                // 膽固醇
                Cholesterol: {
                    weight: "0mg",
                    value: 0,
                },
                // 鈉
                Sodium: {
                    weight: "160mg",
                    value: 7,
                },
                // 碳水化合物
                TotalCarbohydrate: {
                    weight: "37g",
                    value: 13,
                    // 膳食纖維
                    DietaryFiber: {
                        weight: "4g",
                        value: 14,
                    },
                    // 糖
                    TotalSugars: {
                        weight: "12g",
                        // 添加糖
                        AddedSugars: {
                            weight: "10g",
                            value: 20,
                        },
                    },
                },
                // 蛋白質
                Protein: {
                    weight: "3g",
                },
            },
        },
        {
            id: 2,
            image: { src: topCake2URL, alt: "top cake2" },
            title: "top cake 2",
            intro: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem labore in veniam reprehenderit. Animi, laborum natus voluptatibus provident sunt obcaecati!`,
            price: 480,
            ingredient: [
                "1 cup (226 grams) unsalted butter, softened",
                "2 cups (370 grams) granulated sugar",
                "4 large eggs (200 grams), room temperature",
                "3 cups (300 grams) cake flour",
                "1 tablespoon (12 grams) baking powder",
                "1 cup (240 grams) milk, room temperature",
                "2 teaspoons vanilla extract",
            ],
            ingredient: [
                "1 cup (226 grams) unsalted butter, softened",
                "2 cups (370 grams) granulated sugar",
                "4 large eggs (200 grams), room temperature",
                "3 cups (300 grams) cake flour",
                "1 tablespoon (12 grams) baking powder",
                "1 cup (240 grams) milk, room temperature",
                "2 teaspoons vanilla extract",
            ],
            nutritionFacts: {
                // 脂肪
                TotalFat: {
                    weight: "8g",
                    value: 10,
                    // 飽和脂肪
                    SaturatedFat: {
                        weight: "1g",
                        value: 5,
                    },
                    // 反式脂肪
                    TransFat: {
                        weight: "0g",
                        value: 0,
                    },
                },
                // 膽固醇
                Cholesterol: {
                    weight: "0mg",
                    value: 0,
                },
                // 鈉
                Sodium: {
                    weight: "160mg",
                    value: 7,
                },
                // 碳水化合物
                TotalCarbohydrate: {
                    weight: "37g",
                    value: 13,
                    // 膳食纖維
                    DietaryFiber: {
                        weight: "4g",
                        value: 14,
                    },
                    // 糖
                    TotalSugars: {
                        weight: "12g",
                        // 添加糖
                        AddedSugars: {
                            weight: "10g",
                            value: 20,
                        },
                    },
                },
                // 蛋白質
                Protein: {
                    weight: "3g",
                },
            },
        },
        {
            id: 3,
            image: { src: topCake3URL, alt: "top cake3" },
            title: "top cake 3",
            intro: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem labore in veniam reprehenderit. Animi, laborum natus voluptatibus provident sunt obcaecati!`,
            price: 600,
            ingredient: [
                "1 cup (226 grams) unsalted butter, softened",
                "2 cups (370 grams) granulated sugar",
                "4 large eggs (200 grams), room temperature",
                "3 cups (300 grams) cake flour",
                "1 tablespoon (12 grams) baking powder",
                "1 cup (240 grams) milk, room temperature",
                "2 teaspoons vanilla extract",
            ],
            nutritionFacts: {
                // 脂肪
                TotalFat: {
                    weight: "8g",
                    value: 10,
                    // 飽和脂肪
                    SaturatedFat: {
                        weight: "1g",
                        value: 5,
                    },
                    // 反式脂肪
                    TransFat: {
                        weight: "0g",
                        value: 0,
                    },
                },
                // 膽固醇
                Cholesterol: {
                    weight: "0mg",
                    value: 0,
                },
                // 鈉
                Sodium: {
                    weight: "160mg",
                    value: 7,
                },
                // 碳水化合物
                TotalCarbohydrate: {
                    weight: "37g",
                    value: 13,
                    // 膳食纖維
                    DietaryFiber: {
                        weight: "4g",
                        value: 14,
                    },
                    // 糖
                    TotalSugars: {
                        weight: "12g",
                        // 添加糖
                        AddedSugars: {
                            weight: "10g",
                            value: 20,
                        },
                    },
                },
                // 蛋白質
                Protein: {
                    weight: "3g",
                },
            },
        },
        {
            id: 4,
            image: { src: topCake4URL, alt: "top cake4" },
            title: "top cake 4",
            intro: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem labore in veniam reprehenderit. Animi, laborum natus voluptatibus provident sunt obcaecati!`,
            price: 750,
            ingredient: [
                "1 cup (226 grams) unsalted butter, softened",
                "2 cups (370 grams) granulated sugar",
                "4 large eggs (200 grams), room temperature",
                "3 cups (300 grams) cake flour",
                "1 tablespoon (12 grams) baking powder",
                "1 cup (240 grams) milk, room temperature",
                "2 teaspoons vanilla extract",
            ],
            nutritionFacts: {
                // 脂肪
                TotalFat: {
                    weight: "8g",
                    value: 10,
                    // 飽和脂肪
                    SaturatedFat: {
                        weight: "1g",
                        value: 5,
                    },
                    // 反式脂肪
                    TransFat: {
                        weight: "0g",
                        value: 0,
                    },
                },
                // 膽固醇
                Cholesterol: {
                    weight: "0mg",
                    value: 0,
                },
                // 鈉
                Sodium: {
                    weight: "160mg",
                    value: 7,
                },
                // 碳水化合物
                TotalCarbohydrate: {
                    weight: "37g",
                    value: 13,
                    // 膳食纖維
                    DietaryFiber: {
                        weight: "4g",
                        value: 14,
                    },
                    // 糖
                    TotalSugars: {
                        weight: "12g",
                        // 添加糖
                        AddedSugars: {
                            weight: "10g",
                            value: 20,
                        },
                    },
                },
                // 蛋白質
                Protein: {
                    weight: "3g",
                },
            },
        },
    ],
    newArrivals: [
        {
            id: 5,
            image: { src: newCake1URL, alt: "new cake4" },
            title: "new cake 4",
            intro: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem labore in veniam reprehenderit. Animi, laborum natus voluptatibus provident sunt obcaecati!`,
            price: 800,
            ingredient: [
                "1 cup (226 grams) unsalted butter, softened",
                "2 cups (370 grams) granulated sugar",
                "4 large eggs (200 grams), room temperature",
                "3 cups (300 grams) cake flour",
                "1 tablespoon (12 grams) baking powder",
                "1 cup (240 grams) milk, room temperature",
                "2 teaspoons vanilla extract",
            ],
            nutritionFacts: {
                // 脂肪
                TotalFat: {
                    weight: "8g",
                    value: 10,
                    // 飽和脂肪
                    SaturatedFat: {
                        weight: "1g",
                        value: 5,
                    },
                    // 反式脂肪
                    TransFat: {
                        weight: "0g",
                        value: 0,
                    },
                },
                // 膽固醇
                Cholesterol: {
                    weight: "0mg",
                    value: 0,
                },
                // 鈉
                Sodium: {
                    weight: "160mg",
                    value: 7,
                },
                // 碳水化合物
                TotalCarbohydrate: {
                    weight: "37g",
                    value: 13,
                    // 膳食纖維
                    DietaryFiber: {
                        weight: "4g",
                        value: 14,
                    },
                    // 糖
                    TotalSugars: {
                        weight: "12g",
                        // 添加糖
                        AddedSugars: {
                            weight: "10g",
                            value: 20,
                        },
                    },
                },
                // 蛋白質
                Protein: {
                    weight: "3g",
                },
            },
        },
        {
            id: 6,
            image: { src: newCake2URL, alt: "new cake4" },
            title: "new cake 4",
            intro: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem labore in veniam reprehenderit. Animi, laborum natus voluptatibus provident sunt obcaecati!`,
            price: 1200,
            ingredient: [
                "1 cup (226 grams) unsalted butter, softened",
                "2 cups (370 grams) granulated sugar",
                "4 large eggs (200 grams), room temperature",
                "3 cups (300 grams) cake flour",
                "1 tablespoon (12 grams) baking powder",
                "1 cup (240 grams) milk, room temperature",
                "2 teaspoons vanilla extract",
            ],
            nutritionFacts: {
                // 脂肪
                TotalFat: {
                    weight: "8g",
                    value: 10,
                    // 飽和脂肪
                    SaturatedFat: {
                        weight: "1g",
                        value: 5,
                    },
                    // 反式脂肪
                    TransFat: {
                        weight: "0g",
                        value: 0,
                    },
                },
                // 膽固醇
                Cholesterol: {
                    weight: "0mg",
                    value: 0,
                },
                // 鈉
                Sodium: {
                    weight: "160mg",
                    value: 7,
                },
                // 碳水化合物
                TotalCarbohydrate: {
                    weight: "37g",
                    value: 13,
                    // 膳食纖維
                    DietaryFiber: {
                        weight: "4g",
                        value: 14,
                    },
                    // 糖
                    TotalSugars: {
                        weight: "12g",
                        // 添加糖
                        AddedSugars: {
                            weight: "10g",
                            value: 20,
                        },
                    },
                },
                // 蛋白質
                Protein: {
                    weight: "3g",
                },
            },
        },
        {
            id: 7,
            image: { src: newCake3URL, alt: "new cake4" },
            title: "new cake 4",
            intro: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem labore in veniam reprehenderit. Animi, laborum natus voluptatibus provident sunt obcaecati!`,
            price: 550,
            ingredient: [
                "1 cup (226 grams) unsalted butter, softened",
                "2 cups (370 grams) granulated sugar",
                "4 large eggs (200 grams), room temperature",
                "3 cups (300 grams) cake flour",
                "1 tablespoon (12 grams) baking powder",
                "1 cup (240 grams) milk, room temperature",
                "2 teaspoons vanilla extract",
            ],
            nutritionFacts: {
                // 脂肪
                TotalFat: {
                    weight: "8g",
                    value: 10,
                    // 飽和脂肪
                    SaturatedFat: {
                        weight: "1g",
                        value: 5,
                    },
                    // 反式脂肪
                    TransFat: {
                        weight: "0g",
                        value: 0,
                    },
                },
                // 膽固醇
                Cholesterol: {
                    weight: "0mg",
                    value: 0,
                },
                // 鈉
                Sodium: {
                    weight: "160mg",
                    value: 7,
                },
                // 碳水化合物
                TotalCarbohydrate: {
                    weight: "37g",
                    value: 13,
                    // 膳食纖維
                    DietaryFiber: {
                        weight: "4g",
                        value: 14,
                    },
                    // 糖
                    TotalSugars: {
                        weight: "12g",
                        // 添加糖
                        AddedSugars: {
                            weight: "10g",
                            value: 20,
                        },
                    },
                },
                // 蛋白質
                Protein: {
                    weight: "3g",
                },
            },
        },
        {
            id: 8,
            image: { src: newCake4URL, alt: "new cake4" },
            title: "new cake 4",
            intro: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem labore in veniam reprehenderit. Animi, laborum natus voluptatibus provident sunt obcaecati!`,
            price: 400,
            ingredient: [
                "1 cup (226 grams) unsalted butter, softened",
                "2 cups (370 grams) granulated sugar",
                "4 large eggs (200 grams), room temperature",
                "3 cups (300 grams) cake flour",
                "1 tablespoon (12 grams) baking powder",
                "1 cup (240 grams) milk, room temperature",
                "2 teaspoons vanilla extract",
            ],
            nutritionFacts: {
                // 脂肪
                TotalFat: {
                    weight: "8g",
                    value: 10,
                    // 飽和脂肪
                    SaturatedFat: {
                        weight: "1g",
                        value: 5,
                    },
                    // 反式脂肪
                    TransFat: {
                        weight: "0g",
                        value: 0,
                    },
                },
                // 膽固醇
                Cholesterol: {
                    weight: "0mg",
                    value: 0,
                },
                // 鈉
                Sodium: {
                    weight: "160mg",
                    value: 7,
                },
                // 碳水化合物
                TotalCarbohydrate: {
                    weight: "37g",
                    value: 13,
                    // 膳食纖維
                    DietaryFiber: {
                        weight: "4g",
                        value: 14,
                    },
                    // 糖
                    TotalSugars: {
                        weight: "12g",
                        // 添加糖
                        AddedSugars: {
                            weight: "10g",
                            value: 20,
                        },
                    },
                },
                // 蛋白質
                Protein: {
                    weight: "3g",
                },
            },
        },
    ],
    // 社群圖片
    SocialMedia: [
        { src: socialPhoto1URL, title: "social photo 1" },
        { src: socialPhoto2URL, title: "social photo 2" },
        { src: socialPhoto3URL, title: "social photo 3" },
        { src: socialPhoto4URL, title: "social photo 4" },
        { src: socialPhoto5URL, title: "social photo 5" },
    ],
};

export default data;
