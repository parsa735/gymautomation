

var fullname = document.getElementById('fullname');
var registerDate = document.getElementById('registerDate');
var timeCycle = document.getElementById('timeCycle');
var remainCredit = document.getElementById('remainCredit');




const user = {
    id: "123456789" ,
    fullname: "پارسا قهرمانی",
    registerDate: "1378/10/28",
    timeCycle: "یک ماه 24 جلسه",
    remainCredit: "11"
}





let scanner = new Instascan.Scanner({ video: document.getElementById('preview') });
scanner.addListener('scan', function (content) {
    
    if(content === user.id){
        fullname.value = user.fullname;
        registerDate.value = user.registerDate;
        timeCycle.value = user.timeCycle;
        remainCredit.value = user.remainCredit;
    }else {
        alert('wrong')
    }
});
Instascan.Camera.getCameras().then(function (cameras) {
    if (cameras.length > 0) {
        scanner.start(cameras[0]);
    } else {
        console.error('No cameras found.');
    }
}).catch(function (e) {
    console.error(e);
});