

export const getProductsbyRating = (product,rating) => {
    return [...product].filter((product) => (
        product.rating >= rating
    ))
}