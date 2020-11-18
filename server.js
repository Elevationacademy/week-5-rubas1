const express = require('express')
const path = require('path')
const app = express()
const port = 3000
const store = [
    { name: "table", inventory: 3, price: 800 },
    { name: "chair", inventory: 16, price: 120 },
    { name: "couch", inventory: 1, price: 1200 },
    { name: "picture frame", inventory: 31, price: 70 }
]
app.use(express.static(path.join(__dirname, 'dist')))
app.use(express.static(path.join(__dirname, 'node_modules')))

app.get('/', function (request, response) {
    response.send( "Server is up and running smoothly")
})
app.get('/priceCheck/:name', function (request, response) {
    let name = request.params.name
    let res = store.find(ele => ele.name === name)
    response.send(res)
})
app.get('/buy/:name', function (request, response) {
    let name = request.params.name
    let i = 0
    let ele
    for(let res of store){
        if(res.name === name){
            store[i].inventory--
            ele = res
        }else{
            i++
        }
    }
    response.send(ele)
})
app.listen(port, function(){
    console.log(`Running server on port ${port}`)
})