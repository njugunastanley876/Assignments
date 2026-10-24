// 1. Calculate Tax (10% on the amount)
function calculateTax(amount) {
    return amount * 0.10;
}

// 2. Convert to Uppercase
function convertToUpperCase(text) {
    return text.toUpperCase();
}

// 3. Find Maximum of two numbers
function findMaximum(num1, num2) {
    return Math.max(num1, num2);
}

// 4. Check Palindrome (returns true if the string reads the same forward and backward, false otherwise)
function isPalindrome(word) {
    const cleaned = word.toLowerCase();
    const reversed = cleaned.split('').reverse().join('');
    return cleaned === reversed;
}

// 5. Calculate Discounted Price (takes originalPrice and discountPercentage)
function calculateDiscountedPrice(originalPrice, discountPercentage) {
    const discountAmount = (originalPrice * discountPercentage) / 100;
    return originalPrice - discountAmount;
}