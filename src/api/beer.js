

import data from '../data/category_beer.json'
import dataStyle from '../data/styles_beer.json'
import imagesRef from '../data/imagesRef'
const getAllCategory = ()=>{
    return data;
}

const getImage = (styleId) => {
    return imagesRef.filter(img => img.styleId == styleId)[0].img;
}
const getStyles = (idcategory) =>{
    return dataStyle.filter(category => category.categoryId == idcategory);
}

const getStyleById = (styleId)=>{
    return dataStyle.filter(style => style.id == styleId)[0];
}

export default {
    getAllCategory,
    getStyles,
    getStyleById,
    getImage,
}