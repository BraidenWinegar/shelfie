

module.exports ={
    getInventory: (req, res, next) =>{
        const db = req.app.get('db')

        db.get_inventory()
        .then(dbRes => res.status(200).send(dbRes))
        .catch(err => {
            res.status(500).send(console.log('failed db.get'))
        })
    },

    addProduct: (req, res) => {
        const {product_name, price, image_url} = req.body;
        const db = req.app.get('db');
        db.add_product(product_name, price, image_url).then(users =>{
            res.sendStatus(200)
        })
        .catch(err => res.status(500).send(err))
    },

    updateProduct: (req, res) => {
        const db = req.app.get('db')
        const {id} = req.params
        const {product_name, price, image_url} = req.body
        db.update([id, product_name, price, image_url])
        .then(data => res.sendStatus(200))
    },

    deleteProduct: (req, res) => {
        const db = req.app.get('db')
        const {id} = req.params
        console.log('delete hit')
        db.delete(id)
        .then(data => res.status(200).send(data))
    }
}