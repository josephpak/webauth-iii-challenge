const server = require('./api/server.js')

const port = process.env.PORT || 5500
server.listen(port, () => {
    console.log(`*** Server running on port ${port} ***`)
})