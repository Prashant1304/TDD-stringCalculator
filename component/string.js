function Add(string) {
    let output = 0
    let split; 

    if(string == ""   ) {
        split = string.split("")
    } else {
        split = string.match(/\d/g)
    }

    for(var i = 0;i < split.length; i++ ) {
        let number = +split[i]
        output+=number
        
    }    
    
    if(string == "") {
        return 0
    } else  {
        return output
    }
    
}


    let split= "1\n2,3".match(/\d/g);
    let output = 0
    
    for(var i = 0;i < split.length; i++ ) {
        let number = +split[i]
        output+=number
    }
    console.log(output)    
  
module.exports = Add