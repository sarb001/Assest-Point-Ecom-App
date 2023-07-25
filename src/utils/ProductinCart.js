
const ProductinCart = (id,cart) => {
    return cart?.find((item) => item?.id === id);
}

export default ProductinCart