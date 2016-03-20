var x = prompt("Введите число",'');
var y = prompt ('Введите степень','');
function pow(x,y){
  //  if ((x == 0)||(x==null)||y==null){
     //   console.log( "Вы ввели некорректные данные" );}
    var result = x;
    for(var i=1;i<y;i++){
        result*=x;
    }
    return result;
}
console.log(pow(x,y));
