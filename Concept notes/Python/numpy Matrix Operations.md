#numpy #python #machine_learning 
## **Matrix Operations**
### `np.dot()`

Computes the dot product of two arrays. For 2-D arrays, it performs matrix multiplication.

Given two matrices $\mathbf{A} \in \mathbb{R}^{m \times n}$ and $\mathbf{B} \in \mathbb{R}^{n \times p}$, the matrix multiplication $\mathbf{C} = \mathbf{A}\mathbf{B}$ is defined as:

$$
\mathbf{C}_{ij} = \sum_{k=1}^{n} \mathbf{A}_{ik} \mathbf{B}_{kj}
$$

```python
# Dot product of two 1-D arrays
a = np.array([1, 2, 3])
b = np.array([4, 5, 6])
dot_product = np.dot(a, b)
print(dot_product)  # Output: 32

# Matrix multiplication of two 2-D arrays
A = np.array([[1, 2], [3, 4]])
B = np.array([[5, 6], [7, 8]])
C = np.dot(A, B)
print(C)
# Output:
# [[19 22]
#  [43 50]]
```

### `np.linalg.inv()`

Computes the multiplicative inverse of a square matrix.

For a square matrix $\mathbf{A}$, its inverse $\mathbf{A}^{-1}$ satisfies the property:

$$
\mathbf{A}\mathbf{A}^{-1} = \mathbf{A}^{-1}\mathbf{A} = \mathbf{I}
$$

where $\mathbf{I}$ is the identity matrix.

```python
# Compute the inverse of a square matrix
A = np.array([[1, 2], [3, 4]])
A_inv = np.linalg.inv(A)
print(A_inv)
# Output:
# [[-2.   1. ]
#  [ 1.5 -0.5]]

# Verify the inverse property
I = np.dot(A, A_inv)
print(I)
# Output:
# [[1.00000000e+00 1.11022302e-16]
#  [0.00000000e+00 1.00000000e+00]]
```

### `np.linalg.eig()`

Computes the eigenvalues and eigenvectors of a square matrix.

For a square matrix $\mathbf{A}$, an eigenvector $\mathbf{v}$ and its corresponding eigenvalue $\lambda$ satisfy the equation:

$$
\mathbf{A}\mathbf{v} = \lambda\mathbf{v}
$$

```python
# Compute the eigenvalues and eigenvectors of a square matrix
A = np.array([[1, 2], [3, 4]])
eigenvalues, eigenvectors = np.linalg.eig(A)
print("Eigenvalues:", eigenvalues)
print("Eigenvectors:")
print(eigenvectors)
# Output:
# Eigenvalues: [-0.37228132  5.37228132]
# Eigenvectors:
# [[-0.82456484 -0.41597356]
#  [ 0.56576746 -0.90937671]]
```

### `np.linalg.svd()`

Computes the singular value decomposition (SVD) of a matrix.

The SVD of a matrix $\mathbf{A} \in \mathbb{R}^{m \times n}$ is a factorization of the form:

$$
\mathbf{A} = \mathbf{U}\mathbf{\Sigma}\mathbf{V}^T
$$

where $\mathbf{U} \in \mathbb{R}^{m \times m}$ and $\mathbf{V} \in \mathbb{R}^{n \times n}$ are orthogonal matrices, and $\mathbf{\Sigma}\in \mathbb{R}^{m \times n}$ is a diagonal matrix containing the singular values of $\mathbf{A}$.

```python
# Compute the singular value decomposition of a matrix
A = np.array([[1, 2], [3, 4], [5, 6]])
U, S, VT = np.linalg.svd(A)
print("U:")
print(U)
print("Singular values:", S)
print("VT:")
print(VT)
# Output:
# U:
# [[-0.3863177  -0.92236578]
#  [-0.59603109  0.31987381]
#  [-0.70710678  0.23191207]]
# Singular values: [9.52551809 0.51430058]
# VT:
# [[-0.61962948 -0.78489445]
#  [-0.78489445  0.61962948]]
```

### `np.linalg.det()`

Computes the determinant of a square matrix.

The determinant of a square matrix $\mathbf{A} \in \mathbb{R}^{n \times n}$ is a scalar value that provides information about the matrix's invertibility and the volume scaling factor of linear transformations.

For a 2x2 matrix $\mathbf{A} = \begin{bmatrix} a & b \\ c & d \end{bmatrix}$, the determinant is calculated as:

$$
\det(\mathbf{A}) = ad - bc
$$

```python
# Compute the determinant of a square matrix
A = np.array([[1, 2], [3, 4]])
det_A = np.linalg.det(A)
print("Determinant:", det_A)
# Output: Determinant: -2.0000000000000004
```


### `np.linalg.norm()`

Computes the matrix or vector norm of an array.

For a vector $\mathbf{x} = [x_1, x_2, \ldots, x_n]$, the most common norms are:

- L1 norm (Manhattan norm): $\|\mathbf{x}\|_1 = \sum_{i=1}^n |x_i|$
- L2 norm (Euclidean norm): $\|\mathbf{x}\|_2 = \sqrt{\sum_{i=1}^n x_i^2}$
- Infinity norm (Maximum norm): $\|\mathbf{x}\|_\infty = \max_{1 \leq i \leq n} |x_i|$

For a matrix $\mathbf{A}$, the most common norms are:

- Frobenius norm: $\|\mathbf{A}\|_F = \sqrt{\sum_{i=1}^m \sum_{j=1}^n |a_{ij}|^2}$
- Induced L2 norm (Spectral norm): $\|\mathbf{A}\|_2 = \max_{\mathbf{x} \neq 0} \frac{\|\mathbf{A}\mathbf{x}\|_2}{\|\mathbf{x}\|_2}$

```python
# Compute the L2 norm of a vector
x = np.array([1, 2, 3])
norm_x = np.linalg.norm(x)
print("L2 norm of x:", norm_x)
# Output: L2 norm of x: 3.7416573867739413

# Compute the Frobenius norm of a matrix
A = np.array([[1, 2], [3, 4]])
norm_A = np.linalg.norm(A, ord='fro')
print("Frobenius norm of A:", norm_A)
# Output: Frobenius norm of A: 5.477225575051661
```

### `np.linalg.solve()`

Solves a system of linear equations $\mathbf{A}\mathbf{x} = \mathbf{b}$ for a square matrix $\mathbf{A}$.

```python
# Solve a system of linear equations
A = np.array([[1, 2], [3, 4]])
b = np.array([5, 11])
x = np.linalg.solve(A, b)
print("Solution:", x)
# Output: Solution: [1. 2.]
```

### `np.linalg.lstsq()`

Computes the least-squares solution to a linear matrix equation $\mathbf{A}\mathbf{x} = \mathbf{b}$ for a rectangular matrix $\mathbf{A}$.

```python
# Compute the least-squares solution
A = np.array([[1, 2], [3, 4], [5, 6]])
b = np.array([7, 8, 9])
x, residuals, rank, s = np.linalg.lstsq(A, b, rcond=None)
print("Least-squares solution:", x)
# Output: Least-squares solution: [-1.  4.]
```

### `np.matmul()` or `@`

Performs matrix multiplication between two arrays.

```python
# Matrix multiplication using np.matmul()
A = np.array([[1, 2], [3, 4]])
B = np.array([[5, 6], [7, 8]])
C = np.matmul(A, B)
print("Matrix multiplication (np.matmul):")
print(C)
# Output:
# Matrix multiplication (np.matmul):
# [[19 22]
#  [43 50]]

# Matrix multiplication using @ operator (Python 3.5+)
D = A @ B
print("Matrix multiplication (@):")
print(D)
# Output:
# Matrix multiplication (@):
# [[19 22]
#  [43 50]]
```


### `np.trace()`

Computes the sum of the diagonal elements of a square matrix or the sum along the diagonals of an array.

For a square matrix $\mathbf{A} \in \mathbb{R}^{n \times n}$, the trace is defined as:

$$
\text{tr}(\mathbf{A}) = \sum_{i=1}^n a_{ii}
$$

```python
# Compute the trace of a square matrix
A = np.array([[1, 2, 3], [4, 5, 6], [7, 8, 9]])
trace_A = np.trace(A)
print("Trace of A:", trace_A)
# Output: Trace of A: 15
```

### `np.outer()`

Computes the outer product of two vectors.

For two vectors $\mathbf{a} \in \mathbb{R}^m$ and $\mathbf{b} \in \mathbb{R}^n$, the outer product is defined as:

$$
\mathbf{C} = \mathbf{a} \otimes \mathbf{b} = \mathbf{a}\mathbf{b}^T
$$

where $\mathbf{C} \in \mathbb{R}^{m \times n}$ is the resulting matrix.

```python
# Compute the outer product of two vectors
a = np.array([1, 2, 3])
b = np.array([4, 5, 6])
C = np.outer(a, b)
print("Outer product:")
print(C)
# Output:
# Outer product:
# [[ 4  5  6]
#  [ 8 10 12]
#  [12 15 18]]
```

### `np.kron()`

Computes the Kronecker product of two arrays.

For two matrices $\mathbf{A} \in \mathbb{R}^{m \times n}$ and $\mathbf{B} \in \mathbb{R}^{p \times q}$, the Kronecker product is defined as:

$$
\mathbf{C} = \mathbf{A} \otimes \mathbf{B} = \begin{bmatrix}
a_{11}\mathbf{B} & \cdots & a_{1n}\mathbf{B} \\
\vdots & \ddots & \vdots \\
a_{m1}\mathbf{B} & \cdots & a_{mn}\mathbf{B}
\end{bmatrix}
$$

where $\mathbf{C} \in \mathbb{R}^{mp \times nq}$ is the resulting matrix.

```python
# Compute the Kronecker product of two matrices
A = np.array([[1, 2], [3, 4]])
B = np.array([[5, 6], [7, 8]])
C = np.kron(A, B)
print("Kronecker product:")
print(C)
# Output:
# Kronecker product:
# [[ 5  6 10 12]
#  [ 7  8 14 16]
#  [15 18 20 24]
#  [21 24 28 32]]
```

### `np.tensordot()`

Computes the tensor dot product along specified axes of two arrays.

```python
# Compute the tensor dot product of two arrays
A = np.arange(1, 5).reshape(2, 2)
B = np.arange(5, 9).reshape(2, 2)
C = np.tensordot(A, B, axes=1)
print('A = ', A )
print('B = ', B )
print("Tensor dot product:")
print(C)
# Output:
# Tensor dot product:
# [[19 22]
#  [43 50]]
```

## انواع ضرب
![[انواع ضرب ماتریکس ها و وکتور ها]]
