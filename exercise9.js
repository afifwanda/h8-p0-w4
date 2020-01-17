function checkAB(num) {
    // you can only write your code here!
    var numNew = [];
    for(var i = 0; i < num.length; i++){
        numNew.push(num[i]);
    }
    
    var check = false;
    for(var j = 0; j < numNew.length; j++){
        if(numNew[j] === "a" && numNew[j+4] === "b"){
            check = true;
        }
        else if(numNew[j] === "b" && numNew[j+4] === "a"){
            check = true;
        }
        else{
            check;
        }
    }

    return check;
  }
  
  // TEST CASES
  console.log(checkAB('lane borrowed')); // true
  console.log(checkAB('i am sick')); // false
  console.log(checkAB('you are boring')); // true
  console.log(checkAB('barbarian')); // true
  console.log(checkAB('bacon and meat')); // false