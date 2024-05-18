
1. **Dot Product (Scalar Product):**
The dot product of two vectors $\vec{a}$ and $\vec{b}$ is a scalar value denoted by $\vec{a} \cdot \vec{b}$. It is defined as the product of the magnitudes of the two vectors and the cosine of the angle between them.

$$\vec{a} \cdot \vec{b} = \lvert\vec{a}\rvert \lvert\vec{b}\rvert \cos\theta$$

where $\theta$ is the angle between $\vec{a}$ and $\vec{b}$.

For two vectors $\vec{a} = (a_1, a_2, a_3)$ and $\vec{b} = (b_1, b_2, b_3)$, the dot product is calculated as:

$$\vec{a} \cdot \vec{b} = a_1b_1 + a_2b_2 + a_3b_3$$

Example: Let $\vec{a} = (2, 3, 1)$ and $\vec{b} = (4, -1, 2)$, then:

$$\vec{a} \cdot \vec{b} = (2 \times 4) + (3 \times -1) + (1 \times 2) = 8 - 3 + 2 = 7$$

2. **Cross Product (Vector Product):**
The cross product of two vectors $\vec{a}$ and $\vec{b}$ is a vector denoted by $\vec{a} \times \vec{b}$. It is a vector that is perpendicular to both $\vec{a}$ and $\vec{b}$, and its magnitude is given by $\lvert\vec{a}\rvert \lvert\vec{b}\rvert \sin\theta$, where $\theta$ is the angle between $\vec{a}$ and $\vec{b}$.

$$\vec{a} \times \vec{b} = \lvert\vec{a}\rvert \lvert\vec{b}\rvert \sin\theta \vec{n}$$

where $\vec{n}$ is the unit vector perpendicular to both $\vec{a}$ and $\vec{b}$.

For two vectors $\vec{a} = (a_1, a_2, a_3)$ and $\vec{b} = (b_1, b_2, b_3)$, the cross product is calculated as:

$$\vec{a} \times \vec{b} = (a_2b_3 - a_3b_2, a_3b_1 - a_1b_3, a_1b_2 - a_2b_1)$$

Example: Let $\vec{a} = (2, 1, 3)$ and $\vec{b} = (4, 2, -1)$, then:

$$\vec{a} \times \vec{b} = (1 \times -1 - 3 \times 2, 3 \times 4 - 2 \times -1, 2 \times 2 - 1 \times 4) = (-7, 10, 3)$$

3. **Outer Product (Tensor Product):**
The outer product of two vectors $\vec{a}$ and $\vec{b}$ is a matrix denoted by $\vec{a} \otimes \vec{b}$. It is a matrix formed by taking the product of each component of $\vec{a}$ with each component of $\vec{b}$.

For two vectors $\vec{a} = (a_1, a_2, \ldots, a_n)$ and $\vec{b} = (b_1, b_2, \ldots, b_m)$, the outer product is a matrix of size $n \times m$:

$$\vec{a} \otimes \vec{b} = \begin{bmatrix}
a_1b_1 & a_1b_2 & \cdots & a_1b_m \\
a_2b_1 & a_2b_2 & \cdots & a_2b_m \\
\vdots & \vdots & \ddots & \vdots \\
a_nb_1 & a_nb_2 & \cdots & a_nb_m
\end{bmatrix}$$

Example: Let $\vec{a} = (2, 3)$ and $\vec{b} = (4, 1, 5)$, then:

$$\vec{a} \otimes \vec{b} = \begin{bmatrix}
2 \times 4 & 2 \times 1 & 2 \times 5 \\
3 \times 4 & 3 \times 1 & 3 \times 5
\end{bmatrix} = \begin{bmatrix}
8 & 2 & 10 \\
12 & 3 & 15
\end{bmatrix}$$

These products are widely used in various fields, such as physics, engineering, and linear algebra, and have different applications based on the context.