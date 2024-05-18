#numpy #python #machine_learning 
## ndarray attributes
###  `ndarray.ndim`

Returns the <mark class="hltr-pink">number of dimensions (axes)</mark> of the array.

For a matrix $\mathbf{A}$, $\text{ndim}(\mathbf{A})$ gives the number of dimensions (axes) $n$.

```python
import numpy as np

# Define a 2-dimensional array (matrix)
matrix = np.array([[1, 2, 3], [4, 5, 6]])
print(matrix.ndim)  # Output: 2
```

###   `ndarray.shape`

Returns the <mark class="hltr-pink">dimensions of the array</mark> as a tuple.

For a matrix $\mathbf{A} \in \mathbb{R}^{m \times n}$:

$$
\mathbf{A} = \begin{vmatrix}
1 & 2 & 3\\
5 & 4 & 6
\end{vmatrix}
$$

$\text{shape}(\mathbf{A}) = (m, n)$. 
سطر در ستون


```python
# Define a 2-dimensional array (matrix)
matrix = np.array([[1, 2, 3], [4, 5, 6]])
print(matrix.shape)  # Output: (2, 3)
```

###  `ndarray.size`

Returns the <mark class="hltr-pink">total number of elements</mark> in the array.

For a matrix $\mathbf{A} \in \mathbb{R}^{d_1 \times d_2 \times \dots \times d_n}$ with shape $(d_1, d_2, \ldots, d_n)$, $\text{size}(\mathbf{A}) = d_1 \times d_2 \times \cdots \times d_n$.

```python
# Define a 2-dimensional array (matrix)
matrix = np.array([[1, 2, 3], [4, 5, 6]])
print(matrix.size)  # Output: 6
```

### `ndarray.dtype`

Returns the <mark class="hltr-pink">data type of the array’s elements</mark>.

در ndarray همه ی element ها از یک نوع data type هستن و نمیشه دو تا data type مختلف رو توی یک ndarray گذاشت

For a matrix $\mathbf{A}$ with elements of type $T$, $\text{dtype}(\mathbf{A}) = T$.

```python
# Define a 2-dimensional array (matrix)
matrix = np.array([[1, 2, 3], [4, 5, 6]])
print(matrix.dtype)  # Output: int64 (or another integer type)
```

### `ndarray.itemsize`

Returns the <mark class="hltr-pink">size in bytes of each element</mark> in the array.

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

