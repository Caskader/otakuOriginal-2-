const exp = require("express")
// const path = require('path')
const app = exp()

app.use(exp.static('public'));



app.listen(2000,()=>{console.log("listening on 2000")})
