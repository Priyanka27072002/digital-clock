function showTime(){
    var date = new Date();
    var h = date.getHours(); // 0 - 23
    var m = date.getMinutes(); // 0 - 59
    var s = date.getSeconds(); // 0 - 59
    var session = "AM";
    
    if(h == 0){
        h = 12;
    }
    
    if(h > 12){
        h = h - 12;
        session = "PM";
    }
    
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    
    var time = h + ":" + m + ":" + s + " "+session;
    document.getElementById("MyClockDisplay").innerText = time;
    document.getElementById("MyClockDisplay").textContent = time;
    
    setTimeout(showTime, 1000);
    
}

showTime();

function daydisplay(){
    var daynow=new Date;
    var datenow=daynow.getDate();
    var month=daynow.getMonth()+1;
    var year=daynow.getFullYear();
    var datnow=datenow;
    var monnow=month;
    var yearnow=year;
    document.getElementById("mydaydisplay").innerHTML=datnow;
    document.getElementById("mymonth").innerHTML=monnow;
    document.getElementById("myyear").innerHTML=yearnow;

}
daydisplay();

var totaldays=["sunday","monday","tuesday","wednesday","thurday","friday","sataurday"];
var sunday=document.getElementById("sun");
var monday=document.getElementById("mon");
var tuesday=document.getElementById("tue");
var wednesday=document.getElementById("wed");
var thurday=document.getElementById("thu");
var friday=document.getElementById("fri");
var sataurday=document.getElementById("sat");
    console.log(sataurday);

function displayday(){
    var days=new Date();
    var todayday=days.getDay();
    if(totaldays[todayday]=="sunday"){
        sunday.style.backgroundColor="red";
    }
    else{
        sunday.style.backgroundColor="white";
    }
    if(totaldays[todayday]=="monday"){
        monday.style.backgroundColor="red";
    }
    else{
        monday.style.backgroundColor="white";
    }
    if(totaldays[todayday]=="tuesday"){
        tuesday.style.backgroundColor="red";
    }
    else{
        tuesday.style.backgroundColor="white";
    }
    if(totaldays[todayday]=="wednesday"){
        wednesday.style.backgroundColor="red";
    }
    else{
        wednesday.style.backgroundColor="white";
    }
    if(totaldays[todayday]=="thurday"){
        thurday.style.backgroundColor="red";
    }
    else{
        thurday.style.backgroundClip="white";
    }
    if(totaldays[todayday]=="friday"){
        friday.style.backgroundColor="red";
    }
    else{
        friday.style.backgroundColor="white";
    }
    if(totaldays[todayday]=="sataurday"){
        sataurday.style.backgroundColor="red";
    }
    else{
        sataurday.style.backgroundColor="white"
    }
}
displayday();