function main(){
    if (typeof(localStorage) !== "undefined") {
        //document.getElementByTagName("textarea").innerHTML = localStorage.getItem("text");
        document.getElementById("name").value = localStorage.getItem("name");
        document.getElementById("surname").value = localStorage.getItem("surname");
        document.getElementById("email").value = localStorage.getItem("email");
        document.getElementById("pass_id").value = localStorage.getItem("id");
        document.getElementById("policy_check_input").checked = localStorage.getItem("policy");
    }
    else {
        alert("Funkcja localStorage nie dziła w podanym brauzerze!");
    }
}


function check() {
    var ok=true;
    
    var name = /^[a-zA-Z]{2,20}$/;
    var email = /^([a-zA-Z0-9])+([.a-zA-Z0-9_-])*@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-]+)+/;
    var id = /^[A-PR-WY][1-9]\d\s?\d{4}[1-9]$/ig;
    
    
    
    ok = check_form("name", name) && check_form("surname", name) && check_form("email", email) && check_form("pass_id", id) && check_radio("policy_check_input");
    if(!ok) alert("Nieprawidłowo podane imię, nazwisko, email, numer identyfikacyjny albo/i przycisk o przyjęciu reguł o prywatności!");
    else{
        if (typeof(localStorage) !== "undefined") {
            alert(document.getElementById("name").value);
            //localStorage.setItem("textarea", document.getElementByTagName("textarea").innerHTML);
            localStorage.setItem("name", document.getElementById("name").value);
            localStorage.setItem("surname", document.getElementById("surname").value);
            localStorage.setItem("email", document.getElementById("email").value);
            localStorage.setItem("id", document.getElementById("pass_id").value);
            localStorage.setItem("policy", document.getElementById("policy_check_input").checked);
            
        }
        else {
            alert("Funkcja localStorage nie dziła w podanym brauzerze!");
        }
    }
    return ok;
    
} 

function check_form(id, definition) {
    var object = document.getElementById(id);
    if(!definition.test(object.value)) return (false);
    else return (true);
} 

function check_radio(id){
    var object = document.getElementById(id);
    if (object.checked) return true;
    else return false;
} 