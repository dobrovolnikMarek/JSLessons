'use strict';

let someFunc = function(str){
    if(typeof str !==  "string")
        return console.log("Not a string");
    else if (str.length > 30)
        return console.log(str.substr(0, 30) + "...")
    else if (str[0] === " " && str[str.length-1] === " ")
        return console.log(str.substr(1, str.length-2))
}

someFunc(10);
someFunc(" aaaaaaaa ")
someFunc("qwertyuiopasdfghjklzxcvbnmqwertyuiop");