function greeter(person) {
    return "Hello, " + person;
}
var user = "Jane User", rootDiv = document.getElementById('root');
rootDiv.innerHTML = greeter(user);
console.log(greeter(user));
