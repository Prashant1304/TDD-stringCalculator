function Add(string) {
    let output = 0

    split = string.split(",");
    
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


    let split= "1,2,3".split(",");
    let output = 0
    
    for(var i = 0;i < split.length; i++ ) {
        let number = +split[i]
        output+=number
    }
    console.log(output)    
  
module.exports = Add