const bcrypt = require('bcrypt');

function encriptar(){
    bcrypt.hash("claveSinEncriptar",10, function(err,hash){
        console.log(hash)
    });
}

encriptar();