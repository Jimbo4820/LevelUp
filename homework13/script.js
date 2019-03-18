function singIn(){
    var name = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var letter = new RegExp("^[a-zа-яё]+$");
    var pass = new RegExp ("^[a-zA-Z_-]{6,16}$");
    
    if (letter.test(name) == false || name == "" || name == " "){
        alert("Введите имя");
        document.getElementById("username").style.border="3px solid red";
    
    }if (pass.test(password) == false || password == ""){
        alert("Введите пароль");
        document.getElementById("password").style.border="3px solid red";
    
    }else{
        document.getElementById("username").style.border="1px solid gray";
        document.getElementById("password").style.border="1px solid gray";
        alert("Вы залогинились");
    }
    
}