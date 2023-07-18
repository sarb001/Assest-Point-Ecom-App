
export const getProductsbyCategory = (products,category) => {
        return [...products].filter((product) => (
            product.category === category
        ))
}