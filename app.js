// Simple Calculator Functions - UPDATED VERSION
function add(a, b) {
    console.log(`Adding ${a} + ${b}`);
    return a + b;
}

function subtract(a, b) {
    console.log(`Subtracting ${b} from ${a}`);
    return a - b;
}

function multiply(a, b) {
    console.log(`Multiplying ${a} × ${b}`);
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        console.log("Error: Division by zero!");
        return "Cannot divide by zero!";
    }
    console.log(`Dividing ${a} ÷ ${b}`);
    return a / b;
}

// NEW FUNCTION - Power calculation
function power(base, exponent) {
    console.log(`Calculating ${base} to the power of ${exponent}`);
    return Math.pow(base, exponent);
}

// Test the functions
console.log("=== Calculator Tests ===");
console.log("5 + 3 =", add(5, 3));
console.log("10 - 4 =", subtract(10, 4));
console.log("6 × 7 =", multiply(6, 7));
console.log("20 ÷ 4 =", divide(20, 4));
console.log("2 ^ 8 =", power(2, 8));  // NEW TEST

// Simple greeting function - IMPROVED
function greet(name, time = "day") {
    const greetings = {
        morning: "Good morning",
        afternoon: "Good afternoon",
        evening: "Good evening",
        day: "Hello"
    };
    return `${greetings[time]}, ${name}! Welcome to n8n automation.`;
}

console.log(greet("Developer", "morning"));
console.log(greet("User"));
```

**4. Commit the Changes**
- Scroll down
- Commit message: `Add power function and improve logging`
- Make sure **"Commit directly to the feature/update-code branch"** is selected
- Click **"Commit changes"**

**5. Create the Pull Request**
- You'll see a yellow banner saying "feature/update-code had recent pushes"
- Click **"Compare & pull request"**
- Fill in:
  - **Title**: `Add calculator improvements`
  - **Description**:
```
    ## Changes Made
    - Added new `power()` function for exponent calculations
    - Added console.log statements for better debugging
    - Improved `greet()` function with time-based greetings
    
    ## Testing
    - Tested all calculator functions
    - Verified power calculation works correctly
