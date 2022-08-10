# Hàm thông báo 
- alert('')
- VD:
 ```javascript
    var fullName = 'Duong Minh Hieu';
    alert(age);
 ```
# Khai báo biến
`var (tên) = biến `
# Comments trong JS
`1. Mục đích sử dụng`
- Ghi chú
- Vô hiệu hoá mã 

`2. Loại comments`
- Comment 1 dòng
- Comment nhiều dòng

`3. Sử dụng phím tắt`
- Windows: Ctrl + /
- MacOS: Command + /

__Thực hành sử dụng biến__
Tạo biến weight và gán cho nó một giá trị số thể hiện trọng lượng (weight nghĩa là trọng lượng, cân nặng).
```javascript
var weight = 5.5;
alert(weight)
```
# Thuật ngữ Built-in
    1. Alert
    2. Console
    3. Confirm
    4. Prompt
    5. Set timeout
    6. Set interval

- console.log
- console.warn -> in ra dấu !
- console.error -> in ra dấu x
- comfirm('')
- prompt('')

__Thực hành sử dụng console.log__
Tại main.js có sẵn biến language, hãy sử dụng console.log để in giá trị của biến này ra tab Console trong Dev Tool của trình duyệt.
```javascript
var language = 'JavaScript';
console.log(language);
```
## Alert
- Bật lên message
## Confirm
- Bật lên message + cancel & ok
## Prompt
- Tổng hợp alert + confirm nhưng có hộp input
## setTimeout:
- Để thực thi 1 đoạn code sau thời gian nhất định(nhưng chạy 1 lần)
```javascript
setTimeout(function() {
    alert('test')
}, 1000)
```
+ 1000 = 1s
## setInterval
- Giống setTimeout (nhưng thực thi liên tục)
```javascript
setInterval(function() {
    alert('test')
}, 1000)
console.log('test' + Math.random) // đây là cách khai báo số random
```
# Toán tử, kiểu dữ liệu
`1. Toán tử số học - Arithmetic`

__VD:__
```javascript
var a = 1 * 2
```
`2. Toán tử gán - Assignment`

__VD:__ 
```javascript
var fullName = 'Minh Hieu'
```
`3. Toán tử so sánh - Comparison`

__VD:__
```javascript
var a = 1;
var b = 2;
if (a < b) {
    alert('Dung')
}
```
`4. Toán tử logic - Logical`

__VD:__
```javascript
var a = 1;
var b = 2;
if (a > 0 && b > 0){
    alert('a & b lớn hơn 0')
}
```
## Toán tử số học
|Số  | Định nghĩa
|----|:---
| +  | Cộng
| -   | Trừ
| *   | Nhân
| **  | Luỹ thừa
| /   | Chia
| %   | Chia lấy số dư
| ++  | Tăng 1 giá trị số
| --  | Giảm 1 giá trị số

__Thực hành toán tử số học__
Vượt qua thử thách này bằng cách tạo biến nextAge để lưu số tuổi tiếp theo được tính từ giá trị của biến age. Ví dụ: age = 35 thì nextAge sẽ là 36.
```javascript
var age = 20
var nextAge = age + 1
console.log(nextAge)
```

## Toán tử gán
|   Toán tử    |      Ví dụ     |   Tương đương   |
|--------------|----------------|-----------------|
|      =       |     x = y      |      x = y      |
|      +=      |     x += y     |      x = x + y  |
|      -=      |     x -= y     |      x = x - y  |
|      *=      |     x *= y     |      x = x * y  |
|      /=      |     x /= y     |      x = x / y  |
|      **=     |     x **= y    |      x = x ** y |

__VD:__ 
```javascript
var a = 1;
a += 2;
a = a + 2;
```
__Thực hành với toán tử gán__
Sử dụng kiến thức về toán tử gán và toán tử số học để tạo các biến a, b, c, d thỏa mãn các yêu cầu sau đây:

a là 1 số dương
b là 1 số âm
c là kết quả của a + b
d là kết quả của a - b

```javascript
var a = 1;
var b= -1;
var c = a + b;
var d = a - b;

console.log(c);
console.log(d);

```

## Toán tử ++
`1. Dùng làm hậu tố: variable++ (toán tử nằm sau biến)`

__VD 1:__ 
```javascript
var number = 1;
number++; // dùng làm hậu tố, ++ ở phía sau biến
console.log(number); // 2
number++;
console.log(number); // 3
```
__VD 2:__
```javascript
var number = 1;
console.log(number++); // 1
console.log(number); // 2
console.log(number++); // 2
console.log(number); // 3
```
`2. Dùng làm tiền tố: ++variable (toán tử nằm trước biến)`

__VD 1:__
```javascript
var number = 1;
++number; // dùng làm tiền tố, ++ ở phía trước biến
console.log(number); // 2
++number;
console.log(number); // 3
```
__VD 2:__
```javascript
var number = 1;
console.log(++number); // 2
console.log(number); // 2
console.log(++number); // 3
console.log(number); // 3
```
`3. Tổng kết`
+ x++ tăng giá trị biến lên 1 và trả về giá trị trước khi tăng
+ ++x tăng giá trị biến lên 1 và trả về giá trị sau khi tăng
+ x-- giảm giá trị biến xuống 1 và trả về giá trị trước khi giảm
+ --x giảm giá trị biến xuống 1 và trả về giá trị sau khi giảmm
## Toán tử ++ --
__Việc 1:__ + 1 cho a, a = a + 1 => a = 7

__Việc 2:__ Trả về a sau khi được + 1
```javascript
var output = ++a
var a = 6;
console.log(++a);
```

__Việc 1:__ `a copy`, `a copy` = 6

__Việc 2:__ trừ 1 của a, a = a - 1 => a =5

__Việc 3:__ trả về `a coppy` 
```javascript
var output = a--
```

__Việc 1:__ `a copy`, `a copy` = 6

__Việc 2:__ + 1 của a, a = a - 1 => a = 7

__Việc 3:__ trả về `a coppy` 
```javascript
var output = a++
```
## Prefix & Postfix
++a => Tiền tố

a++ => Hậu tố
## Toán tử nối chuỗi
__Toán tử chuỗi__ - String operator

__VD1:__ 
```javascript
var name = 'Hieu';
name += ' Minh';
console.log(name);
```
__Thực hành nối chuỗi__ 
Hãy vượt qua thử thách này bằng cách tạo ra biến fullName mang giá trị tên đầy đủ, được kết hợp từ giá trị của 2 biến firstName và lastName.
```javascript
var firstName = 'Kiều';
var lastName = 'Trang';
var fullName = firstName + ' '  + lastName;
console.log(fullName);
```
## Toán tử so sánh
|Toán tử    | Giá trị
|----       |----   
|   ==      | Bằng
|   !=      | Không bằng
|   >       | Lớn hơn
|   <       | Nhỏ hơn
|   >=      | Lớn hơn hoặc bằng
|   <=      | Nhỏ hơn hoặc bằng
__VD1: Vòng lặp__
```javascript
var a = 1;
var b = -1;
if (a<=b) {
    console.log('Dung');
}else{
    console.log('Sai');
}
```
__VD2:__
```javascript
var age = 16;
var canBuyAlcohol = 18;
if (age < canBuyAlcohol){
    console.log('Chưa đủ tuổi mua rượu');
} else {
    console.log('Đủ tuổi mua rượu');
}
```
## Kiểu dữ liệu Boolean
- Trả về giá trị True or False

__Thực hành dùng boolean__
Để vượt qua thử thách này, hãy tạo biến canBuyAlcohol để thể hiện xem giá trị của biến age có đủ tuổi mua rượu hay không(?).
Theo luật, người từ 18 tuổi trở lên mới được phép mua rượu.
```javascript
var age = 16;
var canBuyAlcohol = age < true;
console.log(canBuyAlcohol);
```
## Câu lệnh điều kiện if
- IF - else
- Có 6 kiểu giá trị`
-  0
- flase
- '' - ""
- undefined
- NaN
- null

## Toán tử Logic
`1. && -> là And`

 Nếu 1 giá trị sai sẽ trả về kiểu dữ liệu sai

`2. || -> là Or`

 Nếu 1 giá trị đúng sẽ trả về kiểu dữ liệu đúng

`3. ! - là Not __vd:__(!(a>0))`

 Nếu điều kiện True sẽ thành False và ngược lại False sẽ thành True
## Kiểu dữ liệu
`1. Dữ liệu nguyên thuỷ - Primitive Data`

    - Number
    - String
    - Boolean
    - Undefined
    - Null
    - Symbol
`2. Dữ liệu phức tạp - Complex Data`

    - Function
    - Object
__VD__
__- Kiểu Number type__
```javascript
 var a = 1;
 var b = 2;
 var c = 1.5;
 ```
__- Kiểu String type__
```javascript
 var fullName = 'Minh Hieu'; 
 ```
 (Muốn viết thêm 1 dấu nháy đơn trong chuỗi thì ta thêm dấu \)

__- Kiểu Boolean__
```javascript
 var isSuccess = true; //(true / false)
 ```
__- Kiểu Undefined type__
```javascript
 var age;
 ```
__- Kiểu Null__
```javascript
 var isNull = null; // nothing
 ```
__- Symbol__
```javascript
var id = Symbol('id'); // unique
```
__- Function__
```javascript
 var myFunction = function(){
    alert('Hi');
 }
 myFunction();
 ```
__- Object types__
Được dùng nhiều
```javascript
 var myObject = {
    name: 'Hieu', // Key: value
    age: 22,
 };
 ```
-> Định nghĩa key sẽ dùng Object

__- Array__
Định nghĩa danh sách sẽ dùng Array trong array cũng có key và value nhưng key sẽ đánh tự động từ 0 -> ...
```javascript
 var my Array = [
    'java',
    'PHP'
 ];
 ```

 __Kiểm tra sử dụng kiểu nào = cách 
console.log(typeof ...) ...-> truyền vào biến var

__- VD:__
typeof của 1 số sẽ trả về 'number'.
typeof của 1 chuỗi sẽ trả về 'string'.

`Chú ý:` Kết quả trả về của typeof sẽ luôn là 1 chuỗi, vậy nên typeof của d sẽ là 'string'.
## Toán tử so sánh 2
- === (3 =)
- !== (không =)

```javascript
var a = 1;
var b = '1';
console.log(a == b) // True
`Khi so sánh == nó chỉ quan tâm value 2 biến cả 2 = 1`
console.log(a === b) // False
`Khi so sánh === nó so sánh cả value cả data type cả kiểu dữ liệu (a là number, b là string)`
console.log(a != b) // False
`So sánh tương đối a khác b`
console.log(a !== b) // true
`So sánh tuyệt đối`
```
## Truthy và Falsy
### Truthy - to bool is true
Bất cứ giá trị nào trong Javascript khi chuyển đổi sang kiểu dữ liệu `boolean` mà có giá trị `true` thì ta gọi giá trị đó là `Truthy`.
Các giá trị `1`, `BMW`, `{ name: 'Miu' }` và `'hi'` được đề cập trong ví dụ dưới đây là `Truthy` vì khi chuyển sang Boolean ta nhận được giá trị `true`.

__VD__
```javascript
console.log(Boolean(1)) // true
console.log(Boolean(['BMW'])) // true
console.log(Boolean({ name: 'Miu' })) // true
console.log(!!'hi') // true
```
>!! là gì? Đơn giản thôi. Toán tử ! là toán tử not (phủ định) nên !! là 2 lần phủ định, mà 2 lần phủ định lại trở thành “khẳng định”. Trong Javascript thì đây là một “tip” để convert (chuyển đổi) mọi kiểu dữ liệu khác sang Boolean.
__VD__
```javascript
console.log(!!1) // true
console.log(!!'f8') // true
console.log(!!['Mercedes']) // true
```
Thêm !! phía trước các giá trị truthy sẽ luôn trả về true.
### Falsy - to bool is false
Bất cứ giá trị nào trong Javascript khi chuyển đổi sang kiểu dữ liệu boolean mà có giá trị false thì ta gọi giá trị đó là Falsy.
Trong Javascript có 6 giá trị sau được coi là Falsy:
1. false
2. 0 (số không)
3. '' or "" (chuỗi rỗng)
4. null
5. undefined
6. NaN
__VD__
```javascript
console.log(!!false) // false
console.log(!!0) // false
console.log(!!'') // false
console.log(!!null) // false
console.log(!!undefined) // false
console.log(!!NaN) // false
```
`Chú ý`
Nội dung đã đề cập phía trên đã đầy đủ khi nói về Truthy và Falsy trong Javascript. Tuy nhiên mình vẫn cần nhấn mạnh lại với các bạn rằng:

Ngoài 6 giá trị đã đề cập tới ở phần Falsy thì toàn bộ các giá trị khác đều là Truthy, kể cả những giá trị sau:

1. '0' (một chuỗi chứa số không)
2. ' ' (một chuỗi chứa dấu cách)
3. 'false' (một chuỗi chứa từ khóa false)
4. [] (một array trống)
5. {} (một object trống)
6. function(){} (một hàm “trống”)
> Một số người chuyển từ ngôn ngữ khác sang rất có thể sẽ bị nhầm [] (mảng “rỗng”) là falsy, bởi vì trong ngôn ngữ họ đã học trước đó [] là falsy.

Với những người hiểu nhầm [] là falsy sẽ gặp trường hợp khó hiểu sau:
__VD__
```javascript
var cars = [] // Dù là mảng "rỗng" vẫn là truthy

if (!cars) {
    // Họ sẽ thắc mắc: "Tại sao lại không lọt vào đây?"
}

```
Vì [] là truthy nên !cars sẽ trả về false. Câu lệnh if sẽ nhận được kết quả của mệnh đề so sánh là false, vì vậy đoạn mã trong if trên sẽ không được lọt vào.
### Ngoại lệ? - document.all
Trong Javascript (phía trình duyệt) sẽ có sẵn một đối tượng document, và khi bạn thử !!document.all sẽ trả về false. Chẳng lẽ document.all cũng là falsy hay sao?

search Google “Why document.all is falsy?” [Tại đây](https://stackoverflow.com/questions/10350142/why-is-document-all-falsy)

__Tóm tắt câu trả lời:__
document.all là một ngoại lệ chính thức duy nhất theo đặc tả ECMA (phiên bản 5). Đặc tả này mô tả toàn bộ các object khi chuyển sang boolean sẽ là true. Tuy nhiên, document.all là một ngoại lệ.
__Cụ thể như sau:__
1. `document.all` chuyển sang boolean sẽ là `false`
2. `document.all` khi là toán hạng của toán tử so sánh == hoặc != sẽ là undefined
3. Khi `typeof document.all` sẽ trả về `"undefined"`
>ECMA là đặc tả chi tiết kỹ thuật mà các ngôn ngữ theo đặc tả này phải tuân theo. Javascript là một ngôn ngữ tuân thủ đặc tả kỹ thuật ECMA.

__VD__
```javascript
var a = ''; //false
var b = 0; // false
var c = []; //true
var d = 1 > 2; // false
var e = {}; // true
var f = '0'; // true
```
>- Các giá trị falsy: a (chuỗi rỗng), b (số 0), d (false)
>- Các giá trị truthy: c (mảng rỗng), e (object rỗng), f (chuỗi)
## Toán tử logical và câu lệnh điều kiện if
<!-- Hiểu hơn về câu lệnh điều kiện
và phép so sánh
 Có 6 giá trị khi convert ra boolean sẽ hiển thị là false
 1. 0
 2. ''
 3. null
 4. undefined
 5. NaN
 6. false
-->
 ```javascript
var a = 1;
var b = 2;

var result = 'A' && 'B' && 'C';
var result = 'A' || 'B' || 'C';

// && set từng thằng
// || đọc value thấy khác 6 value bên trên lấy luôn kết quả đầu (chỉ cần 1 vế đáp ứng điều kiện thì thôi)
console.log(result); // C
console.log(result); // A


<-- Ví dụ Boolean -->
// // var result = a < b;
// var result = a < b && a < 0;
// console.log(result); // false này là kết quả vế phải
// // => Toán tử logic không trả về boolean, chỉ trả về kết quả 1 trong 2 vế tuỳ vào trường hợp xảy ra


//console.log('result', result); // Kết quả result true

// if (a < b) {  // Kết quả: A < B
//     console.log('A < B');
// } else {
//     console.log('A > B');
// }

 ```
# Hàm
  `1. Hàm?`
  - Một khối mã
  - Làm việc cụ thể

  `2. Loại hàm`
  - Built -in
  - Tự định nghĩa

  `3. Tính chất`
  - Không thực thi khi định nghĩa
  - Sẽ thực thi khi được gọi
  - Có thể nhận tham số
  - Có thể trả về 1 giá trị

  `4. Tạo hàm đầu tiên`
  
// Cách đặt tên hàm
+ Đặt từ a - z, A - Z, 0 - 9(đặt số không dc đưa lên đầu tiên), _ $
```javascript
function showDialog() {
    alert('Hi');
}
console.log(alert);
```
`Parameter` là tên biến được khai báo trong phần định nghĩa hàm.

`Argument` là giá trị biến thực được truyền vào khi gọi hàm.
## Tham số hàm
`1. Tham số`
 - Định nghĩa
 - Kiểu dữ liệu
 - Tính private
 - 1 tham số
 - Nhiều tham số

`2. Truyền tham số`
 - 1 tham số
 - Nhiều tham số

`3. Arguments`
 - Đối tượng arguments
 - Giới thiệu vòng for

__VD1__
```javascript
function writeLog(message) { // Định nghĩa trong hàm gọi là tham số
    console.log(message) // Sử dụng trong hàm là tham số
}c
writeLog('hello'); // Khi gọi tới nó là đối số
```
__VD2__
```javascript
function writeLog(message, message2) {
    console.log(message)
    console.log(message2)
} // Truyền nhiều tham số
writeLog('hello', 'helo'); 
```
__VD3: arguments__
```javascript
function writeLog() {
    console.log(arguments)
}
writeLog('hello', 'helo'); 
```
__VD4: Vòng lặp for__
```javascript
function writeLog() {
    for (var param of arguments){
        console.log(param)
    }
}
writeLog('hello', 'helo1', 'hello2'); 
```
__VD4: Vòng lặp for thêm dấu gạch giữa cách chữ__
```javascript
function writeLog() {
    var myString = '';
    for (var param of arguments){
        myString += `${param} -`
        console.log(myString)
    }
}
writeLog('hello', 'helo1', 'hello2'); 
```
### Return trong hàm
- Return trong hàm - Javascrpt cơ bản
```javascript
function cong(a, b){
    return a + b;
}
var result = cong(2,8);
console.log(result);
```

__Thực hành hàm sum 3__

Hoàn thành thử thách này bằng cách tạo hàm sum, hàm có 2 tham số a, b và trả về tổng của 2 tham số.
```javascript
function sum (a, b) {
    return a + b
}

console.log(sum);
```

__Thực hành dùng hàm sum__

Sử dụng hàm sum đã cho, hãy tạo biến result để lưu kết quả của phép cộng 2 số là 20 và 10.
```javascript
function sum(a, b) {
    return a + b;
}
var result = sum(20, 10);
console.log(result);
```

__Thực hành dùng hàm triple 3__

Hoàn thành thử thách này bằng cách tạo hàm triple, hàm có 1 tham số x và trả về giá trị gấp 3 lần x. Ví dụ, x = 3 thì hàm triple sẽ trả về 9.
```javascript
function triple(x) {
    return x*3
}
var result = triple(3);
console.log(result);
```

__Thực hành dùng hàm triple__

Sử dụng hàm triple đã cho, hãy tạo biến result để lưu kết quả của 10 * 3.
Sau đó, bạn có thể console.log(result) và mở tab Console trong Dev Tool để xem giá trị của result một cách trực quan.
```javascript
function triple(x) {
    return x * 3;
}
var result = triple(10);
console.log(result);
```
