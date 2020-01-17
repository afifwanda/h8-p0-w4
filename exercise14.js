function naikAngkot(arrPenumpang) {
    rute = ['A', 'B', 'C', 'D', 'E', 'F'];
    if(arrPenumpang.length === 0){
        return [];
    }

    //your code here
    var final = [];

    for(var j = 0; j < arrPenumpang.length; j++){
        var result = {};

        arrPenumpang[j].push(Math.abs(rute.indexOf(arrPenumpang[j][1]) - rute.indexOf(arrPenumpang[j][2]))*2000);
        result.penumpang = arrPenumpang[j][0];
        result.naikDari = arrPenumpang[j][1];
        result.tujuan = arrPenumpang[j][2];
        result.bayar = arrPenumpang[j][3];

        final.push(result);
    }
    
    return final;
}
  
  //TEST CASE
  console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
  // [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
  //   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]
  
  console.log(naikAngkot([])); //[]