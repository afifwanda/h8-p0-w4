function digitPerkalianMinimum(angka) {
    // you can only write your code here!
    var faktor = [];
    
    for(var i =0; i <= angka; i++){
        if(angka %i === 0){
            faktor.push([String(i) ,String(angka/i)]);
        }
    }

    do{
        swap = false;
        for(var j = 0; j < faktor.length-1; j ++){
            if(faktor[j][0].length + faktor[j][1].length > faktor[j+1][0].length + faktor[j+1][1].length ){
                var temp = faktor[j];
                faktor[j] = faktor[j+1];
                faktor[j+1] = temp;

                swap = true;
            }
        }
    }while(swap)
    
    return faktor[0][0].length + faktor[0][1].length
  }
  
  // TEST CASES
  console.log(digitPerkalianMinimum(24)); // 2
  console.log(digitPerkalianMinimum(90)); // 3
  console.log(digitPerkalianMinimum(20)); // 2
  console.log(digitPerkalianMinimum(179)); // 4
  console.log(digitPerkalianMinimum(1)); // 2