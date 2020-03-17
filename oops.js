function Circle(radius){
    return{
        radius:radius;
        draw:function(){
            console.log("drwa circle");
        }
    }


};
var circle=Circle(3);
console.log(circle.radius);
console.log(circle.draw());