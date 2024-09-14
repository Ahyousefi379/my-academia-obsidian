```copy
  
Act as a prompt generator for ChatGPT. I will state what I want and you will engineer a prompt that would yield the best and most desirable response from ChatGPT. Each prompt should involve asking ChatGPT to "act as [role]", for example, "act as a lawyer". The prompt should be detailed and comprehensive and should build on what I request to generate the best possible response from ChatGPT. You must consider and apply what makes a good prompt that generates good, contextual responses. Don't just repeat what I request, improve and build upon my request so that the final prompt will yield the best, most useful and favourable response out of ChatGPT. Place any variables in square brackets. Here is the prompt I want: [Desired prompt]
```
## [What is prompt engineering?](https://www.digitalocean.com/resources/articles/prompt-engineering-best-practices#what-is-prompt-engineering)[](https://www.digitalocean.com/resources/articles/prompt-engineering-best-practices#what-is-prompt-engineering)

Prompt engineering is the craft of designing and refining inputs (prompts) to elicit the desired output from AI language models. It requires a blend of creativity, understanding of the model’s capabilities, and strategic structuring of the question or statement to guide the AI towards providing accurate, relevant, and useful responses. Prompt engineering improves communication between humans and machines, ensuring the resulting interaction is efficient and effective.

## [Why is prompt engineering important?](https://www.digitalocean.com/resources/articles/prompt-engineering-best-practices#why-is-prompt-engineering-important)[](https://www.digitalocean.com/resources/articles/prompt-engineering-best-practices#why-is-prompt-engineering-important)

Prompt engineering is crucial because it influences the performance and utility of AI language models. The quality of the input determines the relevance and accuracy of the AI’s response, making prompt engineering a pivotal skill for anyone looking to harness the full potential of these powerful tools. Prompt engineering is not only for prompt engineers. By effectively communicating with AI, anyone can unlock insights, generate ideas, and solve problems more efficiently.

Here are several reasons why prompt engineering is important:

- **Improves accuracy**: Well-crafted prompts lead to more precise answers, reducing the likelihood of misinterpretation or irrelevant responses from the AI.
    
- **Saves time**: Prompt engineering streamlines interactions with the AI by getting the desired information in fewer attempts, saving valuable time for users.
    
- **Facilitates complex tasks**: Complex tasks require complex understanding; good prompts translate intricate questions into a form that AI can process effectively.
    
- **Improves user experience**: A user’s experience with an AI system can greatly improve when the prompts lead to clear, concise, and contextually appropriate answers.
    
- **Enables better outcomes**: In areas such as coding, content creation, and data analysis, well-engineered prompts can lead to higher-quality outcomes by leveraging AI’s capabilities to the fullest.
    
- **Drives innovation**: As we better understand how to communicate with AI, we can push the boundaries of what’s possible, leading to innovative applications and solutions.
    



Crafting effective prompts for AI can improve the quality and relevance of the responses you receive. This expertise requires a nuanced understanding of how AI interprets and processes natural language inputs. Ahead, we explore ten AI prompt engineering best practices to help you communicate with AI more effectively:

### [1. Be as specific as possible](https://www.digitalocean.com/resources/articles/prompt-engineering-best-practices#1-be-as-specific-as-possible)[](https://www.digitalocean.com/resources/articles/prompt-engineering-best-practices#1-be-as-specific-as-possible)

Specificity is key to obtaining the most accurate and relevant information from an AI when writing prompts. A specific prompt minimizes ambiguity, allowing the AI to understand the request’s context and nuance, preventing it from providing overly broad or unrelated responses. To achieve this, include as many relevant details as possible without overloading the AI with superfluous information. This balance ensures that the AI has just enough guidance to produce the specific outcome you’re aiming for.

When creating the best prompts for an AI, ask for the following specifics:

- **Detailed context**: Provide the AI with enough background information to understand the scenario you’re inquiring about. This includes the subject matter, scope, and any relevant constraints.
    
- **Desired format**: Clearly specify the format in which you want the information to be presented, whether it’s a list, a detailed report, bullet points, or a summary. Mention any structural preferences, such as headings, subheadings, or paragraph limits.
    
- **Output length**: Detail how long you want the AI’s response, whether “3 paragraphs” or “250 words.”
    
- **Level of detail**: Indicate the level of detail required for the response, from high-level overviews to in-depth analysis, to ensure the model’s output matches your informational needs.
    
- **Tone and style**: Request the preferred tone and style, whether it’s formal, conversational, persuasive, or informational, to make sure the output aligns with your intended audience or purpose.
    
- **Examples and comparisons**: Ask the AI to include examples, analogies, or comparisons to clarify complex concepts or make the information more relatable and easily understood.
    

**💡 Prompt Example:**

Please provide an outline for a comprehensive report that analyzes the current trends in social media marketing for technology companies, focusing on the developments from 2020 onward.

The outline should include an introduction, three main sections addressing different aspects of social media trends, and a conclusion summarizing the findings. Please suggest the types of graphs that could illustrate user engagement trends and list bullet points that summarize key marketing strategies in each section.

### [2. Supply the AI with examples](https://www.digitalocean.com/resources/articles/prompt-engineering-best-practices#2-supply-the-ai-with-examples)[](https://www.digitalocean.com/resources/articles/prompt-engineering-best-practices#2-supply-the-ai-with-examples)

Incorporating examples into your prompts is a powerful technique to steer the AI’s responses in the desired direction. By providing examples as you write prompts, you set a precedent for the type of information or response you expect. This practice is particularly useful for complex tasks where the desired output might be ambiguous or for creative tasks with more than one correct answer.

When you supply the AI with examples, ensure they represent the quality and style of your desired result. This strategy clarifies your expectations and helps the AI model its responses after the examples provided, leading to more accurate and tailored outputs.

Here are some example types you could provide to an AI to help guide it toward generating the best response possible:

- **Sample texts**: Share excerpts reflecting the style, tone, and content you want the AI to replicate.
    
- **Data formats**: To guide the AI’s output, provide specific data structures, such as table layouts or spreadsheet formats.
    
- **Templates for documents**: Offer templates to ensure the AI’s response follows a desired structure and format.
    
- **Code snippets**: Provide code examples if you need help with programming tasks to ensure correct syntax and logic.
    
- **Graphs and charts examples**: If you’re asking the AI to create similar graphics, share samples of visual data representation.
    
- **Marketing copy**: If you’re crafting marketing content, present ad copy that aligns with your brand’s voice for the AI to mimic.
    

**💡 Prompt Example:**

Create a comparison table for two project management tools, Tool A and Tool B.

Include the following categories: Price, Key Features, User Reviews, and Support Options. For instance, under Key Features, list things like ‘Task Assignment’, ‘Time Tracking’, and ‘File Sharing’.

The format should mirror something like this:

| Feature | Tool A | Tool B |

|--------|-------|-------|

| Price | $X per user/month | $Y per user/month |

| Key Features | Task Assignment | File Sharing |

| User Reviews | X stars | Y stars |

| Support Options | 24/7 Live Chat, Email | Business Hours Phone, Email |

Please ensure the table is concise and suitable for inclusion in a business report.

### [3. Get better answers by providing data](https://www.digitalocean.com/resources/articles/prompt-engineering-best-practices#3-get-better-answers-by-providing-data)[](https://www.digitalocean.com/resources/articles/prompt-engineering-best-practices#3-get-better-answers-by-providing-data)

Incorporating specific and relevant data into your prompts significantly enhances the quality of AI-generated responses, providing a solid foundation for the AI to understand the context and craft precise answers. Providing data that includes numerical values, dates, or categories, organized in a clear and structured way, allows for detailed analysis and decision-making. It’s essential to give context to the data and, when possible, to cite its source, lending credibility and clarity to the specific task, whether for quantitative analysis or comparisons.

To ensure the AI delivers the most relevant and insightful answers, always use updated and well-organized information, and if comparisons are needed, establish clear parameters. Supplying the AI with concrete, contextualized data transforms raw figures into intelligible and actionable insights. Data-driven prompts are particularly valuable in tasks requiring a deep dive into numbers, trends, or patterns, enabling the AI to generate outputs that can effectively inform business strategies or research conclusions.

**💡 Prompt Example:**

Please analyze the sales data from the first quarter of 2024 provided in the attached PDF document. I need a summary that identifies our best-selling product, the overall sales trend, and any notable patterns in customer purchases.

The PDF contains detailed monthly sales units for three products: Product A, Product B, and Product C. After reviewing the data, summarize your findings in a concise paragraph that is suitable for a business meeting. Highlight significant increases or decreases in sales and offer insights into potential factors driving these trends.

### [4. Specify your desired output](https://www.digitalocean.com/resources/articles/prompt-engineering-best-practices#4-specify-your-desired-output)[](https://www.digitalocean.com/resources/articles/prompt-engineering-best-practices#4-specify-your-desired-output)

When engaging with AI, articulate the precise format and structure you expect in the response. Specify whether you require a detailed report, a summary, bullet points, or a narrative form to ensure the AI tailors its output to your needs.

Indicate any preferences such as tone, style, and the inclusion of certain elements like headings or subheadings. By clearly defining your desired output, you guide the AI to deliver information that aligns seamlessly with your intended use.

**💡 Prompt Example:**

Create a comprehensive overview of the key milestones in the history of software development. The output should be structured as a timeline with bullet points, each bullet including the year, the milestone event, and a brief description of its significance. Start from the 1980s. The tone should be educational. Please limit the overview to ten major milestones to maintain conciseness.

### [5. Provide instructions on what to do instead of what _not_ to do](https://www.digitalocean.com/resources/articles/prompt-engineering-best-practices#5-provide-instructions-on-what-to-do-instead-of-what-_not_-to-do)[](https://www.digitalocean.com/resources/articles/prompt-engineering-best-practices#5-provide-instructions-on-what-to-do-instead-of-what-_not_-to-do)

When constructing prompts for AI, it’s more effective to direct the system toward the desired action rather than detailing what it should avoid. This positive instruction approach reduces ambiguity and focuses the AI’s processing power on generating constructive outcomes.

Negative instructions often require the AI to interpret and invert them, increasing the cognitive load and potential for misunderstanding. By clearly stating the intended actions, you enable the AI to apply its capabilities directly to fulfilling the task at hand, improving the efficiency and accuracy of the response.

**💡 Prompt Examples:**

- Avoid: "Don’t write too much detail. → Use Instead: “Please provide a concise summary.”
    
- Avoid: “Avoid using technical jargon.” → Use Instead: “Use clear and simple language accessible to a general audience.”
    
- Avoid: “Don’t give examples from before the year 2000.” → Use Instead: “Provide examples from the year 2000 onwards.”
    

### [6. Give the model a persona or frame of reference](https://www.digitalocean.com/resources/articles/prompt-engineering-best-practices#6-give-the-model-a-persona-or-frame-of-reference)[](https://www.digitalocean.com/resources/articles/prompt-engineering-best-practices#6-give-the-model-a-persona-or-frame-of-reference)

Assigning a persona or a specific frame of reference to an AI model can significantly enhance the relevance and precision of its output. By doing so, you get more relevant responses, aligned with a particular perspective or expertise, ensuring that the information provided meets the unique requirements of your query.

This approach is especially beneficial in business contexts where domain-specific knowledge is pivotal, as it guides the AI to utilize a tone and terminology appropriate for the given scenario. The persona also helps set the right expectations and can make interactions with the AI more relatable and engaging for the end user.

**💡 Prompt Example:**

Imagine you are a seasoned marketing consultant. Please draft an email to a new startup client outlining three digital marketing strategies tailored for their upcoming product launch (see attached PDF for details).

Include key performance indicators (KPIs) for each strategy that will help track their campaign’s success. Ensure the tone is encouraging and professional, imparting confidence in your expertise.

### [7. Try chain of thought prompting](https://www.digitalocean.com/resources/articles/prompt-engineering-best-practices#7-try-chain-of-thought-prompting)[](https://www.digitalocean.com/resources/articles/prompt-engineering-best-practices#7-try-chain-of-thought-prompting)

Chain of thought prompting is a technique that elicits a more deliberate and explanatory response from an AI by specifically asking it to detail the reasoning behind its answer. By prompting the AI to articulate the steps it takes to reach a conclusion, users can better understand the logic employed and the reliability of the response.

This approach is particularly useful when tackling complex problems or when the reasoning process itself is as important as the answer. It ensures a deeper level of problem-solving and provides a learning opportunity for the user to see a modeled approach to reasoning.

**💡 Prompt Example:**

Imagine you are a software engineer tasked with optimizing this piece of software for performance:

[Insert code block]

Use the following chain of thought to guide your approach:

- Performance profiling: Start with how you would profile the software to identify current performance bottlenecks.
    
- Optimization techniques: Discuss the specific techniques you would consider to address the identified bottlenecks, such as algorithm optimization, code refactoring, or hardware acceleration.
    
- Testing and validation: Describe your method for testing the optimized software to ensure that the changes have had the desired effect and have not introduced new issues.
    
- Implementation strategy: Finally, outline how you would safely implement the optimized code into the production environment, ensuring minimal disruption.
    

Conclude with a summary of the key steps in the optimization process and how you would document and maintain the improvements over time.

### [8. Split complex tasks into simpler ones](https://www.digitalocean.com/resources/articles/prompt-engineering-best-practices#8-split-complex-tasks-into-simpler-ones)[](https://www.digitalocean.com/resources/articles/prompt-engineering-best-practices#8-split-complex-tasks-into-simpler-ones)

When dealing with complex tasks, breaking them into simpler, more manageable components can make them more approachable for an AI. Using step by step instructions helps prevent the AI from becoming overwhelmed and ensures that each part of the task is handled with attention to detail.

Additionally, this approach allows for easier monitoring and adjustment of each step, facilitating better quality control throughout the process. By compartmentalizing tasks, the AI can also use its resources more efficiently, allocating the necessary attention where it’s most needed, resulting in a more effective problem-solving strategy.

**💡 Prompt Example:**

Avoid a single broad prompt:

- “Write a 1500-word article on the impact of AI on remote work.”

Try an initial prompt and follow-up prompts instead:

- “Develop a detailed outline for a 1500-word article titled ‘Revolutionizing Remote Work: The Role of AI for Tech Professionals.’ The outline should include an engaging introduction, three main sections titled ‘Enhancing Productivity with AI Tools,’ ‘AI-Driven Communication Optimization,’ and ‘Advanced Project Management through AI,’ plus a conclusion that offers a perspective on future developments.”
    
- “Compose a detailed introduction for the article ‘Revolutionizing Remote Work: The Role of AI for Tech Professionals.’ The introduction should be 150-200 words, setting the stage for how AI is changing the game for remote workers in the tech industry, and providing a hook that will entice tech professionals to continue reading.”
    

### [9. Understand the model’s shortcomings](https://www.digitalocean.com/resources/articles/prompt-engineering-best-practices#9-understand-the-model-s-shortcomings)[](https://www.digitalocean.com/resources/articles/prompt-engineering-best-practices#9-understand-the-model-s-shortcomings)

In crafting prompts for an AI, recognize the model’s limitations to set realistic expectations. Prompting AI to perform tasks it’s not designed for, such as interacting with external databases or providing real-time updates, will lead to ineffective and potentially misleading outputs called [AI hallucinations](https://www.digitalocean.com/resources/article/ai-hallucination).

Here are some known shortcomings of AI models:

- Lack of real-time data processing, as the knowledge is up-to-date only until the last training cut-off.
    
- Inability to access or retrieve personal data unless it has been shared during the interaction.
    
- No direct interaction with external software, databases, or live web content.
    
- Potential bias in the data, as AI models can inadvertently learn and replicate biases present in their training data.
    
- Limited understanding of context can lead to less nuanced responses in complex or ambiguous situations.
    
- The absence of personal experiences or emotions means the AI cannot form genuine, empathetic connections or offer personal anecdotes.