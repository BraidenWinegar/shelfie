require('dotenv').config()

const express = require('express')
const massive = require('massive')
const ctrl = require('./controller')

const app = express()
app.use(express.json())

const{SERVER_PORT, CONNECTION_STRING} = process.env


massive(CONNECTION_STRING)
    .then(db => { 
        app.set('db', db)  
        console.log('db connected')
    })
    .catch(err => console.log(err))    
    
    
    //endpoints
    app.get('/api/inventory', ctrl.getInventory )
    // app.post('/api/comments', ctrl.addComment )
    // app.put('/api/comments/:id', ctrl.updateComment )

    
    app.listen(SERVER_PORT, console.log(`server on ${SERVER_PORT}`))