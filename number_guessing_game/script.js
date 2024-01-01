// Burada, HTML dosyasından 3 HTML elementine erişmek için 3 değişken oluşturduk.
// Değişkenler "message1", "message2" ve "message3" olarak adlandırıldı
// ve HTML dosyasından her bir elementin ID'sini kullanarak o elemente referans oluşturuldu.
var msg1 = document.getElementById("message1");
var msg2 = document.getElementById("message2");
var msg3 = document.getElementById("message3");

// Bu kod, 0 ile 100 arasında rastgele bir sayı üretmek için Math.random() fonksiyonunu kullanmaktadır.
// Math.floor() fonksiyonu kullanılarak, bu rastgele sayının en yakın tam sayıya yuvarlanması sağlanmaktadır.
// Son olarak, bu tam sayıya 1 eklenerek, 1 ile 100 arasında rastgele bir sayı elde edilmiştir.
var answer = Math.floor(Math.random() * 100) + 1;
// Burada, bir tahmin oyununda kullanıcının tahmin etmesi gereken tahmin sayısını tutmak için bir değişken oluşturduk.
var no_of_guesses = 0;
// Dizi değişkeni kullanıcının tahminlerini saklamak için kullanılırken, sayı değişkeni kullanıcının kaç kere tahmin yaptığını saklamak için kullanılır.
var guessed_nums = [];

// Burada, bir oyunu başlatmak için çağrılan bir işlevi çağırdık. Oyun, kullanıcının belirli bir kurallara uyarak, bazı görevleri tamamlamasını gerektiren bir etkinliktir.
function play() {
  // Burada, HTML sayfasındaki "guess" ID'sine sahip bir giriş alanından kullanıcının girdiği değeri "user_guess" değişkenine atadık.
  var user_guess = document.getElementById("guess").value;
  // Burada, kullanıcının 1 ile 100 arasında bir sayı girmesini istedik. Bunu yaptığımızda, kullanıcı 1 ve 100 arasında bir sayı girmedikçe, bir uyarı mesajı alacak.
  if (user_guess < 1 || user_guess > 100) {
    alert("Please enter a number between 1 and 100.");
  } else {
    guessed_nums.push(user_guess);
    no_of_guesses += 1;

    if (user_guess < answer) {
      msg1.textContent = "Your guess is too low.";
      msg2.textContent = "No, of guesses: " + no_of_guesses;
      msg3.textContent = "Guessed numbers are:" + guessed_nums;
    } else if (user_guess > answer) {
      msg1.textContent = "Your guess is too high.";
      msg2.textContent = "No, of guesses: " + no_of_guesses;
      msg3.textContent = "Guessed numbers are:" + guessed_nums;
    } else if (user_guess == answer) {
      msg1.textContent = "Yippie You Win!!";
      msg2.textContent = "The number was: " + answer;
      msg3.textContent = "You guessed it in:" + no_of_guesses + "guesses";
      document.getElementById("my_btn").disabled = true;
    }
  }
}
