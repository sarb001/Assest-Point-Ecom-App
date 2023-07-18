
export const getProductsBySort = (product,sortby) => {
         if(sortby === "LOW_TO_HIGH"){
            return[...product].sort((product1,product2) =>
             product1.newPrice - product2.newPrice);
         }
         if(sortby === "HIGH_TO_LOW"){
            return[...product].sort((product1,product2) =>
            product2.newPrice - product1.newPrice);
         }
         return product;
};