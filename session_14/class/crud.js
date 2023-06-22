let val = document.getElementById("value")
let arr = local()
render()
function ex_6() {
    newVal = val.value
    arr.push({ id: arr.length > 0 ? (arr[arr.length - 1].id) + 1 : 0, value: newVal })
    document.getElementById("value").value = ""
    render()
    const myArrayJson = JSON.stringify(arr);
    localStorage.setItem('array', myArrayJson);
}
function render() {
    let newContent = ''
    for (let i = 0; i < arr.length; i++) {
        newContent += `<li>${arr[i].value} <button id=${arr[i].id}>edit</button></li>`
    }
    document.querySelector('#results').innerHTML = newContent
}
function local() {
    const results = localStorage.getItem('array');
    const myArray = JSON.parse(results);
    return myArray ? myArray : []
}