function add(x, y, z) {
    var x = document.getElementById("first-paragraph").innerHTML;
    var y = document.getElementById("second-paragraph").innerHTML;
    var z = document.getElementById("third-paragraph").innerHTML;
    console.log(parseInt(x) + (y) + (z));
}

function sub(x, y, z) {
    var x = document.getElementById("first-paragraph").innerHTML;
    var y = document.getElementById("second-paragraph").innerHTML;
    var z = document.getElementById("third-paragraph").innerHTML;
    console.log(parseInt(x) - (y) - (z));
}

function mult(x, y, z) {
    var x = document.getElementById("first-paragraph").innerHTML;
    var y = document.getElementById("second-paragraph").innerHTML;
    var z = document.getElementById("third-paragraph").innerHTML;
    console.log(parseInt(x) * (y) * (z));
}


document.getElementById("first-paragraph").innerHTML = 10;
document.getElementById("second-paragraph").innerHTML = 9;
document.getElementById("third-paragraph").innerHTML = 8;


var math = {
    firstNum: 3,
    secondNum: 5,
    thirdNum: 7,
    forthNum: 9,
    add:function () {
        var x= this.firstNum + this.secondNum + this.thirdNum + this.forthNum;
        var sub = this.firstNum - this.secondNum - this.thirdNum - this.forthNum;
        var mult = this.firstNum * this.secondNum * this.thirdNum * this.forthNum;
        var divide = this.firstNum / this.secondNum / this.thirdNum / this.forthNum;
         return (x, sub);

    }

};

document.getElementById("math-operation").innerHTML = math.add();


var array_numbers = [2,4,6,8,10];
array_numbers.forEach(sum);

function sum(index){
    for (counter=0; counter<array_numbers.length; counter++);
    document.write(counter);

}
