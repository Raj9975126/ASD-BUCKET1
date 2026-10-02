// // const { rejects } = require("assert");
// const express = require("express");
// const fs = require("fs/promises");
// const path = require("path");
// const app = express();
// const port = 3000;


// const { cacheMiddleware } = require("./middleware/cache");
// const filepath = path.join(__dirname, "db.json");

// // const data = fs.readFileSync(filepath, "utf-8");

// async function readData(){
//     let products = await fs.readFile(filepath, "utf-8")
//     return JSON.parse(products)
// }

// async function delayReadFile(){
//     await new Promise ((resolve, reject) =>{
//         setTimeout(resolve, 1500)
//     })
//     return await readData()
// }

// app.get('/products', cacheMiddleware, async (req, res) =>{
//     try{
//         let data = await delayReadFile()
//         // data.find((item) => item.id === id)
//         res.json(data);
//     }catch(err){
//     console.log(err);
//     res.status(500).json({ error: "Something went wrong" });
// }
    
// });

// app.listen(3000, () =>{
//     console.log(`Example app listening on port ${port}`);
// })


// "/products" -- []

const express = require("express");

const app = express();
const port = 3000;

const { cacheMiddleware } = require("./middleware/cache");
const { getProducts } = require("./controllers/productController");

app.get("/products", cacheMiddleware, getProducts);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});