const shopProducts = [
    {
        id: 1,
        name: "Gentle Daily Cleanser",
        category: "Cleanser",
        price: 575,
        rating: 4.8,
        reviews: 124,

        image: "/images/cleanser.png",

        images: [
            "/images/cleanser.png",
            "/images/cleanser.png",
            "/images/cleanser.png",
            "/images/cleanser.png",
        ],

        description:
            "A gentle cleanser that removes impurities while keeping your skin hydrated.",

        skinType: ["Dry", "Normal", "Sensitive"],
        concerns: ["Dryness", "Sensitivity"],
        featured: true,
    },

    {
        id: 2,
        name: "Glow Renewal Serum",
        category: "Serum",
        price: 899,
        rating: 4.9,
        reviews: 210,
        image: "/images/serum.png",
        description:
            "A lightweight serum formulated to boost radiance and support glowing skin.",
        skinType: ["Normal", "Dry", "Combination"],
        concerns: ["Dullness", "Uneven Skin Tone"],
        featured: true,
    },

    {
        id: 3,
        name: "Hydra Barrier Moisturizer",
        category: "Moisturizer",
        price: 749,
        rating: 4.7,
        reviews: 156,
        image: "/images/moisturizer.png",
        skinType: ["Dry", "Normal", "Sensitive", "Combination"],
        concerns: ["Dryness", "Sensitivity", "Strong Skin Barrier"],
    },


    {
        id: 4,
        name: "Daily Shield Sunscreen",
        category: "Sunscreen",
        price: 699,
        rating: 4.9,
        reviews: 189,
        image: "/images/sunscreen.png",
        skinType: ["Dry", "Normal", "Combination"],
        concerns: ["Dullness", "Uneven Skin Tone", "Healthy Glow"],
    },

    {
        id: 5,
        name: "Ultra glow strobe cream",
        category: "Glow Cream",
        price: 780,
        rating: 4.5,
        reviews: 119,
        image: "/images/glowcream.png",
        skinType: ["Dry", "Oily", "Combination", "Normal", "Sensitive"],
        concerns: [
            "Dark Spots",
            "Uneven Skin Tone",
            "Healthy Glow",
        ],
    },

    {
        id: 6,
        name: "Lip balm",
        category: "Lip Care",
        price: 349,
        rating: 4.9,
        reviews: 150,
        image: "/images/lipbalm.png",


    },
    {
        id: 7,
        name: "Glycolic Acid Toner",
        category: "Toner",
        price: 999,
        rating: 4.5,
        reviews: 90,
        image: "/images/glycolicAcid.png",
        skinType: ["Dry", "Normal", "Sensitive"],
        concerns: [
            "Dryness",
            "Deep Hydration",
            "Strong Skin Barrier",
            "Sensitivity",
        ],
    },

    {
        id: 8,
        name: "Foam Cleanser",
        category: "Cleanser",
        price: 399,
        rating: 4.2,
        reviews: 190,
        image: "/images/foamCleanser.png",
        skinType: ["Dry", "Oily", "Combination", "Normal", "Sensitive"],
        concerns: [
            "Dark Spots",
            "Uneven Skin Tone",
            "Healthy Glow",
        ],
    },
    {
        id: 9,
        name: "Radiance gel cream",
        category: "Moisturizer",
        price: 450,
        rating: 3.2,
        reviews: 136,
        image: "/images/gelCream.png",
        skinType: ["Dry", "Oily", "Combination", "Normal", "Sensitive"],
        concerns: [
            "Dark Spots",
            "Uneven Skin Tone",
            "Healthy Glow",
        ],
    },

    {
        id: 10,
        name: "Lip gloss & lip scrub combo",
        category: "Lip Care",
        price: 699,
        rating: 4.1,
        reviews: 189,
        image: "/images/lipCombo.png",
    },
];

export default shopProducts;