#numpy #python #machine_learning 
## **Array Creation**

### `np.array()`

Creates a new NumPy array from a given list, tuple, or other array-like object.

```python
# Create a 1-dimensional array
arr_1d = np.array([1, 2, 3, 4, 5])
print(arr_1d)  # Output: [1 2 3 4 5]

# Create a 2-dimensional array (matrix)
arr_2d = np.array([[1, 2, 3], [4, 5, 6]])
print(arr_2d)
# Output:
# [[1 2 3]
#  [4 5 6]]
```

### `np.zeros()`

Creates a new array filled with zeros, given a specified shape.

For a matrix $\mathbf{A} \in \mathbb{R}^{m \times n}$ filled with zeros:

$$
\mathbf{A} = \begin{vmatrix}
0 & 0 & \cdots & 0\\
0 & 0 & \cdots & 0\\
\vdots & \vdots & \ddots & \vdots\\
0 & 0 & \cdots & 0
\end{vmatrix}
$$

```python
# Create a 1-dimensional array of zeros
arr_1d = np.zeros(5)
print(arr_1d)  # Output: [0. 0. 0. 0. 0.]

# Create a 2-dimensional array of zeros
arr_2d = np.zeros((2, 3))
print(arr_2d)
# Output:
# [[0. 0. 0.]
#  [0. 0. 0.]]
```

### `np.ones()`

Creates a new array filled with ones, given a specified shape.

For a matrix $\mathbf{A} \in \mathbb{R}^{m \times n}$ filled with ones:

$$
\mathbf{A} = \begin{vmatrix}
1 & 1 & \cdots & 1\\
1 & 1 & \cdots & 1\\
\vdots & \vdots & \ddots & \vdots\\
1 & 1 & \cdots & 1
\end{vmatrix}
$$

```python
# Create a 1-dimensional array of ones
arr_1d = np.ones(5)
print(arr_1d)  # Output: [1. 1. 1. 1. 1.]

# Create a 2-dimensional array of ones
arr_2d = np.ones((2, 3))
print(arr_2d)
# Output:
# [[1. 1. 1.]
#  [1. 1. 1.]]
```

### `np.arange()`

Creates a new array with evenly spaced values within a given interval.

```python
# Create an array with values from 0 to 4
arr = np.arange(5)
print(arr)  # Output: [0 1 2 3 4]

# Create an array with values from 1 to 9 with a step of 2
arr = np.arange(1, 10, 2)
print(arr)  # Output: [1 3 5 7 9]
```

### `np.linspace()`

Creates a new array with a specified number of elements, evenly spaced between a start and end value.

```python
# Create an array of 5 evenly spaced values from 0 to 1
arr = np.linspace(0, 1, 5)
print(arr)  # Output: [0.   0.25 0.5  0.75 1.  ]

# Create an array of 4 evenly spaced values from 1 to 10
arr = np.linspace(1, 10, 4)
print(arr)  # Output: [ 1.  4.  7. 10.]
```