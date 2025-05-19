const numbers = [2, 7, 11, 15]
const target = 9

function twoSum(numbers, target){
for (let i = 0; i < numbers.length; i++){
    for (let j = i+1; j < numbers.length; j++){
        let result = numbers[i] + numbers[j]
        if (result == target) 
            return [i,j]
    }
    }
}
