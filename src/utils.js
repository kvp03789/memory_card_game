export const shuffleArray = function(arr) {
    for(let i = arr.length - 1; i > 0; i--){
        let j = Math.floor(Math.random() * (i + 1));
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    return arr;
}

export const containsUnit = function(obj, arr){
    for (let i = 0; i < arr.length; i++){
        if(arr[i] === obj){
            return true
        }
    }
    return false;
}

