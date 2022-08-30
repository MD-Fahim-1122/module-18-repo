var numbers =[20, 32, 40, 50, 35, 50, 54, 55, 58, 60, 72, 80];

for (var i = 0; i < numbers.length; i++){
    var number = numbers[i];
    if(number > 60){
        continue;
    }
    console.log(number);
    
}