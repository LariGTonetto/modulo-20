let array = [1,3,5,9,8,4,32,26,17,42,71,23,21,35]
let valorMaior = 0
let valorMenor = 0
for (var a = 0; a < array.length; a++) {
    for (var b = 0; b < array.length; b++) {
        let temp
        if (array[a] > array[b]) 
        {temp = a
            if (array[valorMaior] < array[temp])
            {valorMaior = temp}
        }
        if (array[a] < array[b]) 
        {temp = a
            if (array[valorMenor] > array[temp])
            {valorMenor = temp}
        }
    }
}

console.log(valorMaior)
console.log(valorMenor)
let valores = [valorMaior, valorMenor]
export default valores
