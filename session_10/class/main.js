
function ex_01() {
    let result = ""
    for (let i = 1; i < 10; i++) {
        result += ` 5 * ${i} = ${i * 5} <br/>`
    }
    document.getElementById('data').innerHTML = result
}

function ex_02() {
    for (let i = 0; i < 100000; i++) {
        console.log(i);
        if (i === 10) {
            break
        }

    }
}

function ex_03() {
    let number = ''
    for (let row = 1; row <= 9; row++) {
        number += '<tr>'
        for (let col = 2; col <= 9; col++) {
            number += `<td>
            ${col} * ${row} = ${row * col}</td>`
        }
        number += '</tr>'
    }
    document.getElementById('bangCuuChuong').innerHTML = number
}

function ex_04() {
    let number = document.getElementById('number').value
    if (number < 2 || number > 100) {
        console.log("sai");
    } else {
        for (let i = 0; i <= number; i++) {
            if ((i * i) % 2 === 0) {
                console.log(i, i * i);
            }
        }
    }
}

function ex_05() {
    let number = document.getElementById('star').value
    let string = "";
    for (let i = 1; i <= number; i++) {
        console.log(i);
        for (let k = 0; k < i; k++) {
            string += "*";
        }
        string += "\n";
    }
    console.log(string);
}

function ex_06() {
    let isPrime = true;
    let number = document.getElementById('snt').value
    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            isPrime = false;
            console.log("khong phai so nguyen to");
        }
    }
    if (isPrime) {
        console.log('la so nguyen to');
    }
}

function ex_07() {
    let sum = 0;
    let input = document.getElementById('shh').value
    let number = Number(input)
    for (let i = 1; i < number; i++) {
        if (number % i === 0) {
            sum += i
        }
    }
    if (sum === number) console.log('la so hoan hao');
    else console.log("ko phai so hoan hao");
}

function ex_08() {
    let N = 1
    let count = 0
    let prefectNumber = "";
    let m = 0
    while (count < 1) {
        let sum = 0;
        for (let i = 0; i < N / 2; i++) {
            if (N % i === 0) {
                sum += i
            }
        }
        if (sum === N) {
            prefectNumber += N + " "
            count++;
        }
        N++;
        m++
    }
    console.log("so lan lap ", m);
    console.log(prefectNumber, "---");
}

function ex_09() {
    let number = Number(prompt("Nhập N"));

    for (let i = 2; i <= number; i++) {
        let isPrime = true;

        for (let j = 2; j < i; j++) {
            if (i % j === 0) {
                isPrime = false;
            }
        }

        if (isPrime) {
            console.log(i + " là số nguyên tố");
        } else {
            console.log(i + " không phải là số nguyên tố");
        }
    }
}

function ex_10() {
    let number;
    let soChan = ""
    let soLe = ""
    let soNguyenTo = ""
    let soHoanHao = ""
    do {
        number = Number(prompt("Nhập N"))
        console.log(number);
        if (number % 2 === 0) {
            soChan += number
        } else {
            soLe += number
        }
        if (number > 1) {
            let isPrime = true;
            for (let j = 2; j < number; j++) {
                if (number % j === 0) {
                    isPrime = false;
                }
            }
            if (isPrime) {
                soNguyenTo += number
            }
        }
        // check snt
        let sum = 0
        for (let i = 1; i <= number / 2; i++) {
            if (number % i === 0) {
                sum += i
            }
        }
        if (sum === number && number > 0) {
            soHoanHao += number
        }
        // check shh
    } while (number > 0);
    console.log(soChan, "-----", soLe, "-----", soNguyenTo, "-----", soHoanHao);
}

function ex_11() {
    let i = 0;
    let sum = 0
    let count = 0
    while (count <= 30) {
        if (i % 5 === 0) {
            console.log(i);
            sum += i
            count++;
        }
        i++;
    }
    console.log(sum);
}

function ex_12() {
    let a = 0, count = 2, b = 1, sum = 0, nextNumber
    while (count <= 20) {
        sum += a
        nextNumber = a + b
        a = b
        b = nextNumber
        count++
        console.log(a, "---", b, "---", nextNumber, "---", count);
    }
    console.log(sum)
}

function ex_13() {
    let number_1 = Number(prompt('number 1 '))
    let number_2 = Number(prompt('number 2 '))
    let string = ''
    for (let i = 0; i < number_1; i++) {
        if (i == 0 || i == number_1 - 1) {
            for (let j = 0; j < number_2; j++) {
                string += "*";
            }
        } else {
            for (let j = 0; j < number_2; j++) {
                if (j == 0 || j == number_2 - 1) {
                    string += "*";
                } else {
                    string += " "
                }
            }
            string += " "
        }
        string += "\n";
    }
    console.log(string);
}

function ex_14() {
    let number_1 = 5
    let number_2 = 6
    let string = ''
    for (let col = 0; col <= number_1; col++) {
        for (let row = 0; row <= number_2; row++) {
            if ((row == 0 && col % 3 !== 0) || (row == 1 && col % 3 === 0)) {
                string += "*";
            } else if (row + col == 8 || row - col == 2) {
                string += "*"
            } else {
                string += " "
            }
        }
        string += "\n";
    }
    console.log(string);
}

function ex_15() {
    let number = Number(prompt("nhap number"))
    let string = document.getElementById("content")
    string.style.width = number + "px"
    string.style.height = number + "px"
    string.style.backgroundColor = "red"
    string.style.borderRadius = "50%"
}

function ex_16() {
    let number = document.getElementById('star').value
    let string = "";
    for (let i = 0; i <= number; i++) {
        for (let space = 0; space < number - i; space++) {
            string += "_"
        }
        for (let k = 0; k < i * 2 - 1; k++) {
            console.log(i, "----------", k);
            string += "*";
        }
        string += "\n";
    }
    console.log(string);
}
// y nghia cua count++