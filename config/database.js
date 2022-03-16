const mongoose = require('mongoose')

const conexao = async() => {
    //conexao local
    //var bdlocal = await mongoose.connect('mongodb://localhost/AC1tri')
    //conexao atlaas
    var atlas = await mongoose.connect('[seu script de conexao do atlas')
}

module.exports = conexao