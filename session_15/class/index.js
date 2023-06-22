function ex_1() {
    prime(prompt("number"))
    function prime(number) {
        let isPrime = true;
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
}
function ex_2() {
    prime(prompt("number"));

    function prime(number) {
        const nums = number.split(",");
        for (let i = 0; i < nums.length; i++) {
            const num = parseInt(nums[i]);
            let isPrime = true;
            for (let j = 2; j < num; j++) {
                if (num % j === 0) {
                    isPrime = false;
                }
            }
            if (isPrime) {
                console.log(`${num} là số nguyên tố`);
            }
        }
    }
}

const arr = [];
function ex_3() {

    const meter = document.getElementById('meter').value;
    const foot = document.getElementById('foot').value;

    if (meter !== '') {
        checkMeter(meter);
    }
    if (foot !== '') {
        checkFoot(foot);
    }

    function checkMeter(meter) {
        const result = parseInt(meter) * 0.305;
        arr.push({ meter: meter, foot: result });
        document.getElementById('meter').value = ''
    }

    function checkFoot(foot) {
        const result = parseInt(foot) * 3.279;
        arr.push({ meter: result, foot: foot });
        document.getElementById('foot').value = ''
    }

    function render() {
        let newContent = ''
        for (let i = 0; i < arr.length; i++) {
            newContent += `<tr>
            <td>${arr[i].meter}</td>
            <td>${arr[i].foot}</td>
        </tr>`
        }
        document.querySelector('#results').innerHTML = newContent
    }
    render()
}

function ex_4() {
    const number = document.querySelector('#input').value
    cricle(number)
    square(number)
    rectangle(number)
    function cricle(num) {
        // num
        document.getElementById('cricle').style.width = num + "px"
        document.getElementById('cricle').style.height = num + "px"
        document.getElementById('cricle').style.border = "1px solid black"
        document.getElementById('cricle').style.borderRadius = "50%"
    }
    function square(num) {
        document.getElementById('square').style.width = num + "px"
        document.getElementById('square').style.height = num + "px"
        document.getElementById('square').style.border = "1px solid black"
    }
    function rectangle(num) {
        document.getElementById('rectangle').style.width = num * 3 + "px"
        document.getElementById('rectangle').style.height = num + "px"
        document.getElementById('rectangle').style.border = "1px solid black"
    }
}
