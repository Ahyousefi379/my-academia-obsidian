#numpy #python #machine_learning 
## **Array Indexing and Slicing**
### `arr[start:stop:step]`

Slices an array along a specified axis using the start, stop, and step parameters.

- `start`: The starting index of the slice (inclusive). If omitted, it defaults to the beginning of the axis.
- `stop`: The ending index of the slice (exclusive). If omitted, it defaults to the end of the axis.
- `step`: The step size of the slice. It determines the stride or the number of elements to skip between each element in the slice. If omitted, it defaults to 1.

```python
# Create a 1-D array
arr = np.array([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])

# Slice the array using start:stop:step notation
sliced_arr = arr[1:8:2]
print("Sliced array:", sliced_arr)
# Output: Sliced array: [2 4 6 8]
```

### `arr[row_indices, column_indices]`

Indexes an array using separate row and column indices for 2-D arrays.

- `row_indices`: An integer, slice, or array of integers specifying the row indices to select.
- `column_indices`: An integer, slice, or array of integers specifying the column indices to select.

```python
# Create a 2-D array
arr = np.array([[1, 2, 3], [4, 5, 6], [7, 8, 9]])

# Index the array using row and column indices
indexed_arr = arr[[0, 2], [0, 1]]
print("Indexed array:", indexed_arr)
# Output: Indexed array: [1 8]
```

### `arr[boolean_array]`

Indexes an array using a boolean array of the same shape. It returns the elements of the array where the corresponding elements in the boolean array are True.

```python
# Create a 1-D array
arr = np.array([1, 2, 3, 4, 5])

# Create a boolean array
bool_arr = np.array([True, False, True, False, True])

# Index the array using the boolean array
indexed_arr = arr[bool_arr]
print("Indexed array:", indexed_arr)
# Output: Indexed array: [1 3 5]
```