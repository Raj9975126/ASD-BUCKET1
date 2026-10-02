const fs = require("fs/promises");
const path = require("path");

const dbPath = path.join(__dirname, "../db.json");

async function getAllProducts() {
    const data = await fs.readFile(dbPath, "utf-8");
    return JSON.parse(data || "[]");
}

module.exports = {
    getAllProducts,
};
