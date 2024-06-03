# preprocessing
## categorical features
- In general `OneHotEncoder` is the encoding strategy used when the downstream models are **linear models** while `OrdinalEncoder` is often a good strategy with **tree-based models**
- You can still use an `OrdinalEncoder` with linear models but you need to be
sure that:	the original categories (before encoding) have an ordering; & the encoded categories follow the same ordering than the original categories.

- <div class="admonition important alert alert-info">
<p class="first admonition-title" style="font-weight: bold;">Important</p>
<p>Which encoder should I use?</p>
<table border="1" class="docutils">
<thead valign="bottom">
<tr><th class="head"></th>
<th class="head">Meaningful order</th>
<th class="head">Non-meaningful order</th>
</tr>
</thead>
<tbody valign="top">
<tr><td>Tree-based model</td>
<td><tt class="docutils literal">OrdinalEncoder</tt></td>
<td><tt class="docutils literal">OrdinalEncoder</tt></td>
</tr>
<tr><td>Linear model</td>
<td><tt class="docutils literal">OrdinalEncoder</tt> with caution</td>
<td><tt class="docutils literal">OneHotEncoder</tt></td>
</tr>
</tbody>
</table>
<ul class="last simple">
<li><tt class="docutils literal">OneHotEncoder</tt>: always does something meaningful, but can be unnecessary
slow with trees.</li>
<li><tt class="docutils literal">OrdinalEncoder</tt>: can be detrimental for linear models unless your category
has a meaningful order and you make sure that <tt class="docutils literal">OrdinalEncoder</tt> respects this
order. Trees can deal with <tt class="docutils literal">OrdinalEncoder</tt> fine as long as they are deep
enough.</li>
</ul>
</div>




# model selection
- We can observe that we get significantly higher accuracies with the Gradient Boosting model than logistic regression. This is often what we observe whenever the dataset has a large number of samples and limited number of informative features (e.g. less than 1000) with a mix of numerical and categorical variables.


'

