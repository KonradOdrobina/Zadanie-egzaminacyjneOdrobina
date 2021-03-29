function dane()
{
    var imie=document.getElementById('1').value;
    var n=document.getElementById('2').value;
    var m=document.getElementById('3').value;
    var u=document.getElementById('4').value;
    var wynik=document.getElementById('wynik');
    wynik.innerHTML=imie+' '+n+'<br>'+m.toLowerCase()+'<br>'+'Usługa: '+u;
}