// test first div

document.getElementById("demo1").innerHTML = "hello world";

// this is a function to convert usd to lira

let convertFunction = function us2tr() {

    let userInput = document.getElementById("us-dollar").value;

    let result = userInput * 7.41;



    if (userInput === "") {

        document.getElementById("message").innerHTML = "please enter a valid number"

    } else if (isNaN(userInput)) {
        //        if it is not a number

        document.getElementById("message").innerHTML = "value cannot equal zero"

    } else if (userInput < 0) {

        document.getElementById("message").innerHTML = "value cannot equal negative Number"

    } else {

        document.getElementById("message").innerHTML = " your money worth " + result + " Turkish Lira";

    }

}

// let's try to make a switch function

let season = document.createElement("input");
season.placeholder = "write your favourite season here";
season.style.width = "250px";
document.body.appendChild(season);

let on_click_btn = function season_func() {
    // scope a-a
    let testPara = document.createElement("p");
    document.body.appendChild(testPara);

    let chosenSeason = season.value;
    switch (chosenSeason) {
        // scope a-b
        case "winter":
            testPara.innerHTML = "winter is cold"
            break;
        case "summer":
            testPara.innerHTML = "summer is hot"
            break;
        case "autumn":
            testPara.innerHTML = "autumn is perfect"
            break;
        case "spring":
            testPara.innerHTML = "spring is full of insects"
            break;
        default:
            testPara.innerHTML = "enter suitable season"
            break;
    }

}
let season_button = document.createElement("button");
season_button.innerText = "click me";
document.body.appendChild(season_button);
season_button.onclick = on_click_btn();

// to check whether this variable is array or not using isArray

var chk_array = document.createElement("div");
document.body.appendChild(chk_array);

let girl1 = "soha";
let girl2 = "noha";
let girl3 = "mona";
let friends = ["soha", "noha", "mona"];

if (Array.isArray(girl3)) {
    chk_array.innerText = "true,this is array";
} else {
    chk_array.innerText = "false, this is not array";
}

// this is to test some functions on arrays

document.getElementById("demo2").innerText = friends[0];
document.getElementById("demo3").innerText = friends.toString();
document.getElementById("demo4").innerText = friends.join(" and ");
// the difference between toString and join is that by using join you can add whatever you want between strings like space, comma, dash, semi-colon, or anything

let countries = ["japan", "argentina", "china", "italy", "libya", "oman"];
document.getElementById("demo5").innerText = countries.push("germany");
// push will add the variable to the end and print no. of variables inside the array (7)
countries.unshift("sudan");
// unshift will add the variable at the very beginning of the array
document.getElementById("demo6").innerText = countries.splice(1, 0, "maly", "morocco");
// using splice like this (index, how many elements to delete, pushed elements respectively);
countries.pop();
// this will delete the last element of the array
countries.shift();
// this will delete the first element of the array

let check_site = document.getElementById("specific_site");
let w3school = "www.w3school.com";
let gsmarena = "www.gsmarena.com";
let github = "www.github.com";

let siteSelection = document.createElement("button");
document.body.appendChild(siteSelection);
siteSelection.id = "#site_selection";

$("#demo7").html(() => {
    if (check_site.value == w3school) {
        // siteSelection.onclick = (window.open("https://www.w3schoo.com"));
    } else {
        // siteSelection.onclick = (window.open("https://www.gsmarena.com"));
    }
})