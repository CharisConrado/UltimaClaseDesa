function sumar (acumulado, valor, callback){
    let suma
    return new Promise(function(resolve, ){

        setTimeout( function () {
            suma = acumulado + valor
            callback()
        }, 300);})
   
    
    

    //return suma 
}

console.log("Al inico del programa")
let acumulado = 0 
sumar(acumulado, 4)
.then(function(suma){
    return suma(suma, 4) 
})

.then(function(suma){
    console.log(suma)
})

  


console.log(acumulado)

console.log("Al final del programa")

//Buscar el uso de callbacks
//acumulado = sumar(acumulado, 4)
//acumulado = sumar(acumulado, 4)
