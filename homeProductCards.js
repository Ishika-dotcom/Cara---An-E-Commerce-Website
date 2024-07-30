const productContainer = document.querySelector(".pro-container");
const productTemplate = document.querySelector("#productTemplate");

export const showProductContainer = (products) => {
    if(!products){
        return false;
    }

    products.forEach((curProd) =>{
        const {id, name, description, image, price} = curProd;

        const productClone = document.importNode(productTemplate.content, true);

        productClone.querySelector(".productName").textContent = name;
        productClone.querySelector(".productImage").src = image;
        productClone.querySelector(".productImage").alt = name;
        productClone.querySelector(".productDes").textContent = description;
        productClone.querySelector(".productPrice").textContent = `₹${price}`;

        productContainer.append(productClone);
    });
};