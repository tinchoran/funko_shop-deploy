const productModel = require("../models/productModel")


const getAllProducts = async (page) => {
    if(!page){
        page = 1;
    }
    return await productModel.getAll(page)
}

const getAllAdmin = async () => {
    return await productModel.getAllAdmin();
}

const getLicenses = async () => {
    return await productModel.getLicenses();
}

const getCategories = async () => {
    return await productModel.getCategories();
}

const getProductById = async (id) => {

    return await productModel.getOne({product_id: id})
}

const getRelated = async (id) => {
    return await productModel.getRelated({license_id: id})
}

const createProduct = async (params, files) => {

    const itemSchema = {
        product_name: params.name,
        product_descriptcion: params.description,
        price: params.price,
        stock: params.stock,
        discount: params.discount,
        sku: params.sku,
        dues: params.dues,
        image_front: "/" + files[0].filename,
        image_back: "/" + files[1].filename,
        license_id: params.collection,
        category_id: params.category
    }

    return await productModel.createProduct([Object.values(itemSchema)]);

}

const modifyProduct = async (params, id) => {

    const itemSchema = {
        product_name: params.name,
        product_description: params.description,
        price: params.price,
        stock: params.stock,
        discount: params.discount,
        sku: params.sku,
        dues: params.dues,
        license_id: params.collection,
        category_id: params.category
    }

    return await productModel.updateProduct(itemSchema , {product_id: id});

}

const deleteProduct = async (id) => {

    return await productModel.deleteProduct({product_id: id});

}

module.exports = {
    getProductById,
    getAllProducts,
    getCategories,
    getLicenses,
    getRelated,
    createProduct,
    modifyProduct,
    deleteProduct,
    getAllAdmin
}