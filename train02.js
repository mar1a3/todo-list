

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


//leetcode длина последнего слова
function plusOne(n){
  let n1 = n.trim().split(" ")
  for(let i=n1.length-1;i>=0;i--){
    return n1[i].length
  }
}

//или
var lengthOfLastWord = function(s) {
    return s.trim().split(' ').at(-1).length
};



//делаем элементы видимыми при клике на них
// let items = document.querySelectorAll('navlink')

// for(let item of items){

// item.addEventListener('click', function (e) {
//     var nav = document.getElementById('sorry')
//     nav.style.display = nav.style.display === 'none' ? 'block' : 'none'
//   })
// }

// в процессе
// var maxDistToClosest = function(seats) {
// let max = 0
// let count = 0
  
//   for(let i=0;i<seats.length;i++){
//     let current = seats[i]
//     if(current===1){
//       count=0
//     }
//     else{
//       count+=1
//       max = Math.max(max, Math.ceil(count/2))
//     }
//   }
//   return max
// };

// console.log(maxDistToClosest([1,0,0,0,1,0,1]))

//(Climbing stairs)сколько есть способов подняться на этаж по лестнице, используя шаг либо в 1, либо в 2 ступеньки

function top(n){
  const memo = [0,1,2]
  //решение - это последовательность фибоначчи - 0 1 1 2 3 5 8 и тд (индекс 4 - 5 вариантов группировки ступенек/ индекс 5 - 8 группировок вариантов ступенек и тд)
  //для удобства в константе первые индексы 
  for(let i=3; i<=n; i++){
    memo[i] = memo[i-1]+memo[i-2]
  }
  return memo[n]
 //возвращаем число под индексом 
}


//в строке найти подстроку 459. Repeated Substring Pattern
var repeatedSubstringPattern = s => {
    let newString = (s + s).substring(1, s.length * 2 - 1)
    
    return newString.indexOf(s) !== -1
}


//понять, какие числа не по порядку (собес в тиньков)

// let myNumbers = 4 4 4 4;
// let arr = myNumbers.split(',')
// console.log(arr)
  
// const findElement = arr => {
// arr.sort(function(a,b){
//   return a-b
// })
//   for(let i = 1; i < arr.length; i++) {
//     if (arr[i] - arr[i-1] > 1) {
//       return 'NO'
//     }
//   }

//   return 'YES';
// }

// console.log(findElement([5,2,3,1]))

// добавление цифр по нажатию на кнопку
//const btnNumbers = document.querySelector('.btn-numbers-list')
// const ulList =document.querySelector('.numbers-list') 
// let newUl = 0
// btnNumbers.onclick =()=>{
//     let li = document.createElement('li');
//     li.innerHTML = newUl
//     ulList.appendChild(li);
//     newUl++
//     console.log(newUl)
// }




//     function count(string) {
//         var result = {};
//         let newString = string.split('');
//         newString.forEach(function(a){
//         result[a]?++result[a]:result[a]=1
// }); 
//     console.log(result)
//     }
//     count('aba')


// function flatten(...arr){
//     const result =[]
//     while(arr.length){
//         let el = arr.shift();
//         if(Array.isArray(el)){
//             arr.unshift(...el);
//             continue;
//         }
//         result.push(el);
//     }
//     return result;
// }
// console.log(flatten(1,[2,3],[[4]],[[5],6]))

