

export const getProductsbyPrice = (products,price) => {
        return [...products].filter((item) => (
            item.newPrice <= price
        ))
}