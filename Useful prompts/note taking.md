#### پرامپت تولید پرامت مناسبت برای تولید نوت های literature zettelkasten 

```copy

Act as a prompt generator for ChatGPT. I will state what I want and you will engineer a prompt that would yield the best and most desirable response from ChatGPT. Each prompt should involve asking ChatGPT to "act as [role]", for example, "act as a lawyer". The prompt should be detailed and comprehensive and should build on what I request to generate the best possible response from ChatGPT. You must consider and apply what makes a good prompt that generates good, contextual responses. Don't just repeat what I request, improve and build upon my request so that the final prompt will yield the best, most useful and favourable response out of ChatGPT. Place any variables in square brackets Here is the prompt I want: i want you to generate zettelkasten Literature notes for the specific subject that i want. however i will not give you any sources to take the notes from, instead you should write it based on you knowledge. the notes should be in [language] with a fluent and easy to understand language. the note should start from the very beginning and continue to the professional level.take advantage of markdowns for organizing the note. also for mathematic writings use latex notation. the note should cover, define and discuss about only one subject and other subjects that were mentioned or the relation with the main subject were discussed in the note should not be defined, however at the end of the note you should give me a list of important subjects that are related to our very subject and knowing them is the key to understand our main subject better. for example in a note about bayesian decision theory, don't define the bayes theorem but mention it, use it and at the end of the note mentions it in the list previously talked about.
```


#### پرامپت تولید پرامپت تولید MOC

```copy

now i want another prompt to generate MOC for learning a specific subject. it should write all the topics of the subject in a Hierarchy-tree like or mindmap like manner. the main topics first and then it should be broken down to smaller components, the components should also break into smaller and so on. the breaking down should go on until a reasonable level. you should also take advantage of markdowns. each topic or component should be wrapped in [[]]
```

#### پرامپت تولید zettelkasten literature note

```copy

Act as an expert researcher and educator in [subject]. I want you to generate comprehensive Zettelkasten literature notes on [subject], written in fluent and easy-to-understand [language]. Rather than relying on your own knowledge, base the notes on the content of the most reliable and authoritative sources available to ensure accuracy and avoid misinformation. Please cite these sources within the notes using markdown formatting.

Start the notes from a beginner level and progressively advance to a professional level, ensuring a logical flow and coherence throughout. Utilize markdown formatting to organize the notes effectively, and employ LaTeX notation for any mathematical expressions.

Focus the notes on defining, discussing, and covering only the main [subject]. If you mention related subjects or discuss their relationship to the main topic, do not define them in detail. However, at the end of the notes, provide two lists:

1. A list of important subjects mentioned in the notes that are crucial for a better understanding of the main [subject].

2. A list of related important topics that were not used in the notes but for which the main [subject] serves as a fundamental or key concept to understand those subjects. This will help me build a tree of knowledge.

For example, if the main subject is Bayesian decision theory, you should mention and use Bayes' theorem in the notes without defining it, and then include it in the first list of related subjects at the end. In the second list, include topics such as machine learning or classification, as Bayesian decision theory is a fundamental concept in these fields.

Aim to create notes that are informative, engaging, and accessible to readers with varying levels of expertise in [subject]. The final product should serve as a valuable resource for anyone seeking to learn about or deepen their understanding of [subject] while ensuring the information is reliable and well-sourced.
```


#### پرامپت تولید MOC

```copy

Act as an expert in [subject] and create a comprehensive Map of Content (MOC) to guide learners through the subject. Break down the subject into its main topics and subtopics, organizing them in a hierarchical tree-like or mind map-like structure.

Start with the main overarching topics, then break each topic down into smaller components. Continue breaking down the components into even smaller parts until you reach a beginner level detail that is a most for learning the subject.

Use markdown formatting to create a visually clear and easily navigable structure. Wrap each topic or component in double square brackets [[like this]] to make them stand out and easy to identify.

For example, if the subject is "Machine Learning," the MOC might start like this:

- [[Machine Learning]]
  - [[Supervised Learning]]
    - [[Regression]]
      - [[Linear Regression]]
      - [[Polynomial Regression]]
      - [[Logistic Regression]]
    - [[Classification]]
      - [[Decision Trees]]
      - [[Random Forests]]
      - [[Support Vector Machines (SVM)]]
      - [[Naive Bayes]]
  - [[Unsupervised Learning]]
    - [[Clustering]]
      - [[K-Means]]
      - [[Hierarchical Clustering]]
    - [[Dimensionality Reduction]]
      - [[Principal Component Analysis (PCA)]]
      - [[t-SNE]]
  - ...

Continue breaking down the topics until you have covered all the important aspects of [subject] in a clear, organized manner. The final MOC should provide learners with a comprehensive overview of the subject and serve as a roadmap for their learning journey.
```