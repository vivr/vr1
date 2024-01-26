---
title: Machine Learning Basics
pageId: machinelearning
eleventyNavigation:
  key: Machine Learning Basics
---

### What is Machine Learning?

Machine learning (ML) is a field of artificial intelligence that empowers computers to learn and improve from experience without being explicitly programmed. It involves the development of algorithms and models that enable machines to recognise patterns, make predictions, or make decisions based on data. The core idea is to create systems that can adapt and evolve, learning from examples and refining their performance over time. In ML, computers are trained on data to identify underlying patterns or relationships, allowing them to generalise and make accurate predictions on new, unseen data. The applications of machine learning are diverse, ranging from image and speech recognition to recommendation systems, autonomous vehicles, and medical diagnosis.

### ML Examples

<dl>
<dt>Fraud detection</dt>
<dd>ML algorithms quickly assess your credit card transactions for potential fraud. They analyse details like time, location, and amount to predict if a purchase aligns with your past behavior. User feedback on fraudulent transactions helps the system improve future predictions.</dd>
<dt>Search Systems</dt>
<dd>ML algorithms power commercial search engines from the moment you start typing a query. Some algorithms predict and auto-complete your search, while others determine webpage ranking. Data on your interactions, such as clicked pages, enhances the effectiveness of future searches.</dd>
<dt>Recommendation Systems</dt>
<dd>Movie recommendation sites use ML to understand your preferences based on reviews and site interactions. By learning your taste, these algorithms aim to provide engaging choices and encourage continued site engagement or movie purchases.</dd>
<dt>Speech and Image Recognition</dt>
<dd>This technology is now essential in smartphones and home devices for voice commands. Medical applications include cancer cell classification and personalised treatment recommendations. In autonomous vehicles, real-time image recognition and video processing, along with reinforcement learning, play a crucial role.</dd>
</dl>

### ML Problems

ML tasks, such as credit card fraud detection or speech recognition, can be broadly classified into two categories: _Supervised Learning_ and _Unsupervised Learning_.

<dl>
<dt>Supervised Learning</dt>
<dd>In supervised learning, the goal is to predict an output associated with each input, like categorising a credit card transaction or recognising English words in a speech signal. Supervised learning relies on a training set with labelled objects for predictions, and obtaining these labels involves explicit and implicit sources. Explicit labels are often provided by human judges, either through easy or difficult labeling tasks and crowdsourcing platforms like Amazon's Mechanical Turk connect customers with ML tasks to workers offering human intelligence. Implicit labels, on the other hand, are inferred from user interactions, such as search engine clicks, providing a kind of implicit label for a page's relevance.

- **Classification Problem:** This involves predicting categories and the learned function is called a classifier. In a simple supervised learning classification example, we want to predict whether a fruit is an apple or a banana based on features like colour and shape. Using a dataset with labelled examples of fruits and their characteristics, such as red and round for apples or yellow and long for bananas, we train a classifier. The model learns the patterns in the data, and once trained, it can predict the label (apple or banana) for new, unseen fruits. For instance, if we input a red and round fruit, the classifier might predict it to be an apple.

- **Regression Problem:** In cases where the goal is to predict real values it becomes a regression problem and the learned function is termed a regression function. Consider a scenario where we want to predict the selling price of houses based on their square footage. In this regression problem, the input data (X) would be the square footage of various houses, and the output (Y) would be the corresponding selling prices. The goal is to learn a regression function that can accurately predict the selling price of a house given its square footage. For instance, if we have a new house with a certain square footage, the regression model would provide an estimate of its likely selling price based on the patterns learned from the training data. The regression function would capture the relationship between square footage and selling price, allowing us to make predictions for houses not in the original dataset.

</dd>
<dt>Unsupervised Learning</dt>
<dd>

In many cases we only have input data, we don't have any labels to go with the data. In those cases the problems we can solve involve taking the input data and trying to find some kind of useful structure in it. Typically this means finding interesting clusters or groups within the data. Once we discover ths structure in the form of clusters, groups or other interesting subsets, the structure can be used for tasks like producing a useful summary of the input data. For example, in e-commerce, understanding different customer types allows tailoring the site's offerings for a better user experience. Unsupervised learning tackles problems without predefined labels, making it ideal for scenarios where the number and characteristics of groups are unknown.

- **Clustering:** Involves grouping similar data points together. An example is segmenting customers based on their purchase behavior.

- **Anomaly detection:** involves identifying data points that significantly differ from the overall pattern of the majority of the dataset, useful for spotting errors or unusual events in various domains.

- **Dimensionality reduction:** trims down the number of input features in a dataset while maintaining key information. This process simplifies data for easier analysis and visualisation. Techniques like Principal Component Analysis (PCA) are commonly used to identify and retain essential features that capture the most variance in the data. The reduced-dimensional representation aids in exploratory data analysis, noise reduction, and enhances computational efficiency, making it a valuable step in preprocessing before applying ML algorithms.

</dd>
</dl>

### Basic ML Workflow

1. **Data Representation:** Define how your data (e.g., images, transactions) is presented to the computer (e.g., pixels, time/location/amount). The problem of trying to figure out how to represent an object for a ML algorithm is a challenge and it's known as feature engineering or feature extraction.

2. **Classifier:** Select an appropriate learning algorithm (e.g., classifier) based on your data type and problem type (e.g., fraud detection).

3. **Evaluation Method:** Choose a method to measure the accuracy of your algorithm's predictions (e.g., classification accuracy). This allows comparison and selection of the best performing algorithm for your specific problem.

4. **Optimisation:** Search for the optimal configuration (e.g., hyperparameter values) that yields the best performance. Hyperparameter values are external configuration settings that are set before the training process Examples include learning rates, regularisation strengths, and tree depths. Proper tuning of hyperparameters is crucial for optimising model performance.

Addressing a ML task is often a cyclic process. It begins with an initial guess about suitable features and an appropriate classifier. We then train the system, evaluate its performance, and conduct a failure analysis based on correct and incorrect classifications. Using the results, we refine the feature set, addressing potential mistakes and identifying missing important features. This iterative approach is common in ML problem-solving. Repeating the cycle several times allows continual refinement of features and assessment of their impact on accuracy. Experimenting with different classifiers, based on the chosen evaluation method, helps determine the most effective approach for the problem at hand.

### Advanced Learning Algorithms

<dl>
<dt>Neural Networks</dt>
<dd>
Neural networks, also known as deep learning algorithms,  are a type of computer program inspired by the way our brains work. They're designed to learn from examples and get better at tasks over time. Imagine teaching a computer to recognise objects in photos. Instead of giving it explicit instructions, you show it lots of pictures and tell it what's in each one. Multiple layers of interconnected nodes in these algorithms allow them to understand intricate patterns and connections in this data. Neural networks are particularly powerful for tasks like image recognition, language understanding, and making sense of complex patterns in data.

- **Neural Network Intuition:** Imagine a neural network as a system that learns how different factors (features) contribute to variations in demand. Each "neuron" in the network corresponds to a specific aspect or feature related to demand, such as historical sales, marketing efforts, seasonality, or economic factors.

  During training, the neural network analyses historical demand data, adjusting the "weights" assigned to each feature to understand their impact on overall demand. The network learns to capture intricate relationships and dependencies among these features, allowing it to make predictions for future demand based on new input data.

  The intuition is akin to how a human might understand demand by considering various influencing factors—except a neural network processes these factors in a highly parallel and mathematical way. It excels at capturing non-linear relationships and adapting to changing patterns over time, making it a powerful tool for demand prediction tasks. As the neural network refines its understanding through training, it becomes more adept at forecasting demand accurately, making it valuable for applications in supply chain management, inventory optimisation, and business planning.

- **Inference:** is the process where a trained neural network applies its learned knowledge to make predictions or decisions based on new, unseen data. It's like using what the network has learned from previous examples to provide answers or insights for new inputs. For instance, if the neural network was trained to recognise cats and dogs, the inference phase involves feeding it a new image, and the network would use its learned knowledge to determine whether the image contains a cat or a dog.

</dd>

<dt>Decision Trees</dt>
<dd>
A decision tree is like a flowchart that helps make decisions. Imagine you have a question, and you answer it step by step, each time with more specific details. A decision tree does something similar. It takes information about something and makes a series of decisions based on that information until it reaches a conclusion. Each decision is like a branch in the tree, leading to more decisions or a final answer. Decision trees are commonly used in ML to help computers make choices or predictions by following a structured set of rules.
</dd>
</dl>

### Python Tools for ML

Important Python libraries that are used for ML include [scikit-learn](https://scikit-learn.org/stable/index.html), [SciPy](https://scipy.org/), [NumPy](https://numpy.org/), [Pandas](https://pandas.pydata.org/), and [matplotlib](https://matplotlib.org/). These can all be installed using the [Anaconda Python distribution](https://www.anaconda.com/download) or you can use the [pip package installer](https://pip.pypa.io/en/stable/).

<dl>
<dt>scikit-learn</dt>
<dd>Scikit-learn is a popular tool in Python for ML. It helps with various ML tasks and has lots of examples, guides, and code you can find online. Useful references include <a href="https://scikit-learn.org/stable/user_guide.html">the scikit-learn user guide</a> and <a href="https://scikit-learn.org/stable/modules/classes.html">the scikit-learn API documentation</a>.
</dd>

<dt>SciPy</dt>
<dd>SciPy is a Python library that supports data manipulation and analysis methods that are commonly used in scientific computing. This includes support for statistical distributions, optimisation of functions, linear algebra and a variety of specialised mathematical functions. SciPy also provides support for sparce matrices. Sparse matrices are a way to efficiently represent and work with matrices that have a lot of zero values. Instead of storing every element in the matrix, which can be memory-intensive for matrices with many zeros, sparse matrices store only the non-zero elements and their positions. SciPy provides different types of sparse matrix representations, each suited for specific use cases, such as CSR (Compressed Sparse Row) or CSC (Compressed Sparse Column). These representations are particularly useful in various scientific and computational applications, such as natural language processing, image processing, and numerical simulations.
</dd>

<dt>NumPy</dt>
<dd>NumPy is a Python library that contains support for some fundamental data structures used by scikit-learn such as multi-dimentional arrays. Typically data that's input to scikit-learn will be in the form of a NumPy array.</dd>

<dt>Pandas</dt>
<dd>Pandas is a Python library for data manipulation and analysis. The key data structure Pandas supports is called DataFrame. A DataFrame is a two-dimensional, tabular data structure with labeled axes (rows and columns). The DataFrame allows you to store and manipulate mixed data types, making it a powerful tool for working with structured data. You can easily perform operations like filtering, grouping, and reshaping your data. Pandas also handles missing data well, making it convenient for cleaning up datasets.</dd>

<dt>matplotlib</dt>
<dd>matplotlib and other plotting libraries produce high quality figures in a variety of formats and interactive enviornments across platforms. matplotlib can be used in Python scripts, iPython shell, web application servers and a variety of different graphical user interface toolkits. matplotlib.pyplot is used for data analysis since it can create histograms, bar charts, error charts and scatter plots etc.</dd>

<dt>seaborn</dt>
<dd><a href="https://seaborn.pydata.org/">Seaborn</a> is a Python data visualisation library based on Matplotlib. It provides a high-level interface for creating informative and attractive statistical graphics and comes with several built-in themes and colour palettes to make it easy to create aesthetically pleasing visualisations. Seaborn works well with Pandas DataFrames and integrates seamlessly with Matplotlib. While Matplotlib provides a general-purpose plotting framework, Seaborn focuses on statistical data visualisation, making it particularly useful for data exploration and presentation.</dd>

<dt>graphviz</dt>
<dd><a href="https://graphviz.org/documentation/">Graphviz</a> is widely used for visualising relationships in complex systems, such as software dependencies, network topologies, decision trees, and more. Its simplicity and flexibility make it a valuable tool for creating clear and concise representations of graph-based data structures.</dd>

### References

- [Applied ML in Python - Kevyn Collins-Thompson](https://www.coursera.org/learn/python-machine-learning)
- [Machine Learning Specialization Beginner Level - Andrew Ng](https://www.coursera.org/specializations/machine-learning-introduction)
