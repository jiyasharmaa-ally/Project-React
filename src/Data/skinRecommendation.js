import shopProducts from "./shopData";

function getRecommendedProducts(answers) {
  const scoredProducts = shopProducts.map((product) => {
    let score = 0;

    // Skin type match
    if (product.skinType?.includes(answers.skinType)) {
      score += 3;
    }

    // Main concern match
    if (
      product.concerns?.includes(answers.concern)
    ) {
      score += 4;
    }

    // Goal match
    if (
      product.concerns?.includes(answers.goal)
    ) {
      score += 4;
    }

    return {
      ...product,
      score,
    };
  });

  // Highest matching products first
  return scoredProducts
    .filter((product) => product.score > 0)
    .sort((a, b) => b.score - a.score);
}

export default getRecommendedProducts;