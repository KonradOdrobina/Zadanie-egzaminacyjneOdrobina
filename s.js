function dane(){
    var imie=document.getElementById('imie').value;
    var naz=document.getElementById('nazwisko').value;
    var email=document.getElementById('email').value;
    var usluga=document.getElementById('usluga').value;
    var wynik=document.getElementById('wynik');
    wynik.innerHTML=imie+' '+naz+'<br>'+email.toLowerCase()+'<br>'+'Usługa: '+usluga;
}