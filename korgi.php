<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>


    <?php 
        $a = 'codepen.png';
        $b = 'img';
        // for($n=0; $n<=10;$n++){
        //     echo '<br>'.$n.'</br>';
        // }
        // echo '<p><b>'.'Ваше имя:'.'</b><br>';
        // echo '<textarea>'.'</textarea>';
        // $c = 'abcde';
        // echo $c[strlen($c)-3];
        // $d = 43210;
        // echo $c[$d];
        // $str1 = '12345';
        // $sum = 1;
        // for($n=0;$n<strlen($str1);++$n){
        //     $sum*=$str1[$n];
        // }
        // echo $sum;
        $str1 = '12345';
        $c = 3;

        // $num1 = 3;
	    // $num2 = $num1++;
	    // echo 'num 1:'.$num1;
	    // echo 'num 2:'.$num2;

    // $num1 = 3; //3
	// $num1++; //3
	// $num2 = $num1--; //4
	// echo $num1++; //3
	// echo --$num2; //3
        
    // $num1 = 3; 
	// $num2 = $num1--; //3
	// echo $num1; //2
	// echo $num2; //3

    // $num1 = 3;
	// $num2 = --$num1; //2
	// echo $num1; //2
	// echo $num2; //2

    // $tc = 3; //градусы Цельсия
    // $fr = (9/5)*($tc-32);        
    // echo $fr;
    $arr1 = [1,2,3,'null'];
    $last = (count($arr1)-1);
    $last2 = $arr1[$last];
    // echo $arr1;
    // var_dump($arr1);
    // for($n=0;$n<(count($arr1));$n++){
    // if($arr1[$n] !== $last2){
    //     echo $arr1[$n].'+';
    // }    
    // }
    // $arr = ['a' => 1, 'b' => 2, 'c' => 3];
    // $arr['a'] = $arr['a'] + 3;
    // $arr['b'] =$arr['b'] +3;
    // var_dump($arr);

    // $arr = ['a' => 1, 'b' => 2, 'c' => 3];
	
	// $arr['a']++;
	// $arr['a']++;
	// $arr['b']--;
	// $arr['c']--;
	// $arr['c']--;
	
	// var_dump($arr);
    // $arr = [1,2,5,6];
    // $arr [] = 6;
    // var_dump($arr);
    // $arr = [1, 2, 3, 4, 5];
    // $key1 = $arr[1];
    // $key2 = $arr[2];
    // echo $key1+$key2;
    // $arr12 = [23,4,11,678];
    // $new23 = $arr12[count($arr12)-1];
    // for($n=0;$n<count($arr12);$n++){
    //     if($arr12[$n] !== $new23){
    //         echo $arr12[$n].'+';
    //     }else{
    //         echo $arr12[$n].'';
    //     }
    // }

        // $test = 0;
        // if($test < 7){
        //     echo 1;
        // }
    //     $test1 = 3;
	// $test2 = 2;
		
	// if ($test1 !== $test2) {
	// 	echo '+++';
	// } else {
	// 	echo '---';
	// }
    // $num = 3;
	
	// if ($num > 0 and $num < 5 or $num 
	// 	> 10 and $num < 20) { 
	// 	echo '+++';
	// } else {
	// 	echo '---';
	// }

    // if ($test == true) {
	// 	echo '+++';
	// } else {
	// 	echo '---';
	// }
    // $test = 3;
	
	// $test = 3 * 'abc';
	
	// $test = -1;
	
	// if ($test) {
	// 	echo '+++';
	// } else {
	// 	echo '---';
	// }
    // $arr = [1, 2, 3, 4, 5];
	
	// if (isset($arr[])) {
	// 	echo '+++';
	// } else {
	// 	echo '---';
	// }

    // $test = '0';
	
	// if (!empty($test)) {
	// 	echo '+++';
	// } else {
	// 	echo '---';
	// }

    // $test = 2;
    // if($test == 10) echo 'yes'; if($test == 2) echo 'yees';

    // $test = 0;
    // if($test == 0) 
    //     echo 'верно';
    // else
    //     echo 'неверно';

    // $num = 32;
    // if($num >= 1 and $num <= 31){
    //     echo 'ok';
    // }
    // else{
    //     echo 'not ok';
    // }

    // $age = 77;
    // if($age>99 and $age<10){
    //     echo '$age>99 and $age<10'; 
    // }
    // if($age>=10 and $age<=99){
    //     $age1 = $age . '';
    //     $sum_age = $age1[strlen($age1)-2] + $age1[strlen($age1)-1];
    //     $sum_age_str = $sum_age.'';
    //     if(strlen($sum_age_str)>1){
    //         echo 'сумма двузначна'. $sum_age;
    //     }elseif(strlen($sum_age_str)<=1){
    //         echo 'сумма однозначна' .;
    //     }
    // }
    // $num = 34;
    // switch ($num){
    //     case 1:
    //         echo 'winter';
    //     break;
    //     case 2:
    //         echo 'spring';
    //     break;
    //     case 3:
    //         echo 'summer';
    //     break;
    //     case 4:
    //         echo 'autumn';
    //     break;
    // }

    // $num = 1;
    // var_dump($num >=1 ? '1':'-1');
    // if (isset($arr['test'])) {
	// 	$elem = $arr['test'];
	// } else {
	// 	$elem = 'empty';
	// }

    // $user = ['name' => null, 'surname' 
	// 	=> null];
    
    // $elem = $user['name'] ?? 'unknown';
    // echo $elem;

    // $elem = $user['name'] ?? $user['surname'] ?? 'nothing';

    // echo $elem;

    // $a = 2 * (3 - 1);
	// $b = 6 - 2;
    // var_dump($a==$b)

    // $min = 60;
    // if($min >=1 and $min <=20){
    //     echo 'first 20';
    // }elseif($min >20 and $min <=40){
    //     echo 'second 20';
    // }elseif($min >40 and $min <=60){
    //     echo 'third 20';
    // }

    // $arr = [56789,3451,9356];
    // $counter = 0;
    // if(count($arr)== 3){
    //     for($n=0;$n<count($arr);$n++){
    //         $counter+=$arr[$n];
    //     }
    //     echo $counter;
    // }
        // $str = '128';
        // echo ($str[strlen($str)-1] == '8');

        // $num = 28;
        // if($num % 3 === 0){
        //     echo 'chislo делится';
        // }
        // else{
        //     echo 'chislo не делится';
        // }
        // $str = 'bbcde';
        // if($str[0] == 'a'){
        //     echo 'right';
        // }
        // $num = 723;
        // $num_new = $num .'';
        // if($num_new[0] == 1 or $num_new[0] == 2  or $num_new[0] == 3){
        //     echo 'ok';
        // }
        // $num = 121211;
        // $num_new = $num . '';
        // if($num_new[0]+$num_new[1]+$num_new[2] === $num_new[3]+$num_new[4]+$num_new[5] ){
        //     echo 'ok';
        // }
        // $arr = [1,2,44,3,4];
        // foreach($arr as $b){
        //     echo $b . '<br>';
        // }
        // $arr = [1, 2, 3];
        // $arr_amount = count($arr);
        // $count = 0;
        //     foreach($arr as $b){
        //         $count+= $b;
        //     }
        //     echo $count / $arr_amount;

        // $arr = ['green' => 'зеленый', 
		// 'red' => 'красный','blue' => 'голубой']; 
        // foreach($arr as $key => $value){
        //     echo '<i>'.$key.'</i>'. '-' . $value . '<br>'.'<br>';
        // }

        // $arr = ['user1' => 30, 'user2' 
		// => 32, 'user3' => 33]; 
        // foreach($arr as $key => $value){
        //     echo $key . '-'. $value . 'лет' .'<br>'.'<br>';
        // }

        // $arr = [1,4,5,8];
        // $counter = 0;
        // foreach($arr as $e){
        //     if($e % 2 === 0){
        //         $counter+=$e;
        //     }
        // }
        // echo $counter;

    //     $i = 30;

    // while($i >= 0){
    //     echo $i;
    //     $i-=1;
    //     }

    // $i = 10;
	
	// while ($i <= 100) {
	// 	echo $i;
	// 	$i++;
	// }

    // $i = 10;
	
	// while ($i == 0) {
	// 	echo $i;
	// 	$i--;
	// }

    // $i = 10;
	
	// while ($i >= 0) {
	// 	echo $i;
	// 	$i--;
	// }

    // $i = 10;
	
	// while ($i >= 1) {
	// 	echo $i;
	// 	$i--;
	// }

    // $counter = 1;
    // for($i=2; $i <= 4; $i++){
    //         $counter*=$i;
    //     }
    // echo $counter;

    // for ($i = 0, $j = 0; $i <= 9; $i++, 
	// 	$j += 2) { 
	// 	echo $i . ' ' . $j . '<br>';
    //     }
    

    // $arr = [1,2,3,-4,5];
    // $counter = 0;
    // for($i =0; $i <= count($arr); $i++){
    //     if($arr[$i] >= 0){
    //         $counter+=$arr[$i];
    //     }
    //     elseif($arr[$i] <= 0){
    //         break;
    //     }
    // }
    // echo $counter;

    // $arr = [3,6,6,3,3];
    // for($i =0; $i <= count($arr); $i++){
    //     if($arr[$i] == 3){
    //         echo $i;
    //         break;
    //     }
    // }
    
    // $counter = 0;
    // for($i=0;$i <= 100;$i++){
    //     $counter+=$i;
    //     $counter2 = $counter . ' ';
    //     echo $counter2;
    //     if($counter >= 90){
    //         break;
    //     }
    // }

    // $str = 'dhnf2';
    // echo strlen($str);

        // $num = 0;
        // $sum = 0;
        // while($sum < 100){
        //     $sum+=$num;
        //     $num++;
        // }
        // echo "Сумма ${sum}, чисел ${num}";
        // $arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
	
        // foreach ($arr as $elem) {
        //     if ($elem % 2 === 0) {
        //         $res = $elem * $elem;
        //     } elseif ($elem % 3 === 0) {
        //         $res = $elem * $elem * $elem;
        //     } else {
        //         continue; // перейдем на новую итерацию 

        //     }
            
        //     echo $res . '<br>'; 
        // }
        // $arr = ['a', 'b', 'c','c', 
		// 'd', 'e'];
        // $flag = false;
        // foreach($arr as $i){
        //     if($i == 'c' ){
        //         $flag == true;
        //         break;
        //     }
        //     if($flag == true){
        //         echo 'есть';
        //     }else{
        //         echo 'нет';
        //     }
        // }

        // $num = 9;
        // $counter = 0;
        // while($num <= 1000 ){
        //     $num=$num*3;
        //     $counter+=1;
        //     echo $num . '<br>';
        // }
        // echo $counter .'<br>';


        // for($num = 0,$i=9;$i<=1000;$i=$i*3,$num++){
        //     echo $i .'<br>';
        //     echo $num;
        // }
        // echo $num .'<br>';

        // $str = '';
        // for($i=1;$i<=9;$i++){
        //     $str.='-'.$i;
        // }
        // echo $str  . '-';

        // НЕ ПОНЯТНО вообще (вложенный цикл)

        // for($n =1; $n<=3 ; $n++){
        //     // echo $n.' итерация'.'<br>';
        //     for($i=1 ;$i<=3; $i++)
        //     echo ''.$n .$i .' ';
        // }

        // НЕ ПОНЯТНО вообще (вложенный цикл)

        // $arr = [];
        // for($n=1; $n<99;$n++){
        //     if($n%2 == 0){
        //         $arr[] = $n +1;
        //     }
        // }
        // var_dump($arr);

        // $arr = [1, 2, 3, 4, 5, 6, 7, 8];
        // for($i=0;$i<count($arr)/2;$i++){
        //     echo $arr[$i];
        // }

    // $arr = [1, 2, 3, 4, 5, 6, 7, 8];
	// $sum = 0;
    // $length = count($arr);
	
	// for ($i = 1; $i < $length; $i++) {
	// 	$sum += $arr[$i];
	// }
	
	// echo $sum;


    // $arr = [1, 2, 3, 4, 5, 6, 7, 8];
    // $length = count($arr);
    // for($i=0;$i<$length;$i++){
    //     $arr[$i]=$arr[$i]*$arr[$i];
    //     echo $arr[$i].'<br>';
    // }

    // $arr = [
	// 	'employee1' => 100,
	// 	'employee2' => 200,
	// 	'employee3' => 300,
	// 	'employee4' => 400,
	// 	'employee5' => 500,
	// 	'employee6' => 600,
	// 	'employee7' => 700,
	// ];
    // $length = count($arr);
    // foreach($arr as $key => $value){
    //     if($value <= 400){
    //         $value = ($value/10)+$value;
    //         echo $key .' '. $value. '<br>';
    //     }
    // }


    // $arr = ['a' => 1, 'b' => 2, 'c' 
	// 	=> 3, 'd' => 4, 'e' => 5]; 
    // foreach($arr as $key => $value){
    //     $arr2[]=$key;
    //     var_dump($arr2);
    // }

    // $arr = [
	// 	1 => 125,
	// 	2 => 225,
	// 	3 => 128,
	// 	4 => 356,
	// 	5 => 145,
	// 	6 => 281,
	// 	7 => 452,
	// ];

    // $new_arr =[];
    // foreach($arr as $key => $value){
    //     $value2 = $value . '';
    //     if($value2[0] == 1 or $value2[0] == 2){
    //         echo $value2 . '<br>';
    //         $new_arr []= $value2;
    //     }
    // }
    // var_dump($new_arr);


        // $arr = [1,4,5,6,7];
        // foreach($arr as $i){
        //     if($i == 5){
        //         echo 'есть';
        //         break;
        //     }
        // }
    // $num = 9;
    // $counter = 1;
    // for($i=1;$i<=$num;$i++){
    //     $counter*=$i;
    // }
    // echo $counter;

    // $arr = [
	// 	['a', 'b', 'c'],
	// 	['d', 'e', 'f'],
	// 	['g', 'h', 'i'],
	// 	['j', 'k', 'l'],
	// ];

    // echo $arr[3][2];
    // echo $arr[1][1];

    // $count = 0;
    // $arr = [[1, 2], [3, 4], [5, 6]];
    // foreach($arr as $i){
    //     $count+=$i[0]+$i[1];
    // }
    // echo $count;


    //ТРЕХМЕРНЫЕ МАССИВЫ - НЕ ПОНЯТНО
    
    // $count = 0;
    // $arr = [
	// 	[
	// 		[1, 2],
	// 		[3, 4],
	// 	],
	// 	[
	// 		[5, 6],
	// 		[7, 8],
	// 	],
	// ];

    // foreach($arr as $i){
    //     $count+=$i[0][0]+$i[0][1];
    //     echo $count . '<br>';
    // }
    // echo $count;
    //     // var_dump($arr[0][1][1]);
    //ТРЕХМЕРНЫЕ МАССИВЫ - НЕ ПОНЯТНО


    // $arr = [
	// 	[
	// 		'name'   => 'user1',
	// 		'age'    => 30,
	// 		'salary' => 1000,
	// 	],
	// 	[
	// 		'name'   => 'user2',
	// 		'age'    => 31,
	// 		'salary' => 2000,
	// 	],
	// 	[
	// 		'name'   => 'user3',
	// 		'age'    => 32,
	// 		'salary' => 3000,
	// 	],
	// ];
    // echo $arr[0]['salary'];
    
    // $arr = [[1, 2, 3], [4, 5, 6, 
    // 7], [8, 9]]; 
    // $counter = 0;

    // foreach ($arr as $sub) {
	// 	foreach ($sub as $elem) {
    //         $counter+=$elem;
	// 	}
	// }
    // echo $counter;


    // $arr = [
	// 	[
	// 		'name'   => 'user1',
	// 		'age'    => 30,
	// 		'salary' => 1000,
	// 	],
	// 	[
	// 		'name'   => 'user2',
	// 		'age'    => 31,
	// 		'salary' => 2000,
	// 	],
	// 	[
	// 		'name'   => 'user3',
	// 		'age'    => 32,
	// 		'salary' => 3000,
	// 	],
	// ];
    // foreach($arr as $key){
    //     foreach($key as $key2 =>$value){
    //         echo $key2 .' '. $value . '<br> ';
    //     }
    // }






    //урок 152








        ?>
</body>
</html>