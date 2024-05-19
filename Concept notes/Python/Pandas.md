## sources
[practical data analysis with python](https://wavedatalab.github.io/datawithpython/) 
cheat sheet: [[Pandas_Cheat_Sheet.pdf]]
cheat notes: [[Pandas DataFrame Notes_12pages.pdf]]
## MOC
### 1. **Importing and Exporting Data**
- **CSV**
  - `pd.read_csv(filepath_or_buffer)`
  - `DataFrame.to_csv(filepath_or_buffer)`

- **Excel**
  - `pd.read_excel(io)`
  - `DataFrame.to_excel(excel_writer)`

- **JSON**
  - `pd.read_json(path_or_buf)`
  - `DataFrame.to_json(path_or_buf)`

- **Parquet**
  - `pd.read_parquet(path)`
  - `DataFrame.to_parquet(path)`

- **SQL**
  - `pd.read_sql(query, con)`
  - `DataFrame.to_sql(name, con)`

### 2. **Data Structure Creation**
- **Series**
  - `pd.Series(data)`

- **DataFrame**
  - `pd.DataFrame(data)`

### 3. **Data Inspection and Exploration**
- **Properties**
  - `DataFrame.shape` (number of rows and columns)
  - `DataFrame.columns` (column names)
  - `DataFrame.index` (row labels)
  - `DataFrame.dtypes` (data types of columns)
  - `DataFrame.values` (underlying NumPy array)
  - `DataFrame.info()` (summary information)
  - `DataFrame.describe()` (statistical summary)

- **Methods**
  - `DataFrame.head(n=5)` (first n rows)
  - `DataFrame.tail(n=5)` (last n rows)
  - `DataFrame.sample(n=1)` (random sample)
  - `DataFrame.memory_usage()` (memory usage)

### 4. **Data Selection and Filtering**
- **Selection**
  - `DataFrame.loc[row_label, col_label]` (label-based indexing)
  - `DataFrame.iloc[row_position, col_position]` (position-based indexing)
  - `DataFrame.at[row_label, col_label]` (access single value by label)
  - `DataFrame.iat[row_position, col_position]` (access single value by position)

- **Filtering**
  - `DataFrame.query('condition')`
  - `DataFrame.isin(values)`
  - `DataFrame.notna()` / `DataFrame.notnull()`
  - `DataFrame.isna()` / `DataFrame.isnull()`

### 5. **Data Cleaning and Transformation**
- **Missing Data Handling**
  - `DataFrame.fillna(value)`
  - `DataFrame.dropna(axis, how)`
  - `DataFrame.replace(to_replace, value)`

- **String Operations**
  - `DataFrame.str.contains('pattern')`
  - `DataFrame.str.replace('pattern', 'replacement')`
  - `DataFrame.str.extract('pattern')`

- **Type Conversion**
  - `DataFrame.astype(dtype)`
  - `pd.to_numeric(data)`
  - `pd.to_datetime(data)`

### 6. **Grouping, Aggregation, and Merging**
- **Grouping**
  - `DataFrame.groupby(by)`
  - `DataFrame.resample(rule)`

- **Aggregation**
  - `DataFrame.agg(func)`
  - `DataFrame.apply(func)`
  - `DataFrame.transform(func)`

- **Merging and Joining**
  - `pd.merge(left, right, on, how)`
  - `DataFrame.join(other, on, how)`
  - `pd.concat(objs, axis)`

### 7. **Sorting and Ranking**
- **Sorting**
  - `DataFrame.sort_values(by, ascending=True)`
  - `DataFrame.sort_index(axis, ascending=True)`

- **Ranking**
  - `DataFrame.rank(method, axis)`

### 8. **Pivoting and Reshaping**
- **Pivoting**
  - `DataFrame.pivot(index, columns, values)`
  - `DataFrame.pivot_table(index, columns, values, aggfunc)`

- **Reshaping**
  - `DataFrame.melt(id_vars, value_vars)`
  - `DataFrame.stack()`
  - `DataFrame.unstack()`

### 9. **Time Series**
- **Date Range Generation**
  - `pd.date_range(start, end, freq)`
  - `pd.bdate_range(start, end)`

- **Time Series Operations**
  - `DataFrame.asfreq(freq)`
  - `DataFrame.shift(periods)`
  - `DataFrame.rolling(window)`
  - `DataFrame.ewm(span)`

### 10. **Visualization**
- **Plotting**
  - `DataFrame.plot(kind)`
  - `DataFrame.hist()`
  - `DataFrame.boxplot()`

### 11. **Miscellaneous**
- **Duplicated Rows**
  - `DataFrame.duplicated(keep)`
  - `DataFrame.drop_duplicates(subset, keep)`

- **Applying Functions**
  - `DataFrame.apply(func, axis)`
  - `DataFrame.applymap(func)` (element-wise)
  - `Series.map(func)`

- **Indexing Utilities**
  - `pd.Index(data)`
  - `DataFrame.set_index(keys)`
  - `DataFrame.reset_index(levels, drop)`

- **Categorical Data**
  - `pd.Categorical(data, categories, ordered)`
  - `DataFrame.astype('category')`

- **MultiIndex / Hierarchical Indexing**
  - `pd.MultiIndex.from_arrays(arrays)`
  - `pd.MultiIndex.from_tuples(tuples)`
  - `DataFrame.set_index([columns])`
  - `DataFrame.swaplevel(i, j)`
  - `DataFrame.reorder_levels(order)`

- **Memory Optimization**
  - `pd.to_numeric(data, downcast)`
  - `pd.Categorical(data)` (memory-efficient categoricals)
  - `DataFrame.memory_usage(deep=True)`

### 12. **Properties and Utilities**
- **Properties**
  - `DataFrame.empty` (True if DataFrame is empty)
  - `DataFrame.T` (transpose)
  - `Series.unique()` (unique values in Series)
  - `Series.nunique()` (number of unique values)
  - `DataFrame.ndim` (number of dimensions)
  - `DataFrame.size` (number of elements)

- **Null Checking**
  - `DataFrame.isnull()` / `DataFrame.isna()` (detect missing values)
  - `DataFrame.notnull()` / `DataFrame.notna()` (detect non-missing values)

- **Metadata Utilities**
  - `DataFrame.attrs` (custom properties)
  - `DataFrame.style` (styling for IPython)

### 13. **Advanced Operations**
- **Window Operations**
  - `DataFrame.rolling(window, min_periods)`
  - `DataFrame.expanding(min_periods)`
  - `DataFrame.ewm(span)`

- **Sparse Data Structures**
  - `pd.SparseDataFrame(data)`
  - `pd.SparseSeries(data)`

- **Custom Accessor**
  - `pd.api.extensions.register_dataframe_accessor(name)`

