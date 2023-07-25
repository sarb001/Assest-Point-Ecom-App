
const ProductinCart = (id,cart) => {
    return cart?.some((item) => item?._id === id);
}

export default ProductinCart