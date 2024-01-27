const { conn } = require("../config/conn");

const getAll = async () => {
    
    try {
        const [ rows ] = await conn.query("SELECT * FROM product;"); 

        return {
            isError: false,
            info: rows
        }
    } catch (error) {
        return {
            isError: true,
            msg: `Hubo un error con la conexión a la base de datos: ${error}`
        }
    } finally{

        conn.releaseConnection();

    }


}


const getOne = async (params) => {

    try {
        const [ rows ] = await conn.query("SELECT * FROM product WHERE ?;", params)

        return {
            isError: false,
            info: rows
        }

    } catch (error) {

        return {
            isError: true,
            msg: `Hubo un error con la conexión a la base de datos: ${error}`
        }

    } finally{

        conn.releaseConnection();

    }


}

const getLicenses = async () => {

    try {
        
        const [ rows ] = await conn.query("SELECT * FROM license;")

        return {
            isError: false,
            info: rows
        }

    } catch (error) {
        
        return {
            isError: true,
            msg: "Hubo un error al rescatar las licencias de la BDD: " + error
        }

    } finally {
        
        conn.releaseConnection();

    }

}

const getCategories = async () => {

    try {
        
        const [ rows ] = await conn.query("SELECT * FROM category;");

        return {
            isError: false,
            info: rows
        }

    } catch (error) {
        
        return {
            isError: true,
            msg: "Hubo un error al rescatar las categorias: " + error
        }

    } finally {

        conn.releaseConnection();

    }

}

const getRelated = async (params) => {

    try {
        
        const [ rows ] = await conn.query("SELECT * FROM product WHERE ? ", params);

        return {
            isError: false,
            info: rows
        }

    } catch (error) {
        
        return {
            isError: true,
            msg: "Hubo un error al rescatar los productos relacionados: " + error
        }

    } finally {
        conn.releaseConnection()
    }

}

const createProduct = async (params) => {

    try {
        
        const [rows] = await conn.query(
            'INSERT INTO product (product_name, product_description, price, stock, discount, sku, dues, image_front, image_back, license_id, category_id) VALUES ?;', 
            [params]
        );
        //console.log(rows);

        return {
            isError:false,
            msg: "Producto creado correctamente"
        }
    } catch (error) {
        
        return {
            isError: true,
            msg: `Hubo un error al crear el producto: ${error}`
        }

    } finally {
        
        conn.releaseConnection();

    }

}


const updateProduct = async (params) => {

    try {
        
        await conn.query(
            "UPDATE product SET ? WHERE ?;", 
            [params, {product_id: params.product_id}]
        )

    } catch (error) {
        
        return {
            isError: true,
            msg: `Hubo un error al modificar el producto: ${error}`
        }

    } finally{

        conn.releaseConnection();

    }

}


const deleteProduct = async (params) => {

    try {
        
        await conn.query("DELETE FROM product WHERE ?;", params)

        return {
            isError: false,
            msg: "Producto eliminado con éxito"
        }

    } catch (error) {
        
        return {
            isError: true,
            msg: `Hubo un error al intentar eliminar el producto: ${error}`
        }

    } finally {

        conn.releaseConnection();

    }

}


module.exports = {
    getAll,
    getOne,
    getCategories,
    createProduct,
    updateProduct,
    deleteProduct,
    getLicenses,
    getRelated
}