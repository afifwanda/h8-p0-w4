function shoppingTime(memberId, money) {
    // you can only write your code here!
    var data = {};
    var list = [
        ["Sepatu Stacattu", 1500000],
        ["Baju Zoro", 500000],
        ["Baju H&N", 250000],
        ["Sweater uniklooh", 175000],
        ["Casing Handphone", 50000],
    ]
    if(memberId === undefined || memberId && money === undefined || memberId === ""){
        return "Mohon maaf, toko X hanya berlaku untuk member saja";
    }
    else if(money < 50000){
        return "Mohon maaf, uang tidak cukup";
    }

    var purchased = [];
    var index = 0;
    var sum = 0;
    for(var i = 0; i < list.length; i++){
        if(money > list[index][1]){
            sum += list[index][1];
            purchased.push(list[index][0]);
            index++;
        } 
        else{
            index++;
        }
    }

    var change = money - sum;

    data.memberId = memberId;
    data.money = money;
    data.listPurchased = purchased;
    data.changeMoney = change;

    return data;
    
  }
  
  // TEST CASES
  console.log(shoppingTime('1820RzKrnWn08', 2475000));
    //{ memberId: '1820RzKrnWn08',
    // money: 2475000,
    // listPurchased:
    //  [ 'Sepatu Stacattu',
    //    'Baju Zoro',
    //    'Baju H&N',
    //    'Sweater Uniklooh',
    //    'Casing Handphone' ],
    // changeMoney: 0 }
  console.log(shoppingTime('82Ku8Ma742', 170000));
  //{ memberId: '82Ku8Ma742',
  // money: 170000,
  // listPurchased:
  //  [ 'Casing Handphone' ],
  // changeMoney: 120000 }
  console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
  console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
  console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja