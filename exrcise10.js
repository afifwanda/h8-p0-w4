function changeMe(arr) {
    // you can only write your code here!
    if(arr.length === 0){
        console.log("");
    }

    var bio = {}
    for(var i = 0; i < arr.length; i++){
        console.log(i+1 + ". " + arr[i][0] + " " + arr[i][1] + " :") ;

        if(arr[i][3] !== undefined){
            bio.firstName = arr[i][0];
            bio.lastName = arr[i][1];
            bio.gender = arr[i][2];
            bio.age = 2020 - arr[i][3];
        } else{
            bio.firstName = arr[i][0];
            bio.lastName = arr[i][1];
            bio.gender = arr[i][2];
            bio.age  = "Invalid Birth Year";
        }
        console.log(bio);
        console.log("");
    }
    

  }
  
  // TEST CASES
  changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); // 1. Christ Evans:
  // { firstName: 'Christ',
  //   lastName: 'Evans',
  //   gender: 'Male',
  //   age: 37 }
  // 2. Robert Downey:
  // { firstName: 'Robert',
  //   lastName: 'Downey',
  //   gender: 'Male',
  //   age: 'Invalid Birth Year' }
  changeMe([]); // ""