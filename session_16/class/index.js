const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const newArr = []
arr.forEach((item, index) => {
    console.log(item, "--------", index);
});
const arr2 = ["h", "e", "l", "l", "o", "w", "o", "r", "d", "h", "a"];
const counts = {}
// arr2.forEach((element) => {
//     console.log(counts[element]);
//     counts[element] = (counts[element] || 0) + 1;
// });
// for (let i = 0; i < arr2.length; i++) {
//     const element = arr2[i];
//     counts[element] = (counts[element] || 0) + 1;
// }
for (var element in counts) {
    console.log(element + ' = ' + counts[element]);
}
console.log(counts);

const data = [5, 1, 6, 9, 3];
const sort1 = data.sort((a, z) => a - z)
const sort2 = data.sort((a, z) => z - a)


console.log(sort1, sort2);

