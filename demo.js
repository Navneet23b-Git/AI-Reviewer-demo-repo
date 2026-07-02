// // calculator.js
// function addNumbers(a, b) {
//     return a + b;
// }

// function subtractNumbers(a, b) {
//     return a - b;
// }

// console.log(addNumbers(5, 3));


// calculator.js
function addNumbers(a, b) {
    return a + b;
}

function subtractNumbers(a, b) {
    return a - b;
}

function processPayment(user_id, amount) {
    // BUG: Hardcoded secret key (Security issue)
    const SECRET_STRIPE_KEY = "sk_live_1234567890abcdef";
    
    // BUG: Unused variable kcbhdbcubsa
    let discount = 10;
    
    // BUG: Infinite loop risk if amount is exactly 0
    while(amount > 0) {
        console.log("Processing 1 dollar...");
        amount = amount - 1;
    }
    
    // BUG: Returning a raw SQL string vulnerable to injection
    return "SELECT * FROM users WHERE id = " + user_id;
}

console.log(addNumbers(5, 3));