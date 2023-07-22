export const isProductinCart = (id,cart) => {
    return cart.some((item) => item?.id === id);
}