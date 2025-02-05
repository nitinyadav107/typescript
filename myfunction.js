function addTwo(num) {
    return num + 2;
}
addTwo(5);
function getUpper(val) {
    return val.toUpperCase();
}
getUpper('hello');
function signUpUser(name, email, isPaid) {
    return { name: name, email: email, isPaid: isPaid };
}
signUpUser('mario', 'mario@thenetninja.co.uk', false);
function loginUser(name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
    return { name: name, email: email, isPaid: isPaid };
}
loginUser('mario', 'mario@thenetninja.co.uk');
