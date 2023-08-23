console.log("Mensaje 1");
setTimeout(function(){
    console.log("Mensaje 2");
    
    setTimeout(function(){
        console.log("Mensaje 3");
    },0)
}, 3000);