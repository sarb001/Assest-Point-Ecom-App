

export const getProductsbyRating = (product,rating) => {
    return rating ?  
    [...product].filter((product) =>  product.rating >= rating ) : product;
}