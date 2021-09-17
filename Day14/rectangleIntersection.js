class Rectangle {
    constructor(xMin, yMin, xMax, yMax){
        this.xMin = xMin;
        this.yMin = yMin;
        this.xMax = xMax;
        this.yMax = yMax;
    }

    area(){
        return ((this.xMax - this.xMin) * (this.yMax - this.yMin));
    }

    static findIntersection(a, b){
        return new Rectangle(Math.max(a.xMin, b.xMin), Math.max(a.yMin, b.yMin), Math.min(a.xMax, b.xMax) ,Math.min(a.yMax, b.yMax))
        
    }
} 

let a  = new Rectangle(0, 0, 3, 2)
let b = new Rectangle(1, 1, 3, 3)

console.log('Rectangle ', a.area())

console.log('Rectangle ', b.area())

console.log('find intersection', Rectangle.findIntersection(a, b).area())