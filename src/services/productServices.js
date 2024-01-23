const productModel = require("../models/productModel")


const getAllProducts = async () => {
    return await productModel.getAll()
}

const getProductById = async (id) => {

    return await productModel.getOne({product_id: id})
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
        license_id: params.license,
        category_id: params.category
    }

    return await productModel.createProduct([Object.values(itemSchema)]);

}

const modifyProduct = async (params) => {

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
        create_time: params.create_time,
        license_id: params.license,
        category_id: params.category
    }

    return await productModel.updateProduct(itemSchema);

}

const deleteProduct = async (id) => {

    return await productModel.deleteProduct({product_id: id});

}

module.exports = {
    getProductById,
    getAllProducts,
    createProduct,
    modifyProduct,
    deleteProduct
}