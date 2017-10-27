const express = require('express');
const bodyParser = require('body-parser');
const cors = require("cors");
const massive = require('massive');
const connectionString = 'postgres://wwvldvuw:G8813FJ5n6oe9wG4dBLLWxiTa5i_LN-G@elmer.db.elephantsql.com:5432/wwvldvuw'

const app = express();
app.use(bodyParser.json())
app.use(cors());

//DB

massive(connectionString).then(db => {
    app.set('db', db);
})

app.get('/api/getproducts', (req, res, next) => {
    console.log('getting products...')
    req.app.get('db').get_products().then((products) => {
            res.status(200).send(products)
        })
})

const port = 3014
app.listen(port, '0.0.0.0', () => {
    console.log(`listening on ${port}`)
})