
### `np.reshape()`

Reshapes an array into a new shape without changing its data.

For a matrix $\mathbf{A} \in \mathbb{R}^{m \times n}$:

$$
\mathbf{A} = \begin{vmatrix}
1 & 2 & 3\\
4 & 5 & 6
\end{vmatrix}
$$

$\text{reshape}(\mathbf{A}, (m \cdot n, 1))$ reshapes the matrix into a column vector.

```python
matrix = np.array([[1, 2, 3], [4, 5, 6]])
reshaped_matrix = np.reshape(matrix, (6, 1))
print(reshaped_matrix)
# Output:
# [[1]
#  [2]
#  [3]
#  [4]
#  [5]
#  [6]]
```

### `np.transpose()` or `.T`

Transposes a matrix, i.e., swaps the rows and columns.

For a matrix $\mathbf{A} \in \mathbb{R}^{m \times n}$:

$$
\mathbf{A} = \begin{vmatrix}
1 & 2 & 3\\
4 & 5 & 6
\end{vmatrix}
$$

$\mathbf{A}^T \in \mathbb{R}^{n \times m}$ is the transposed matrix.

```python
matrix = np.array([[1, 2, 3], [4, 5, 6]])
transposed_matrix = np.transpose(matrix)
# or transposed_matrix = matrix.T
print(transposed_matrix)
# Output:
# [[1 4]
#  [2 5]
#  [3 6]]
```

### `np.concatenate()`

Joins a sequence of arrays along an existing axis.

For matrices $\mathbf{A} \in \mathbb{R}^{m \times n}$ and $\mathbf{B} \in \mathbb{R}^{m \times p}$:

$$
\mathbf{A} = \begin{vmatrix}
1 & 2 & 3\\
4 & 5 & 6
\end{vmatrix},
\mathbf{B} = \begin{vmatrix}
7 & 8\\
9 & 10
\end{vmatrix}
$$

$\text{concatenate}((\mathbf{A}, \mathbf{B}), \text{axis}=1)$ concatenates the matrices horizontally.

```python
matrix_a = np.array([[1, 2, 3], [4, 5, 6]])
matrix_b = np.array([[7, 8], [9, 10]])
concatenated_matrix = np.concatenate((matrix_a, matrix_b), axis=1)
print(concatenated_matrix)
# Output:
# [[ 1  2  3  7  8]
#  [ 4  5  6  9 10]]
```

### `np.split()`

Splits an array into multiple sub-arrays along a specified axis.

For a matrix $\mathbf{A} \in \mathbb{R}^{m \times n}$:

$$
\mathbf{A} = \begin{vmatrix}
1 & 2 & 3 & 4\\
5 & 6 & 7 & 8
\end{vmatrix}
$$

$\text{split}(\mathbf{A}, 2, \text{axis}=1)$ splits the matrix into two equal parts horizontally.

```python
matrix = np.array([[1, 2, 3, 4], [5, 6, 7, 8]])
split_matrices = np.split(matrix, 2, axis=1)
print(split_matrices)
# Output:
# [array([[1, 2],
#         [5, 6]]),
#  array([[3, 4],
#        [7, 8]])]
```

### `np.hsplit()`

Splits an array into multiple sub-arrays horizontally (column-wise).

For a matrix $\mathbf{A} \in \mathbb{R}^{m \times n}$:

$$
\mathbf{A} = \begin{vmatrix}
1 & 2 & 3 & 4\\
5 & 6 & 7 & 8
\end{vmatrix}
$$

$\text{hsplit}(\mathbf{A}, 2)$ splits the matrix into two equal parts horizontally.

```python
matrix = np.array([[1, 2, 3, 4], [5, 6, 7, 8]])
hsplit_matrices = np.hsplit(matrix, 2)
print(hsplit_matrices)
# Output:
# [array([[1, 2],
#         [5, 6]]),
#  array([[3, 4],
#         [7, 8]])]
```

### `np.vsplit()`

Splits an array into multiple sub-arrays vertically (row-wise).

For a matrix $\mathbf{A} \in \mathbb{R}^{m \times n}$:

$$
\mathbf{A} = \begin{vmatrix}
1 & 2 & 3 & 4\\
5 & 6 & 7 & 8
\end{vmatrix}
$$

$\text{vsplit}(\mathbf{A}, 2)$ splits the matrix into two equal parts vertically.

```python
matrix = np.array([[1, 2, 3, 4], [5, 6, 7, 8]])
vsplit_matrices = np.vsplit(matrix, 2)
print(vsplit_matrices)
# Output:
# [array([[1, 2, 3, 4]]),
#  array([[5, 6, 7, 8]])]
```

### `np.squeeze()`

Removes single-dimensional entries from the shape of an array.

For a matrix $\mathbf{A} \in \mathbb{R}^{1 \times n}$:

$$
\mathbf{A} = \begin{vmatrix}
1 & 2 & 3 & 4
\end{vmatrix}
$$

$\text{squeeze}(\mathbf{A})$ removes the single-dimensional entry, resulting in a 1-D array.

```python
matrix = np.array([[1, 2, 3, 4]])
squeezed_matrix = np.squeeze(matrix)
print(squeezed_matrix)
# Output:
# [1 2 3 4]
```

### `np.expand_dims()`

Expands the shape of an array by inserting a new axis at a specified position.

For a 1-D array $\mathbf{a} \in \mathbb{R}^{n}$:

$$
\mathbf{a} = \begin{vmatrix}
1 & 2 & 3 & 4
\end{vmatrix}
$$

$\text{expand\_dims}(\mathbf{a}, \text{axis}=0)$ inserts a new axis at position 0, resulting in a matrix.

```python
array = np.array([1, 2, 3, 4])
expanded_array = np.expand_dims(array, axis=0)
print(expanded_array)
# Output:
# [[1 2 3 4]]
```