function generator(){
    let pass = ""
    let caracter = '1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
    range = 10
    for(i = 0, n = caracter.length; i < range; ++i){
        pass += caracter.charAt(Math.floor(Math.random()*n))

    }
    document.getElementById("password").innerHTML = pass

}