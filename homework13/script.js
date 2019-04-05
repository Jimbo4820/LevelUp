function singIn(){
    var name = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var letter = new RegExp("^[a-zа-яё]+$");
    var pass = new RegExp ("^[a-zA-Z_-]{6,16}$");
    
    if (letter.test(name) == false || name == "" || name == " "){
        alert("Введите имя");
        alert("Username должен состоять только из маленьких букв");
        document.getElementById("username").style.border="1px solid red";
    
    }else{
        document.getElementById("username").style.border="1px solid gray";
    }    
        
    if(pass.test(password) == false || password == ""){
        alert("Введите пароль");
        alert("Пароль должен иметь от 6 до 16 символов, цифры использовать нельзя");
        document.getElementById("password").style.border="1px solid red";
    
    }else{
        document.getElementById("password").style.border="1px solid gray";
    }

    if(letter.test(name) == true && pass.test(password) == true){
        alert("Вы залогинились");
    }

}