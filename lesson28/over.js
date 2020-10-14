const over = (x, y)=>{
    // if (x > y) return x;
    // if (x < y) return y;
    // return "equal";
    if(typeof x === "number" && typeof y === "number"){
         if (x > y) return x;
         if (x < y) return y;
         return "equal";
    }
    if(typeof x === "string") return 'x - string';
    if(typeof y === "string") return 'y - string';
};

module.exports = over;