const server = require("./server")
const {PORT=3000} = process.env 
server.listen(PORT,()=>{
    console.log(`\nExpress departing now from port 3000!\n`)
})

