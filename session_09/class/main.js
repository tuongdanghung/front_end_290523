// for (let items = 2; items <= 9; items++) {
//     for (let item = 1; item <= 10; item++) {
//         console.log(`${items} * ${item} = `, items * item);
//     }
//     console.log("-----");
// }

// // In các số từ 10 đến 1
// for (let items = 1; items <= 9; items++) {
//     for (let item = 9; item >= 1; item--) {
//         console.log(`${items} * ${item} = `, items * item);
//     }
//     console.log(">>>>>>>>>>>>>>>>>");
// }

// var x = 1.0 - 0.1 - 0.1 - 0.1 - 0.1 - 0.1;
// console.log(x);
// const number = 5
// switch (number) {
//     case 1:
//         console.log("1");
//         break;
//     case 2:
//         console.log("2");
//         break;
//     case 3:
//         console.log("3");
//         break;
//     case 4:
//         console.log("4");
//         break;
//     case 5:
//         console.log("nam");
//         break;

//     default:
//         break;
// }

// switch (new Date().getDay()) {
//     case 0:
//         console.log(day = "Chủ Nhật");
//         break;
//     case 1:
//         console.log(day = "Thứ hai");
//         break;
//     case 2:
//         console.log(day = "Thứ ba");
//         break;
//     case 3:
//         console.log(day = "Thứ tư");
//         break;
//     case 4:
//         console.log(day = "Thứ năm");
//         break;
//     case 5:
//         console.log(day = "Thứ sáu");
//         break;
//     case 6:
//         console.log(day = "Thứ bảy");
//         break;
// }

function handleBmi() {
    const kg = Number(prompt("kg"))
    const height = Number(prompt("height"))
    const rank = kg / Math.pow(height, 2)
    switch (true) {
        case rank <= 18:
            document.getElementById("bmi").innerHTML = "Underweight"
            break;
        case rank <= 25:
            document.getElementById("bmi").innerHTML = "Normal"
            break;
        case rank <= 30:
            document.getElementById("bmi").innerHTML = "Overweight"
            break;
        default:
            document.getElementById("bmi").innerHTML = "Obese"
    }
}

function dateTime() {
    switch (new Date().getDay()) {
        case 0:
            document.getElementById("time").innerHTML = "Chủ Nhật"
            break;
        case 1:
            document.getElementById("time").innerHTML = "Thứ hai"
            break;
        case 2:
            document.getElementById("time").innerHTML = "Thứ ba"
            break;
        case 3:
            document.getElementById("time").innerHTML = "Thứ tư"
            break;
        case 4:
            document.getElementById("time").innerHTML = "Thứ năm"
            break;
        case 5:
            document.getElementById("time").innerHTML = "Thứ sáu"
            break;
        case 6:
            document.getElementById("time").innerHTML = "Thứ bảy"
            break;
    }
}

function month() {
    const monthInput = Number(prompt("month"))
    switch (monthInput) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            console.log("31 day");
            break;
        case 2:
            console.log("28 day");
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            console.log("30 day");
            break;
        default:
            console.log("sai");
    }
}

function electron() {
    var inputElement = document.getElementById("electronNumber");
    var price = 0
    const rank_1 = 50 * 1700
    const rank_2 = 100 * 1800
    const rank_3 = 100 * 1900
    const rank_4 = 100 * 2000
    const rank_5 = 100 * 2200
    var value = inputElement.value
    switch (true) {
        case value <= 50:
            price = (value - 50) * 1700 + rank_1
            break;
        case value <= 100:
            price = (value - 100) * 1800 + rank_2
            break;
        case value <= 200:
            price = (value - 200) * 1900 + rank_3
            break;
        case value <= 300:
            price = (value - 300) * 2000 + rank_4
            break;
        default:
            price = (value - 400) * 2200 + rank_5
    }
    document.getElementById("money").innerHTML = price.toLocaleString()
}

function total() {
    const amount = document.getElementById("amount").value
    var curency = document.getElementById("curency").value;
    var getCurency = document.getElementById("getCurency").value;
    let price = 0
    if (curency === "vn" && getCurency === "usd") {
        price = amount / 23000
    } else if (curency === "vn" && getCurency === "kod") {
        price = amount / 20000
    } else if (curency === "usa" && getCurency === "vnd") {
        price = amount * 23000
    } else if (curency === "usa" && getCurency === "kod") {
        price = amount * 10000
    } else if (curency === "kor" && getCurency === "vnd") {
        price = amount * 20000
    } else if (curency === "kor" && getCurency === "usd") {
        price = amount / 10000
    }
    document.getElementById("moneys").innerHTML = price
}

function loop() {
    let number = 0
    let sum = 0
    for (let count = 0; count < 30;) {
        if (number % 7 === 0) {
            count++
            sum = sum + number
        }
        number++
        console.log(number, "---------------", count, "-----------", sum);
    }
    // cach 1  tinh tong 30 so
}

// function loop() {
//     let number = 0
//     let sum = 0
//     for (let count = 0; count < 30; count++) {
//         sum += number
//         number += 7
//         console.log(number, "---------------", count, "-----------", sum);
//     }
//     // cach 2  tinh tong 30 so
// }

function fizzBuzz() {
    for (let i = 1; i <= 100; i++) {
        console.log(i);
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("fizzBuzz");
        } else if (i % 5 === 0) {
            console.log("buzz");
        } else if (i % 3 === 0) {
            console.log("fizz");
        }
    }
    // cach 2  tinh tong 30 so
}