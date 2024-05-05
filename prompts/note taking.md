#### پرامپت تولید پرامت مناسبت برای تولید نوت های literature zettelkasten 

```copy

Act as a prompt generator for ChatGPT. I will state what I want and you will engineer a prompt that would yield the best and most desirable response from ChatGPT. Each prompt should involve asking ChatGPT to "act as [role]", for example, "act as a lawyer". The prompt should be detailed and comprehensive and should build on what I request to generate the best possible response from ChatGPT. You must consider and apply what makes a good prompt that generates good, contextual responses. Don't just repeat what I request, improve and build upon my request so that the final prompt will yield the best, most useful and favourable response out of ChatGPT. Place any variables in square brackets Here is the prompt I want: 
i want you to generate zettelkasten Literature notes for the specific subject that i want. however i will not give you any sources to take the notes from, instead you should write it based on you knowledge. the notes should be in [language] with a fluent and easy to understand language. the note should start from the very beginning and continue to the professional level.take advantage of markdowns for organizing the note. also for mathematic writings use latex notation. the note should cover, define and discuss about only one subject and other subjects that were mentioned or the relation with the main subject were discussed in the note should not be defined, however at the end of the note you should give me a list of important subjects that are related to our very subject and knowing them is the key to understand our main subject better. for example in a note about bayesian decision theory, don't define the bayes theorem but mention it, use it and at the end of the note mentions it in the list previously talked about.
```

```copy

Act as a prompt generator for ChatGPT. I will state what I want and you will engineer a prompt that would yield the best and most desirable response from ChatGPT. Each prompt should involve asking ChatGPT to "act as [role]", for example, "act as a lawyer". The prompt should be detailed and comprehensive and should build on what I request to generate the best possible response from ChatGPT. You must consider and apply what makes a good prompt that generates good, contextual responses. Don't just repeat what I request, improve and build upon my request so that the final prompt will yield the best, most useful and favourable response out of ChatGPT. Place any variables in square brackets Here is the prompt I want: 
i want you to generate zettelkasten Literature notes for the specific subject that i want. the notes should be in [language] with a fluent and easy to understand language. the note should start from the very beginning and continue to the professional level. take advantage of markdowns for organizing the note. for mathematic writings use latex notation. the note should cover, define and discuss about one and only one subject. the note must be very specific and focused on the main subject. any Prerequisite mentioned or with relation with the main subject if were discussed in the note should not be defined in the note. however there will be a note for each of them so at the end of the note you should give me a list of important Prerequisite that knowing them is the key to understand. don't  include whole subjects like physics, probability etc but mention specific topics. ignore mentioning unuseful informations and avoid writing in the style of a post blog. instead the note should be in the format of a well-written book section. the note length should be just enough and not so long. however if the subject requiered to be a little long, you can send them in parts but avoid over-writing

```

#### پرامپت تولید پرامپت تولید MOC

```copy

now i want another prompt to generate MOC for learning a specific subject. it should write all the topics of the subject in a Hierarchy-tree like or mindmap like manner. the main topics first and then it should be broken down to smaller components, the components should also break into smaller and so on. the breaking down should go on until a reasonable level. you should also take advantage of markdowns. each topic or component should be wrapped in [[]]
```

#### پرامپت تولید zettelkasten literature note
### 1
```copy

Act as an expert researcher and educator in ---- . I want you to generate comprehensive Zettelkasten literature notes on ---- , written in fluent and easy-to-understand English.

Start the notes from a beginner level and progressively advance to a professional level, ensuring a logical flow and coherence throughout. Utilize markdown formatting to organize the notes effectively, and employ LaTeX format for any mathematical expressions.

Focus the notes on defining, discussing, and covering only the main subject. i don't need applications, introduction, etc. i want the note to be as professional as possible as if written by a full professor. If you mention related subjects or discuss their relationship to the main topic, do not define them in detail. However, when all the notes are sent, provide two lists:

1. A list of important subjects mentioned in the notes that are crucial for a better understanding of the main subject. name it the 'prerequisite list'.

2. A list of related important topics that were not used in the notes but for which the main subject serves as a fundamental or key concept to understand those subjects. This will help me build a tree of knowledge. name it 'related topics list'.

For example, if the main subject is Bayesian decision theory, you should mention and use Bayes' theorem in the notes without defining it, and then include it in the first list of related subjects at the end. In the second list, include topics such as machine learning or classification, as Bayesian decision theory is a fundamental concept in these fields. please generate the related topics list and prerequisite list more in details and subject-based rather than field base

Aim to create notes that are informative, engaging, and accessible to readers with varying levels of expertise in ---- . The final product should serve as a valuable resource for anyone seeking to learn about or deepen their understanding of the subject while ensuring the information is reliable and well-sourced. i want the skeletun of the note to be like a book not like and llm generated text. if you think the note is gonna be long, you can send them in 10 parts, more or less. but keep the numbering and content uniform. first tell me how many parts it will be and then send me the first part. then i will ask for the later parts. use the following as the toc to take idea from:
 
```

### 2
``` copy

Act as a subject matter expert tasked with creating a comprehensive Zettelkasten literature note on --- for university students. The note should be written in english using clear, academic language that progresses from beginner to advanced level. Utilize markdown formatting to organize the content, and LaTeX notation for any mathematical formulas.

The note must focus solely and deeply on the main subject, defining and discussing it in depth. Avoid tangents, broad overviews, or digressions into related branches. Instead, write the note in the style of a well-written, concise book section that covers the key aspects of the subject at an appropriate level of detail for university students.
Include relevant examples, illustrations, or analogies to clarify complex concepts and make the note more engaging. These should be carefully chosen to illuminate the main subject without leading the reader astray.
For mathematical subjects, use well-known symbols and notation for each concept to maintain consistency and clarity.

If the subject requires a longer treatment, break the note into parts. First, inform me of the total number of parts the note will be divided into. Then, send the first part of the note. I will ask for the subsequent parts as needed. Be mindful to keep the length of each part reasonable and avoid overwriting. The goal is a focused, insightful examination of the subject that connects key ideas, not an exhaustive treatise.

At the end of the final note, provide a list of important prerequisite topics that are essential for understanding the main subject. Focus on specific key topics rather than broad subjects.

Use consistent heading levels (e.g., # for main headings, ## for subheadings) to create a clear hierarchy of information.
Use bullet points or numbered lists to break down complex ideas or processes into more manageable chunks. Incorporate blockquotes or callout boxes to highlight important definitions, formulas, or key concepts.
The note should serve as a self-contained resource that helps students construct a knowledge network around the main subject. Maintain a tight focus on the subject itself, delving deep into its essential aspects without getting lost in peripheral details.
```

#### پرامپت تولید MOC


```copy

Act as an expert educator creating a detailed table of contents for learning ----. Begin by listing the main topics of ---- in a hierarchical structure, similar to a mind map. Break down each main topic into smaller components, and continue breaking down the components into even smaller sub-components until a reasonable level of detail is reached. Use markdown formatting to clearly organize the hierarchy, wrapping each topic or component in [[double square brackets]].

The table of contents should cover everything from beginner to advanced levels, ensuring a complete learning path from 0 to 100. Keep in mind that I will be creating individual notes for each section of the table of contents, focusing on discussing one subject per note and connecting related subjects across notes. Each note will serve as a single, independent node in my knowledge network, with connections between them helping to perfect the network.

When creating the table of contents, consider the following prompt I will use to generate the actual notes:

"The notes should progress from a beginner level to a professional level, ensuring a logical flow and coherence throughout. Utilize markdown formatting to organize the notes effectively, and employ LaTeX notation for any mathematical expressions. Additionally, place a star (⭐) in front of the most important or fundamental subjects that learners should focus on.

Focus the notes on defining, discussing, and covering only the main subject. If you mention related subjects or discuss their relationship to the main topic, do not define them in detail. However, at the end of the notes, provide two lists:

1. A list of important subjects mentioned in the notes that are crucial for a better understanding of the main subject.
2. A list of related important topics that were not used in the notes but for which the main subject serves as a fundamental or key concept to understand those subjects. This will help me build a tree of knowledge."

Design the table of contents in a way that aligns with this note-taking approach, ensuring a smooth transition from the table of contents to the individual notes. The final table of contents should be comprehensive, well-structured, and suitable for learning the subject from the ground up.use the following as the toc to take idea from:
```