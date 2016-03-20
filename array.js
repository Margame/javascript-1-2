
var names = [];
for (var i=1; i<6; i++) {
    var name = prompt('Имя:' +i, '');
    names.push(name);
}
var login = prompt('Кто вы? ','');
for (i=0; i < names.length; i++) {
    if (login === names[i]) {
        alert(login +", вы успешно вошли!");
        break;
    }
}
if (login !== names[i]) {
    alert('Нет такого пользователя');
}
console.log(names);

/*
var matrix = [ [1,2,3,4,5], [6,7,8,9,10], [11,12,13,14,15,16] ];

(function cal(arr) {
    
 //   if(!Array.isArray(matrix[])) {     //тут должна быть проверка на матрицу.... сука
     //   return false;}



    var _flat =  arr.reduce(function (memo, curr) { //callback по очереди к каждому элементу массива слева направо, сохраняя при этом промежуточный результат
        return memo.concat(curr);  //возвращает новый массив, состоящий из массива, на котором он был вызван, соединённого с другими массивами 
    }, []);							//js будет понимать что это массив

   var sum =  _flat.reduce(function (acc, curr) {
        return acc + curr;			
    }, 0);							//js  будет понимать что это число
    
    console.log(sum);

})(matrix);



var num = prompt('Введите число','');

var steps=0, top=0;

while (num!==1){

  if (num%2){num/=2};
  else {num=num*3+1};
  step++;}
  if (num>top)  {top=n};
  console.log(n, );
    */