```python
import pandas as pd
import seaborn as sns
```

```python
df = pd.read_csv('\adult-census.csv')
df.head()
```


```python
df.describe()

y=df.iloc[:,-1]

y.value_counts()

y.hist()
```


```python
sns.pairplot(data=df,height=4,hue='Species')
```