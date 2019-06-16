function greeter(person) {
    return "Hello, " + person;
}

let user = "Jane User",
    rootDiv = document.getElementById('root');
    rootDiv.innerHTML = greeter(user);


console.log(greeter(user));
