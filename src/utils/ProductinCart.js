
const ProductinCart = (id,cart) => {
    return cart.some((item) => item?.id === id);
}

export default ProductinCart