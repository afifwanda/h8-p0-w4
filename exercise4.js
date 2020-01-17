function cariModus(arr) {
    // you can only write your code here!
    var result = [];
    var modus = [];
    var nonModus = [];

    for(var i =0; i < arr.length; i++){
        var check = false;
        for(var j =0; j < result.length; j++){
            if(arr[i] === result[j][0]){
                check = true;
                result[j][1] += 1;
            }
        }
        if(check === false){
            result.push([arr[i],1]);
        }
    }
    
    for(var k = 0; k < result.length; k++){
        if(result[k][1] === 1){
            nonModus.push(result[k]);
        }
        else{
            modus.push(result[k]);}}

    

    if(modus.length === 0){
        return -1;
    }
    else if(nonModus.length === 0){
        return -1;
    }
    else if(modus.length !== 0){
        return modus[0][0];
    }
  }


    
  
  // TEST CASES
  console.log(cariModus([10, 4, 5, 2, 4])); // 4
  console.log(cariModus([5, 10, 10, 6, 5])); // 5
  console.log(cariModus([10, 3, 1, 2, 5])); // -1
  console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
  console.log(cariModus([7, 7, 7, 7, 7])); // -1