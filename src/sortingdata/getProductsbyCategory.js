
export const getProductsbyCategory = (products,category) => {

    console.log('category --',category);

    let filterProducts = [];
    let count = 0;


    for(let x in category){
         if(category[x]){
            filterProducts = filterProducts.concat(
                [...products].filter((product) => product.category === x)
            );
         }else{
            count++;
         }
    }

    return count === 3 ? products : filterProducts;

}