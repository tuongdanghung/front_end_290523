const data = local();
let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
let passwordFormat = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()])[A-Za-z\d!@#$%^&*()]{8,}$/;

// function render() {
//     let newContent = ''
//     data.forEach((item, index) => {
//         newContent += `<div>
//         <p>${item.name}</p>
//         <p>${item.email}</p>
//         <p>${item.password}</p>
//         <p>${item.repeatPassword}</p>
//         <button onclick="edit('${index}')">edit</button>
//         <button onclick="handleDelete(${index})">delete</button>
//         </div>`
//     });
//     document.querySelector('#album').innerHTML = newContent
// }
function handleDelete(index) {
    data.splice(index, 1)
    render(data)
    const myArrayJson = JSON.stringify(data);
    localStorage.setItem('data', myArrayJson);
}

let editIndex = -1;
function edit(index) {
    const name = data[index].name
    const email = data[index].email
    const password = data[index].password
    const repeatPassword = data[index].repeatPassword
    document.getElementById('value').value = name
    document.getElementById('email').value = email
    document.getElementById('password').value = password
    document.getElementById('repeat-password').value = repeatPassword
    editIndex = index;
    document.getElementById('isCheckButton').innerHTML = 'edit'
}



function submit() {
    const value = document.getElementById('value').value
    const email = document.getElementById('email').value
    const password = document.getElementById('password').value
    const repeatPassword = document.getElementById('repeat-password').value
    if (editIndex !== -1) {
        data[editIndex] = { id: data.length, email: email, name: value, password: password, repeatPassword: repeatPassword };
        editIndex = -1;
        document.getElementById('isCheckButton').innerHTML = 'Add'
        document.getElementById('value').value = ''
        document.getElementById('email').value = ''
        document.getElementById('password').value = ''
        document.getElementById('repeat-password').value = ''
    } else {
        let newValue = {}
        if (data.length === 0) {
            newValue = { id: data.length, email: email, name: value, password: password, repeatPassword: repeatPassword }
        } else {
            const maxId = Math.max(...data.map(item => item.id));
            // tìm id lớn nhất
            newValue = { id: maxId + 1, email: email, name: value, password: password, repeatPassword: repeatPassword }
        }
        validate(newValue)
    }
    const myArrayJson = JSON.stringify(data);
    localStorage.setItem('data', myArrayJson);
    render(data)
}
function validate(params) {
    let isValid = false
    if (params.name.length === 0) {
        isValid = true
        document.getElementById('valid-name').style.display = 'block'
    }
    if (params.email.length === 0) {
        isValid = true
        document.getElementById('valid-email').style.display = 'block'
    }
    if (!mailformat.test(params.email) && params.email.length !== 0) {
        document.getElementById('valid-email').innerHTML = 'chưa đúng định dạng'
        document.getElementById('valid-email').style.display = 'block'
        isValid = true;
    }
    if (!passwordFormat.test(params.password) && params.password.length !== 0) {
        document.getElementById('valid-password').innerHTML = 'password phai lon hon 8 ki tu viet hoa mot chu cai va co ki tu dac biet'
        document.getElementById('valid-password').style.display = 'block'
        isValid = true;
    }

    if (params.password.length === 0) {
        isValid = true
        document.getElementById('valid-password').style.display = 'block'
    }
    if (params.repeatPassword.length === 0) {
        isValid = true
        document.getElementById('valid-repeat-password').style.display = 'block'
    }
    if (isValid === false) {
        if (params.password === params.repeatPassword) {
            const index = data.findIndex(el => el.email === params.email)
            if (index === -1) {
                data.push(params)
                document.getElementById('valid-name').style.display = 'none'
                document.getElementById('valid-email').style.display = 'none'
                document.getElementById('valid-password').style.display = 'none'
                document.getElementById('valid-repeat-password').style.display = 'none'
                // 
                document.getElementById('value').value = ''
                document.getElementById('email').value = ''
                document.getElementById('password').value = ''
                document.getElementById('repeat-password').value = ''
            } else {
                document.getElementById('valid-email').innerHTML = 'chưa đúng định dạng'
                document.getElementById('valid-email').style.display = 'block'
            }
        } else {
            return
        }
    }
}

function submitLogin() {
    const loginEmail = document.getElementById('login-email').value
    const password = document.getElementById('login-password').value
    const value = { email: loginEmail, password: password }
    const user = data.find(el => el.email === value.email && el.password === value.password)
    console.log(user);
    if (user) {
        alert("login thanh cong")
    } else {
        alert("login that bai")
    }
}

function local() {
    const results = localStorage.getItem('data');
    const myArray = JSON.parse(results);
    return myArray ? myArray : []
}

// render()