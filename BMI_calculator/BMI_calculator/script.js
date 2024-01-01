function calculate() {
  var bmi;
  var result = document.getElementById("result");
  //Bu kod, HTML'de bir "ağırlık" adlı bir giriş alanından kullanıcının girdiği değeri alıp, onu sayı olarak işleyebilmek için parseInt () metodunu kullanarak dönüştürür. Kullanıcı girdiği değer, değişken olarak "ağırlık" olarak kaydedilir.
  var weight = parseInt(document.getElementById("weight").value);
  // Bu JavaScript kodu bir HTML sayfasındaki bir öğenin değerini belirtmek için kullanılır. Örneğin, eğer "weight" değişkeni bir değer olarak 10 olarak ayarlanmışsa, kod sayfada "weight-val" adında bir öğenin (belki bir etiketin) içeriğini 10kg olarak ayarlar.
  document.getElementById("weight-val").textContent = weight + "kg";
  // Bu kod, bir kullanıcıdan bir alanın yüksekliğini almak için kullanılır. Kullanıcının girdiği değer bir dize olarak alındığından, parseInt() fonksiyonu kullanılarak bu dize bir tamsayı'ya dönüştürülür.
  var height = parseInt(document.getElementById("height").value);
  //Kullanıcının girdiği değer, "height" adlı bir HTML etiketi içindeki değere atanır ve "height_val" adlı bir etiket içinde kullanıcıya geri döndürülür.
  document.getElementById("height-val").textContent = height + "cm";

  bmi = (weight / Math.pow(height / 100, 2)).toFixed(1);
  result.textContent = bmi;

  if (bmi < 18.5) {
    category = "underweight";
    result.style.color = "#ffc44d";
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    category = "Normal weight";
    result.style.color = "#0be881";
  } else if (bmi >= 25 && bmi >= 29.9) {
    category = "Overweight";
    result.style.color = "#ff884d";
  } else {
    category = "Obese";
    result.style.color = "ff5e57";
  }
}
