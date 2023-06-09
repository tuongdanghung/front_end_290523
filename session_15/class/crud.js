const arr = ["a", "b", "c", "d"]
const val = document.getElementById('value')
let editIndex = -1;
function handleDelete(index) {
    arr.splice(index, 1);
    render(arr);
    renderLength(arr)
}

function create() {
    const newValue = val.value
    if (editIndex !== -1) {
        arr[editIndex] = newValue;
        editIndex = -1;
        document.getElementById('value').value = ''
        document.getElementById('isCheckButton').innerHTML = 'Add'
    } else {
        arr.push(newValue)
        document.getElementById('value').value = ''
    }
    render(arr)
    renderLength(arr)
}

function edit(index) {
    const value = arr[index];
    document.getElementById('value').value = value
    document.getElementById('isCheckButton').innerHTML = 'edit'
    editIndex = index;
}

function render(data) {
    let newContent = ''
    for (let i = 0; i < data.length; i++) {
        newContent += `<tr>
        <td>${data[i]}</td>
        <td><button onclick="edit('${[i]}')">edit</button></td>
        <td><button onclick="handleDelete(${[i]})">delete</button></td>
        </tr>`
    }
    document.querySelector('#results').innerHTML = newContent
    document.getElementById('value').value = ''
}

const searchValue = document.getElementById('searchValue');
function search() {
    const newValue = searchValue.value
    const filter = arr.filter((item) => item.toLowerCase().includes(newValue.toLowerCase()))
    render(filter)
    renderLength(filter)
}

function renderLength(index) {
    document.getElementById('length').innerHTML = index.length
}
render(arr)
renderLength(arr)
