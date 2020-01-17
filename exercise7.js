function urutkanAbjad(str) {
    // you can only write your code here!
    var newStr = [];
    for(var i = 0; i < str.length; i++){
        newStr.push(str[i]);
    }

    do{
        swap = false;

        for(var j = 0; j < newStr.length; j++){
            if(newStr[j] > newStr[j+1]){
                var temp = newStr[j];
                newStr[j] = newStr[j+1];
                newStr[j+1] = temp;

                swap = true;
            }
        }
    }while(swap);

    var kataBaru = "";
    for(var k =0; k < newStr.length; k++){
        kataBaru += newStr[k];
    }

    return kataBaru;
  }
  
  // TEST CASES
  console.log(urutkanAbjad('hello')); // 'ehllo'
  console.log(urutkanAbjad('truncate')); // 'acenrttu'
  console.log(urutkanAbjad('developer')); // 'deeeloprv'
  console.log(urutkanAbjad('software')); // 'aeforstw'
  console.log(urutkanAbjad('aegis')); // 'aegis'