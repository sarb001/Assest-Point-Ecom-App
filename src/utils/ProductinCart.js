
const ProductinCart = (id,cart) => {
    return cart?.find((item) => item?._id === id);
}

export default ProductinCart