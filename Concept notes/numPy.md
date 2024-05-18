#numpy #python #machine_learning 

## ndarray attributes
###  `ndarray.ndim`

Returns the number of dimensions (axes) of the array.

For a matrix $\mathbf{A}$, $\text{ndim}(\mathbf{A})$ gives the number of dimensions (axes) $n$.

```python
import numpy as np

# Define a 2-dimensional array (matrix)
matrix = np.array([[1, 2, 3], [4, 5, 6]])
print(matrix.ndim)  # Output: 2
```

###   `ndarray.shape`

Returns the dimensions of the array as a tuple.

For a matrix $\mathbf{A} \in \mathbb{R}^{m \times n}$:

$$
\mathbf{A} = \begin{vmatrix}
1 & 2 & 3\\
5 & 4 & 6
\end{vmatrix}
$$

$\text{shape}(\mathbf{A}) = (m, n)$.

```python
# Define a 2-dimensional array (matrix)
matrix = np.array([[1, 2, 3], [4, 5, 6]])
print(matrix.shape)  # Output: (2, 3)
```

###  `ndarray.size`

Returns the total number of elements in the array.

For a matrix $\mathbf{A}$ with shape $(d_1, d_2, \ldots, d_n)$, $\text{size}(\mathbf{A}) = d_1 \times d_2 \times \cdots \times d_n$.

```python
# Define a 2-dimensional array (matrix)
matrix = np.array([[1, 2, 3], [4, 5, 6]])
print(matrix.size)  # Output: 6
```

### `ndarray.dtype`

Returns the data type of the array’s elements.

For a matrix $\mathbf{A}$ with elements of type $T$, $\text{dtype}(\mathbf{A}) = T$.

```python
# Define a 2-dimensional array (matrix)
matrix = np.array([[1, 2, 3], [4, 5, 6]])
print(matrix.dtype)  # Output: int64 (or another integer type)
```

### `ndarray.itemsize`

Returns the size in bytes of each element in the array.

For a matrix $\mathbf{A}$ with elements of type $T$, and each element requiring $b$ bytes, $\text{itemsize}(\mathbf{A}) = b$.

```python
# Define a 2-dimensional array (matrix)
matrix = np.array([[1, 2, 3], [4, 5, 6]])
print(matrix.itemsize)  # Output: 8 (for int64, which requires 8 bytes)
```

### `ndarray.data`

Returns a buffer containing the actual elements of the array.

Provides direct access to the array's buffer with the raw data.

```python
# Define a 2-dimensional array (matrix)
matrix = np.array([[1, 2, 3], [4, 5, 6]])
print(matrix.data)  # Output: <memory at 0x...> (memory address)
```

I have a list of ways to create NumPy arrays. For each item, please provide a clear and concise explanation, a mathematical explanation using LaTeX (if applicable), and a small example code. When defining a matrix for the first time in LaTeX, please use the format:

$$
\mathbf{A} = \begin{vmatrix}
1 & 2 & 3\\
5 & 4 & 6
\end{vmatrix}
$$

Format your response as follows:

1. Provide a brief explanation of what the attribute/method does.
2. Include a mathematical explanation using LaTeX.
3. Provide a small example code.

Use this format for each item. For example:



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


## **Random Number Generation**
### `np.random.seed()`

Sets the seed for the random number generator. This ensures reproducibility of random number sequences.

```python
np.random.seed(42)
```

### `np.random.rand()`

Generates a random float or an array of random floats between 0 and 1 (exclusive).

```python
# Generate a single random float
single_float = np.random.rand()
print(single_float)  # Output: 0.3745401188473625

# Generate a 2x3 array of random floats
array = np.random.rand(2, 3)
print(array)
# Output:
# [[0.5986584  0.15601864 0.15599452]
#  [0.05808361 0.86617615 0.60111501]]
```

### `np.random.randn()`

Generates a random float or an array of random floats from a standard normal distribution (mean=0, variance=1).

```python
# Generate a single random float from a standard normal distribution
single_float = np.random.randn()
print(single_float)  # Output: -0.1382643041521304

# Generate a 2x3 array of random floats from a standard normal distribution
array = np.random.randn(2, 3)
print(array)
# Output:
# [[ 0.64878481 -0.51414783  0.23931942]
#  [-0.29309576  0.27183095 -0.39522898]]
```

### `np.random.randint()`

Generates a random integer or an array of random integers between a specified lower and upper bound (exclusive).

```python
# Generate a single random integer between 0 and 10 (exclusive)
single_int = np.random.randint(0, 10)
print(single_int)  # Output: 7

# Generate a 2x3 array of random integers between 0 and 10 (exclusive)
array = np.random.randint(0, 10, size=(2, 3))
print(array)
# Output:
# [[2 8 1]
#  [5 9 4]]
```

### `np.random.choice()`

Generates a random sample from a given 1-D array or list.

```python
# Generate a single random element from an array
array = np.array([1, 2, 3, 4, 5])
single_element = np.random.choice(array)
print(single_element)  # Output: 3

# Generate a random sample of size 3 from an array, with replacement
sample = np.random.choice(array, size=3, replace=True)
print(sample)  # Output: [2 4 2]
```

### `np.random.permutation()`

Generates a random permutation of elements in an array or a sequence of integers.

```python
# Generate a random permutation of an array
array = np.array([1, 2, 3, 4, 5])
permutation = np.random.permutation(array)
print(permutation)  # Output: [4 2 5 1 3]

# Generate a random permutation of integers from 0 to 4
permutation = np.random.permutation(5)
print(permutation)  # Output: [2 0 4 1 3]
```

### `np.random.shuffle()`

Shuffles the elements of an array in-place.

```python
# Shuffle the elements of an array in-place
array = np.array([1, 2, 3, 4, 5])
np.random.shuffle(array)
print(array)  # Output: [4 2 5 1 3]
```
### `np.random.normal()`

Generates a random float or an array of random floats from a normal (Gaussian) distribution with specified mean and standard deviation.

For a normal distribution $X \sim \mathcal{N}(\mu, \sigma^2)$, the probability density function is given by:

$$
f(x) = \frac{1}{\sigma \sqrt{2 \pi}} e^{-\frac{(x-\mu)^2}{2\sigma^2}}
$$

```python
# Generate a single random float from a normal distribution with mean=0 and std=1
single_float = np.random.normal(loc=0, scale=1)
print(single_float)  # Output: -0.8444218515250481

# Generate a 2x3 array of random floats from a normal distribution with mean=1 and std=2
array = np.random.normal(loc=1, scale=2, size=(2, 3))
print(array)
# Output:
# [[ 1.80076712 -1.12375847 -0.98524305]
#  [ 0.11673573  3.57075416  2.29012886]]
```

### `np.random.uniform()`

Generates a random float or an array of random floats from a uniform distribution over a specified interval [low, high).

```python
# Generate a single random float from a uniform distribution over [0, 1)
single_float = np.random.uniform()
print(single_float)  # Output: 0.5204990477657363

# Generate a 2x3 array of random floats from a uniform distribution over [-1, 1)
array = np.random.uniform(low=-1, high=1, size=(2, 3))
print(array)
# Output:
# [[-0.21069679 -0.97163544 -0.80169328]
#  [ 0.95813935 -0.87869884 -0.15681411]]
```

### `np.random.exponential()`

Generates a random float or an array of random floats from an exponential distribution with specified scale parameter (inverse of rate).

For an exponential distribution with rate parameter $\lambda$, the probability density function is given by:

$$
f(x) = \lambda e^{-\lambda x}, \quad x \geq 0
$$

```python
# Generate a single random float from an exponential distribution with scale=1
single_float = np.random.exponential(scale=1)
print(single_float)  # Output: 0.6129358541879622

# Generate a 2x3 array of random floats from an exponential distribution with scale=2
array = np.random.exponential(scale=2, size=(2, 3))
print(array)
# Output:
# [[1.48321775 0.14259863 3.07645445]
#  [3.64553089 1.15638288 0.28298424]]
```

### `np.random.poisson()`

Generates a random integer or an array of random integers from a Poisson distribution with specified rate parameter.

For a Poisson distribution with rate parameter $\lambda$, the probability mass function is given by:

$$
P(X = k) = \frac{\lambda^k e^{-\lambda}}{k!}, \quad k = 0, 1, 2, \ldots
$$

```python
# Generate a single random integer from a Poisson distribution with lam=2
single_int = np.random.poisson(lam=2)
print(single_int)  # Output: 3

# Generate a 2x3 array of random integers from a Poisson distribution with lam=5
array = np.random.poisson(lam=5, size=(2, 3))
print(array)
# Output:
# [[4 4 7]
#  [5 5 3]]
```

### `np.random.binomial()`

Generates a random integer or an array of random integers from a binomial distribution with specified number of trials and probability of success.

For a binomial distribution with parameters $n$ (number of trials) and $p$ (probability of success), the probability mass function is given by:

$$
P(X = k) = \binom{n}{k} p^k (1-p)^{n-k}, \quad k = 0, 1, 2, \ldots, n
$$

```python
# Generate a single random integer from a binomial distribution with n=10 and p=0.3
single_int = np.random.binomial(n=10, p=0.3)
print(single_int)  # Output: 2

# Generate a 2x3 array of random integers from a binomial distribution with n=5 and p=0.5
array = np.random.binomial(n=5, p=0.5, size=(2, 3))
print(array)
# Output:
# [[3 2 3]
#  [4 2 2]]
```

### `np.random.beta()`

Generates a random float or an array of random floats from a beta distribution with specified shape parameters alpha and beta.

For a beta distribution with shape parameters $\alpha$ and $\beta$, the probability density function is given by:

$$
f(x) = \frac{x^{\alpha-1}(1-x)^{\beta-1}}{B(\alpha, \beta)}, \quad 0 < x < 1
$$

where $B(\alpha, \beta)$ is the beta function.

```python
# Generate a single random float from a beta distribution with alpha=2 and beta=5
single_float = np.random.beta(a=2, b=5)
print(single_float)  # Output: 0.21601282851316602

# Generate a 2x3 array of random floats from a beta distribution with alpha=0.5 and beta=0.5
array = np.random.beta(a=0.5, b=0.5, size=(2, 3))
print(array)
# Output:
# [[0.66974604 0.00395181 0.84616065]
#  [0.25861324 0.79382848 0.62660146]]
```

### `np.random.gamma()`

Generates a random float or an array of random floats from a gamma distribution with specified shape and scale parameters.

For a gamma distribution with shape parameter $k$ and scale parameter $\theta$, the probability density function is given by:

$$
f(x) = \frac{1}{\Gamma(k)\theta^k}x^{k-1}e^{-\frac{x}{\theta}}, \quad x > 0
$$

where $\Gamma(k)$ is the gamma function.

```python
# Generate a single random float from a gamma distribution with shape=2 and scale=1
single_float = np.random.gamma(shape=2, scale=1)
print(single_float)  # Output: 1.5877128830570583

# Generate a 2x3 array of random floats from a gamma distribution with shape=3 and scale=2
array = np.random.gamma(shape=3, scale=2, size=(2, 3))
print(array)
# Output:
# [[4.50682641 5.50980955 7.01867703]
#  [3.81216698 7.85570737 7.65571351]]
```

### `np.random.chisquare()`

Generates a random float or an array of random floats from a chi-square distribution with specified degrees of freedom.

For a chi-square distribution with $k$ degrees of freedom, the probability density function is given by:

$$
f(x) = \frac{1}{2^{k/2}\Gamma(k/2)}x^{k/2-1}e^{-x/2}, \quad x > 0
$$

where $\Gamma(k/2)$ is the gamma function.

```python
# Generate a single random float from a chi-square distribution with df=5
single_float = np.random.chisquare(df=5)
print(single_float)  # Output: 4.352175725028524

# Generate a 2x3 array of random floats from a chi-square distribution with df=10
array = np.random.chisquare(df=10, size=(2, 3))
print(array)
# Output:
# [[ 8.84665064 12.12184551  9.33034329]
#  [10.52153332  7.40294213 11.01008919]]
```


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


## **Array Manipulation**

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


## **Mathematical Operations**
### `np.sum()`: Compute the sum of array elements
### `np.mean()`: Compute the arithmetic mean of array elements
### `np.std()`: Compute the standard deviation of array elements
### `np.min()`, ### `np.max()`: Find the minimum and maximum values in an array
### `np.argmin()`, `np.argmax()`: Find the indices of the minimum and maximum values in an array
### `np.median()`: Compute the median of array elements
### `np.percentile()`: Compute the q-th percentile of array elements
### `np.var()`: Compute the variance of array elements

### `np.corrcoef()`: Compute the Pearson correlation coefficients between pairs of variables
### `np.cov()`: Compute the covariance matrix of variables
### `np.exp()`, `np.log()`, `np.sin()`, `np.cos()`, `np.tan()`, etc.: Mathematical functions that operate element-wise on arrays
### `np.polyfit()`: Fit a polynomial to data points
### `np.poly1d()`: Create a polynomial function from coefficients
### `np.roots()`: Find the roots of a polynomial equation
### `np.interp()`: Perform linear interpolation on 1-D arrays
### `np.gradient()`: Calculate the gradient of an array
### `np.trapz()`: Integrate along the given axis using the trapezoidal rule
### `np.cumsum()`: Compute the cumulative sum of array elements
### `np.cumprod()`: Compute the cumulative product of array elements
### `np.diff()`: Calculate the n-th discrete difference along the given axis

