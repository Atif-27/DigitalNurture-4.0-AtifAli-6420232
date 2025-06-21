# Exercise 7: Financial Forecasting Using Recursive Algorithms

## Overview

This exercise focuses on building a financial forecasting tool that leverages recursion to estimate future values based on past data and growth trends.

---

## 1. Understanding Recursive Algorithms

### What is Recursion?

Recursion is a technique in programming where a function repeatedly calls itself to solve smaller instances of the same problem. This continues until a base condition is met, which stops the recursion.

### Key Components of Recursion:

- **Base Case:** The condition that ends the recursion.
- **Recursive Case:** The part where the function calls itself with modified arguments.

### Why Use Recursion?

Recursion helps express mathematical formulas more naturally in code. Compared to loops, recursive solutions often appear more readable and closely reflect the underlying logic of the problem—especially for problems involving compound or repetitive structures.

---

## 4. Complexity Analysis and Optimization

### Time and Space Complexity

Our recursive forecasting function follows this complexity:

- **Time Complexity:** O(n), where *n* is the number of periods  
  - Each call performs a constant-time operation.
  - Total recursive calls = number of periods.
  
- **Space Complexity:** O(n)  
  - Each function call adds a new frame to the stack.
  - Stack depth increases linearly with the number of recursive calls.

### Performance Considerations

When dealing with a large number of periods (e.g., 1000+), recursion may lead to a stack overflow due to excessive memory usage.

---

## Optimization Strategies
Transforming the recursive logic into a loop eliminates the risk of stack overflow and improves memory efficiency.

```java
// Iterative version: O(n) time, O(1) space
for (int i = 0; i < periods; i++) {
    result *= (1 + growthRate);
}
