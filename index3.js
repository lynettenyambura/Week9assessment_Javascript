function test (arr_mix){
    let total = 0;
    for (let i = 0; i <=arr_mix.length; i++){
        if (typeof arr_mix[i] === 'number'){
            total += arr_mix[i];
        }

    }
    return total;
}
console.log(test([2,"11", 3, "a2",false,5,7,1]));
console.log(test([2,3,0,5,7,8,true,false]));