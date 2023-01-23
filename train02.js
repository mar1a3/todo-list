

// codewars 1.
//создать каскад each_cons где есть массив 
//чисел и в конце число, по сколько шт их раздробить

/*each_cons([1,2,3,4], 2)
  #=> [[1,2], [2,3], [3,4]]

each_cons([1,2,3,4], 3)
  #=> [[1,2,3],[2,3,4]]*/
2//
//   function each_cons(array, n){
//     const r = [];
//     for(i<0;i<=array.length-n;i++){
//         const chunk = [];
//         for(let j =i; j<i+n; j++){
//             chunk.push(array[j])
//         }
//         r.push(chunk)
        
//     }
//     return r;
//   }


//3
// function lovefunc(flower1, flower2){
//     if(flower1 %2 ==0 && flower2 %2 != 0 || flower2 %2 ==0 && flower1 %2 != 0){

//         console.log('true')
//     }else{
//         console.log('false')
//     }
// }
// lovefunc(2,6)

4//
// function makeNegative(num) {
//     if(num<0 || num==0){
//         return num
//     }else{
//         return num*(-1)
//     }
//   }

5//
// function greet(name){
//     return`"Hello, ${name} how are you doing today?"`;
// }


//6
// function countPositivesSumNegatives(input) {
//     // your code here
//   }



//выдает 2 массива не вместе без суммы 
// const prices = [1,2,3,4,5];
// let new_prices = [];
// let new_prices2 = [];
// for(let i=0; i < prices.length; i++){
//   if(prices[i]%2==0){
//   new_prices.push(prices[i]);
//   console.log(new_prices)
//   }else{
//     new_prices2.push(prices[i]);
//   }
// }
// console.log(new_prices)
// console.log(new_prices2)



//сумма четных без скобок + это не функция
// let someArr = [2,6,7,8,9];
// let odds_chet = someArr.filter(num => num % 2==0).map(i=>x+=i, x=0).reverse()[0];
// let odds_nechet = someArr.filter(num => num % 2 !=0).map(i=>x+=i, x=0).reverse()[0];
// console.log(odds_chet)


//выдает сумму четных без скобок
// function summArrayElements(arr){
// return arr.filter(i => i % 2 == 0).map(i=>x+=i, x=0).reverse()[0]
// }
// let someArr = [2,6,7,8,9];
// console.log(summArrayElements(someArr))


//пробные


//7
// function sum(a,b){
//   return a.repeat(b)
// }
// console.log(sum('a',5))

//8
// function sum(name){
//   if(name[0] == 'R'|| name[0]== 'r'){
//     return name + " plays banjo"
//   }else{
//     return name + " does not play banjo"
//   }
// }
// console.log(sum('Ra'))

//9
// function sum1(num){
//   let sum=0
//   for(let i=1; i<=num; i++){
//     sum+=i
//   }
//   return sum
// }

//10
// function weightCalc(w,h){
//   let bmi = w/h*h
//   if(bmi <=18.5){
//     return "Underweight";
//   }else if(bmi <=25.0){
//     return "Normal"
//   }else if(bmi <= 30.0){
//     return "Overweight"
//   }else if(bmi > 30){
//     return "Obese"
//   }
// }
// console.log(weightCalc(80, 1.80))

//11
// function sum(h){
//     let v = 0.5;
  
//     let sum1 = h*v;
//     return Math.trunc(sum1)
//   }
//   console.log(sum(6.7))

//12
// function dis(a,b,c){
//   let form = (b*b)-4*(a*c)
//   let ro = -b/(2*a)
//   let r1 = (-b-Math.sqrt(form))/(2*a)
//   let r2 = (-b+Math.sqrt(form))/(2*a)
//   if(form<0){
//     return 'корней нет'
//   }else if(form==0){
//     return 'ур имеет 1 корень' + ' = '+ro;
//   }else if(form>0)
//     return 'корень 1 ='+ r1 + 'корень 2 =' + r2
// }

// console.log(dis(1, -4, -5))

 

// function dis(a,b,c){
//   let form = (b*b)-4*(a*c)
//   let ro = -b/(2*a)
//   let r1 = (-b-Math.sqrt(form))/(2*a)
//   let r2 = (-b+Math.sqrt(form))/(2*a)
//   if(a==0){
//     return 'корень 1 ='+ r1 +' '+ 'корень 2 =' + r2;
//   }
//   if(form<0){
//     return 'корней нет'
//   }else if(form==0){
//     return 'ур имеет 1 корень' + ' = '+ro;
//   }else if(form>0)
//     return 'корень 1 ='+ r1 + 'корень 2 =' + r2
// }

// console.log(dis(0, 3, 4))


//13
//тут была ошибка тк массив вне функции. он должен быть в теле функции. 
//и ретерн должен быть перед ласт скобкой
// let arr = []
// function filter_list(l) {
//   console.log(l)
//   for( i=0; i<l.length;i++){
//     if(typeof l[i] != 'number'){
//       continue;
//   }else{
//       arr.push(l[i])
      
//   }
//     }
//   return arr;
// }
// console.log(filter_list([14,6,"a",666,"b",0,15]))

//решение из сайта
// function filter_list(l) {
//   var res = [];
//               for(var item=0;item<l.length;item++)
//               {
//                   if (typeof l[item] === "number")
//                   {
//                       res.push(l[item]);
//                   }
    
//               }
//               return res;
//   }

//14 еще сделала палиндром

//15
//правильно написанный цикл, который выводит все числа от 1 до n
// function func(n){
//   let arr = []
//   for(let i=1; i<=n;i++){
//     arr.push(i)
// }
//   return arr;
// }
// console.log(func(1))

//16
//убираем всае гласные
//https://ru.stackoverflow.com/questions/882875/%D1%84%D0%B8%D0%BB%D1%8C%D1%82%D1%80-%D0%B4%D0%BB%D1%8F-%D1%81%D1%82%D1%80%D0%BE%D0%BA-%D0%BA%D0%B0%D0%BA-%D1%83%D0%B4%D0%B0%D0%BB%D0%B8%D1%82%D1%8C-%D1%81%D0%BB%D0%BE%D0%B2%D0%BE
// var cenzrBlock = {
// 	"a": ""
// 	,"e": ""
// 	,"i": ""
//   ,"o": ""
// 	,"u": ""
// 	,"A": ""
//   ,"E": ""
// 	,"I": ""
//   ,"O": ""
// 	,"U": ""
// }
// function disemvowel(str){
// for(let key in cenzrBlock){
// 	str = str.split(key).join(cenzrBlock[key])
// }
// return str;
// }

//почитать про метод reduce 

// задача - посчитать онли согласные
// function consonantCount(str) {
//   let arr = [];
//   let vocals = "bcdfghjklmnpqrstvwxzy";
//   for (let i = 0; i < str.length; i++) {
//     if(vocals.includes(str[i].toLowerCase())) {
//       arr.push(str[i]);
//     }
//   }
//   console.log(arr);
//   return arr.length;
// }

//merge intervals 
const merge = intervals => {
  if (intervals.length < 2) return intervals;
  
  intervals.sort((a, b) => a[0] - b[0]);
  
  const result = [];
  let previous = intervals[0];
  
  for (let i = 1; i < intervals.length; i += 1) {
    if (previous[1] >= intervals[i][0]) {
      previous = [previous[0], Math.max(previous[1], intervals[i][1])];
    } else {
      result.push(previous);
      previous = intervals[i];
    }
  }
  
  result.push(previous);
  
  return result;
};

//разбирала задачу с последовательностями и треугольниками 

//задача про merge two intervals leetcode 

var merge = function(intervals) {
  if(intervals.length < 2){
    return intervals;
  }
intervals.sort((a,b)=> a[0]-b[0])
  
  let result = [intervals[0]]
  
  for(interval of intervals){
    let recent = result[result.length - 1]

    if(recent[1] >= interval[0]){
      recent[1] = Math.max(recent[1],interval[1])
    } else{
      result.push(interval)
    }
  }
  return result;
}

console.log(merge([[1,4],[2,5],[4,8]]))
