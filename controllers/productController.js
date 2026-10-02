const { fetchProducts } = require("../services/productService");

async function getProducts(req, res) {
    try {
        const products = await fetchProducts();
        res.json(products);
    } catch (error) {
        console.error("Error in getProducts controller:", error);
        res.status(500).json({ error: "Something went wrong" });
    }
}

module.exports = {
    getProducts,
};
