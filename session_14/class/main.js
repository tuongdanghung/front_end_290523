function ex_1() {
    const cars = ['BMW', 'Toyota', 'Honda']
    const allItem = new Array('item1', 'item2', 'item3', 'item4', 'item5', 'item6');
    console.log(cars[1]);
    console.log(allItem);

    // for (let i = 0; i < cars.length; i++) {
    //     console.log(cars[i]);
    // }

    const newArr = []
    for (let i = 0; i < 10; i++) {
        // newArr.push(i)
        newArr[i] = i
    }
    console.log(newArr);

    // for in lấy được chỉ số của mảng
    for (const index in allItem) {
        console.log(index, "------", allItem[index]);
    }
    // for off lấy được value của mảng
    for (const item of allItem) {
        console.log(item);
    }

    // CRUD array
    const arr = [{ 1: 1 }]
    const newArrs = [...arr, { 2: 2 }]
    console.log(newArrs);

    const arr2 = [1, 2, 3, 4, 5]
    let number = 0
    for (let i = 0; i < arr2.length; i++) {
        if (arr2[i] > number) {
            number = arr2[i]
        }

    }
    console.log(number);

    const myColor = ["Lion", "Tiger", "Wolf", "Kangaroo"];
    let string = ""
    for (let i = 0; i < myColor.length; i++) {
        string += myColor[i] + ","
    }
    console.log(string.slice(0, -1));

    let text = myColor.join(", ")
    console.log(text);
    const text_1 = myColor.toString()
    console.log(text_1);

}

function ex_2() {
    let string = '245468'
    let string_2 = ""
    for (let i = 0; i < string.length; i++) {
        if (string[i] % 2 == 0 && string[i + 1] % 2 == 0) {
            string_2 += string[i] + "_"
        } else {
            string_2 += string[i]
        }
    }
    console.log(string_2);
}

// function ex_3() {
//     let str = 'The quick brown fox jumps over the lazy dog.';
//     let string = ""
//     const words = str.split(' ');
//     for (let i = 0; i < words.length; i++) {
//         words[i] = words[i][0].toLowerCase() + words[i].slice(1).toUpperCase()
//         string += words[i] + " "
//     }
//     console.log(string);
// }
function ex_3() {
    let string = prompt("nhap")
    let str = ''
    for (let i = 0; i < string.length; i++) {
        if (string[i] == string[i].toUpperCase()) {
            str += string[i].toLowerCase()
        } else {
            str += string[i].toUpperCase()
        }
    }
    console.log(str)
}
function ex_4() {
    let translate = document.getElementById("translate").value
    let eng = ['hello', 'world', 'good']
    let vie = ['xin chào', 'thế giới', 'tốt']
    for (let i = 0; i < eng.length; i++) {
        if (translate == eng[i]) {
            console.log(eng[i], "-----", vie[i]);
        } else {
            console.log("nhap sai")
        }
    }
}
function ex_5() {
    let area = document.getElementById("area").value
    let strArr = " Tôi Là Một Thằng Ngốc!"
    let str = "";

    let array = strArr.split('');
    for (let i = 0; i < area.length; i++) {
        str = str + array[i];
        if (str.length === strArr.length) {
            str = ""
        }
    }
    console.log(str);
    document.getElementById("area").value = str;
}

