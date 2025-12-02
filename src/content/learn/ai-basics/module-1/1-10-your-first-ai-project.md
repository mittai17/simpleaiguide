---
title: "1.10 Your First AI Project: Predicting House Prices"
description: "Build a simple AI model in 5 lines of code."
category: "ai-basics"
level: "beginner"
order: 10
tags: ["ai", "project", "python", "linear-regression"]
pubDate: 2025-12-02
---

# 1.10 🏠 Your First AI Project: Predicting House Prices with 5 Lines of Code

If you’ve made it this far, you might be thinking, "Okay, the theory is cool, but how do I actually build AI?"

Many beginners assume building AI requires thousands of lines of complex code and a PhD in mathematics. That is a myth. Thanks to modern libraries like Python’s scikit-learn, you can build a working Machine Learning model in just a few lines.

Let’s get our hands dirty. We are going to build a simple AI that learns a pattern and predicts house prices.

---

## The Mission: Teach a Computer the Real Estate Market 🏠

Imagine you are a real estate agent. You know that generally, bigger houses cost more money. You have a small notebook with data from four houses you sold recently:

*   **500 sq ft** = 20 Lakhs
*   **600 sq ft** = 25 Lakhs
*   **700 sq ft** = 30 Lakhs
*   **800 sq ft** = 35 Lakhs

Your goal is to feed this data into a computer so that when a new house comes on the market (say, **750 sq ft**), the AI can instantly tell you what the price should be.

---

## The Code (Explained Step-by-Step)

We will use **Python**, the most popular language for AI. We’ll also use two famous libraries:

1.  **numpy**: For handling numbers and data arrays.
2.  **sklearn (Scikit-Learn)**: A toolkit that contains pre-written AI algorithms.

Here is the complete code:

```python
import numpy as np
from sklearn.linear_model import LinearRegression

# Step 1: Create the Dataset
# This is our "Experience" - the data the AI learns from.
# Note: square_feet is a list of lists (2D array) because models expect multiple inputs.
square_feet = np.array([[500], [600], [700], [800]])
prices = np.array([20, 25, 30, 35])  # Prices in Lakhs

# Step 2: Initialize and Train the Model
# We choose "Linear Regression" because we are looking for a simple trend (line).
model = LinearRegression()

# The .fit() command is the magic moment.
# This is where the AI looks at the data and "learns" the pattern.
model.fit(square_feet, prices)

# Step 3: Make a Prediction
# Now the model is trained. Let's ask it about a house it has NEVER seen before.
new_house_size = [[750]]
prediction = model.predict(new_house_size)

print(f"Predicted price for 750 sq ft: {prediction[0]} Lakhs")
```

---

## What Just Happened? 🤯

When you run this code, the computer doesn't just guess. It performs the AI Lifecycle we discussed earlier:

1.  **Data Input**: It takes your numbers.
2.  **Pattern Recognition**: The `model.fit()` command looks at the relationship between size and price. It realizes, "Aha! Every time the size goes up by 100, the price goes up by 5."
3.  **Inference**: When you ask about 750 sq ft, it applies that pattern to give you the answer: **32.5 Lakhs**.

![Image of linear regression graph with data points and a line of best fit](/images/learn/ai-basics/module-1-10.png)
*<center>Visualizing the Linear Regression model.</center>*

---

## Why This Matters

This is a simple example, but it represents the foundation of Machine Learning. Whether it’s predicting house prices, stock market trends, or the weather, the core concept remains the same: **Data + Algorithm = Prediction**.

You just wrote your first piece of AI code. Congratulations!
