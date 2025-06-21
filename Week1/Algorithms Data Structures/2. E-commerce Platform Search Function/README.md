## Exercise 2: E-commerce Platform Search Function

### Big O Notation

Big O notation is used to describe how algorithms perform as the size of input increases. It doesn’t measure actual time but gives a rough idea of how an algorithm will scale.

- **O(1)** – Constant time: The time stays the same no matter how much data there is.
- **O(n)** – Linear time: The time grows directly with the input size.
- **O(log n)** – Logarithmic time: Even if the data doubles, the time increases slowly.

This is especially useful when deciding which algorithm to use for large datasets.

---

### Search Cases

#### Linear Search
- **Best Case**: O(1) – item is at the beginning.
- **Average Case**: O(n) – item is somewhere in the middle.
- **Worst Case**: O(n) – item is at the end or not found.

#### Binary Search
- **Best Case**: O(1) – item is right in the middle.
- **Average/Worst Case**: O(log n) – cuts the data in half each time.

Binary search only works on **sorted** data, which is something to keep in mind.

---

### Comparing Linear and Binary Search

| Search Type     | Time Complexity | Needs Sorted Data | Best For                     |
|------------------|------------------|--------------------|-------------------------------|
| Linear Search     | O(n)             | No                 | Small or unsorted datasets    |
| Binary Search     | O(log n)         | Yes                | Large, sorted product lists   |

Let’s say we have a million products:
- Linear search might take up to 1,000,000 comparisons.
- Binary search would only need around 20.

---

### Conclusion

For an e-commerce platform with a large product catalog, binary search is the better option — as long as the data is sorted. It’s much faster and gives a smoother user experience, which really matters when users are expecting instant search results.
