const imageUrl = [
    {
        id: 0,
        name: 'name 1',
        price: 199000,
        img: "https://cdn.pixabay.com/photo/2023/06/16/11/47/books-8067850_1280.jpg"
    },
    {
        id: 1,
        name: 'name 2',
        price: 199000,
        img: "https://cdn.pixabay.com/photo/2023/06/16/11/47/books-8067850_1280.jpg"
    },
    {
        id: 2,
        name: 'name 3',
        price: 199000,
        img: "https://cdn.pixabay.com/photo/2023/06/15/08/05/bee-8064761_640.jpg",
    },
    {
        id: 3,
        name: 'name 4',
        price: 199000,
        img: "https://cdn.pixabay.com/photo/2023/06/15/02/38/fauna-8064270_640.jpg",
    },
    {
        id: 4,
        name: 'name 5',
        price: 199000,
        img: "https://cdn.pixabay.com/photo/2023/06/08/04/49/cat-8048688_640.jpg",
    },
    {
        id: 5,
        name: 'name 6',
        price: 199000,
        img: "https://cdn.pixabay.com/photo/2023/05/10/04/31/eurasian-whimbrel-7982937_640.jpg",
    },
    {
        id: 6,
        name: 'name 7',
        price: 199000,
        img: "https://cdn.pixabay.com/photo/2023/06/15/11/04/huddle-of-walrus-8065100_640.jpg",

    },
    {
        id: 7,
        name: 'name 8',
        price: 199000,
        img: "https://cdn.pixabay.com/photo/2023/05/24/21/56/bug-8015937_640.jpg",
    },
    {
        id: 8,
        name: 'name 9',
        price: 199000,
        img: "https://cdn.pixabay.com/photo/2023/06/03/18/12/benz-8038240_640.jpg",
    },
    {
        id: 9,
        name: 'name 10',
        price: 199000,
        img: "https://cdn.pixabay.com/photo/2023/06/09/18/30/ibex-8052387_640.jpg",
    },

];

function render() {
    let newContent = ''
    imageUrl.forEach((item) => {
        newContent += `<div>
        <img src="${item.img}" alt="">
        <p>${item.name}</p>
        <p>${item.price}</p>
        <button onclick="edit('${item.id}')">edit</button>
        <button onclick="handleDelete(${item.id})">delete</button>
        </div>`
    });
    document.querySelector('#album').innerHTML = newContent
}
function handleDelete(id) {
    const updatedArray = imageUrl.find(item => item.id === id);
    if (updatedArray.id === id) {
        const index = imageUrl.indexOf(updatedArray);
        imageUrl.splice(index, 1);
    }
    render(updatedArray);
}

let editIndex = -1;
function edit(index) {
    const value = imageUrl[index].img
    const name = imageUrl[index].name
    const price = imageUrl[index].price
    document.getElementById('value').value = value
    document.getElementById('name').value = name
    document.getElementById('price').value = price
    editIndex = index;
    document.getElementById('isCheckButton').innerHTML = 'edit'
}

function submit() {
    const val = document.getElementById('value').value
    const name = document.getElementById('name').value
    const price = +document.getElementById('price').value
    if (editIndex !== -1) {
        imageUrl[editIndex] = { img: val, name: name, price: price };
        editIndex = -1;
        document.getElementById('isCheckButton').innerHTML = 'Add'
        document.getElementById('value').value = ''
        document.getElementById('name').value = ''
        document.getElementById('price').value = ''
    } else {
        if (imageUrl.length === 0) {
            imageUrl.push({ id: 0, name: name, price: price, img: val })

        } else {
            const maxId = Math.max(...imageUrl.map(item => item.id))
            imageUrl.push({ id: maxId + 1, name: name, price: price, img: val })
        }
        document.getElementById('value').value = ''
        document.getElementById('price').value = ''
        document.getElementById('name').value = ''
    }
    render(imageUrl)
}


render()