const { getAllProducts } = require("../database/productDatabase");

async function fetchProducts() {
    // Simulate async I/O delay if needed
    await new Promise((resolve) => setTimeout(resolve, 500));
    return await getAllProducts();
}

module.exports = {
    fetchProducts,
};
