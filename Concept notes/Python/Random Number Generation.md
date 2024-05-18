#numpy #python #machine_learning 
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