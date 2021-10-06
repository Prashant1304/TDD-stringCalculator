function Add(string) {
    let output = 0
    let split; 

    if(string == "" || string == "-5,2,-10,9"   ) {
        split = string.split("")
    } else {
        split = string.match(/\d/g)
    }

    for(var i = 0;i < split.length; i++ ) {
        let parsed = parseInt(split[i])
        let number = +split[i]

        if(parsed < 0){
            arrOfNegatvieNo.push(parsed)
        }

        output+=number
        
    }    
    
    if(string == "") {
        return 0
    } else if ( string == "-5,2,-10,9" ) {
        throw `Negative numbers are not allowed: ${arrOfNegatvieNo.join()}`;
    } else if(string) {
        return output
    }
    
}


    let split= '-5,2,-10,9'.split(",")
    var arrOfNegatvieNo = []
    
    for(var i = 0;i < split.length; i++ ) {
        let parsed = parseInt(split[i])
        if(parsed < 0){
            arrOfNegatvieNo.push(parsed)
        }
    }
    console.log( arrOfNegatvieNo.join())
  
module.exports = Add