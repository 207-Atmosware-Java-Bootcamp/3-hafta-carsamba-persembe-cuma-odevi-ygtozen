///////////////////////////////////////////////////////////////////////////////
//ÖDEV-1
//y=3x+4k ==> 1.dereceden 2 bilinmyenli denklem
//Kullanıcı tarafından alınan x ve k değerlerini hesaplayan algoritma yazınız ?

//ÖDEV-2
//Kullanıcı tarafından alınan dereceyi  Fahrenhayta çeviren algoritma yapalım.
//Formül:(x*9/5)+32

//ÖDEV-3 verilen bir sayının negatif mi pozitif mi olduğunu bulan algoritma ?

//ÖDEV-4 Kullanıcı tarafından aldığımız password ile repassword girilsin doğru ve yanlışı göstersin ?

//ÖDEV-5
//Zamanın dinamik olarak alıp hangi gün olduğunu gösteren arrow function algoritmasını yazalım
// switch-case   new Date().getDay() 0=pazar 1=pazartesi

//ÖDEV-6
//Login userEmail,userPassword kullanıcıdan aldığımız değeri db ile karşılaştıracak eğer doğru ise
// adminFunction'a gönderecek 4 kalan haktan aşağı doğru düşecek eğer kalan hak sayımız 0 olursa kullanıcı bloke olsun
// dbUserEmail="deneme@gmail.com"
// dbUserPassword="root"

//ÖDEV-7
//Zamanın dinamik olarak alıp hangi gün olduğunu gösteren Immedia function algoritmasını 
// yazalım switch-case   new Date().getDay()
// ()()

//ÖDEV-8
//Zamanın dinamik olarak alıp hangi gün olduğunu gösteren Arrow function algoritmasını 
// yazalım switch-case   new Date().getDay()
// let deneme= ()=>{ }

//ÖDEV-9
//Zamanın dinamik olarak alıp hangi gün olduğunu gösteren Anonymous function algoritmasını
// yazalım switch-case   new Date().getDay()
// let deneme= function (){ }

//ÖDEV-10
//Sayı bulma oyunu: 1-10 arasında rastgele sayılar olsun bizde tahmin etmeye çalışalım
// bizim tahmin sayımız 5 olsun eğer biz sayıdan büyükse büyük tahmin eğer sayıdan 
// küçükse küçük tahmin. ve sonunda eğer bulursak kaçıncı tahminde bulduğumuz bize söylesin ?

var x = Number(prompt("x değerini giriniz : "));
var k = Number(prompt("k değerini giriniz : "))
function denklemhesapla(){
    var  y = (3 * x) + (4 * k);
    document.write("<br>" + "y = 3x+4k = " + y);
}
denklemhesapla();