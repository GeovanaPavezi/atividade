
function getUsers() {
    var xhttp = new XMLHttpRequest();

    xhttp.open("GET", "http://localhost:8080/users", true);
    xhttp.setRequestHeader('Content-Type', 'application/json');

    xhttp.onload = function () {
        if (xhttp.readyState === 4 && xhttp.status === 200) {
            var users = JSON.parse(xhttp.responseText);
            var userTable = document.getElementById("user");
            
            console.log(users);

            for (var i = 0; i < users.length; i++) {
                var user = users[i];
                var row = document.createElement("tr");

                var email = document.createElement("td");
                emailCell.textContent = client.name;

                var password = document.createElement("td");
                passwordCell.textContent = client.surname;
                
                row.appendChild(emailCell);
                row.appendChild(passwordCell);

                userTable.appendChild(row);
            }
        }
    };
    xhttp.send();
}



function postUser(){
    var xhttp = new XMLHttpRequest();

    xhttp.open("POST", "http://localhost:8080/users", true);
    xhttp.setRequestHeader("Accept", "application/json");
    xhttp.setRequestHeader('Content-Type', 'application/json');

    let user = {
        "name": document.getElementById("name").value,
        "email": document.getElementById("email").value,
        "password": document.getElementById("password").value,
    };

    xhttp.onreadystatechange = function () {
        
        if (xhttp.readyState == 4 && xhttp.status == "200") {
            console.log(xhttp.responseText);
            alert("Usuario cadastrado com sucesso!");
        }
    }
    xhttp.send(JSON.stringify(user));
}