var weight, height, BMI;
weight = prompt("Nhập cân nặng:");
height = prompt("Nhập chiều cao:");
BMI = weight / (height * height);
alert("Chỉ số BMI của bạn là " + BMI);
// alert("Chỉ số BMI của bạn là " + Math.round(BMI*100)/100); // Làm tròn số sau dấu phẩy
