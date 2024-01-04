---
title: Build an AI Image Generator
pageId: openai
eleventyNavigation:
  key: Build an AI Image Generator
---

### What is DALL-E

[DALL-E](https://openai.com/dall-e-3) is an AI model developed by [OpenAI](https://openai.com/) that specialises in creating images from textual descriptions. DALL-E uses a type of AI called a generative model, allowing it to dream up unique visuals based on the input it receives.

### AI Image Generator

The tutorial described in this post is from [Build an AI Image Generator in JavaScript tutorial by Ania Kubów](https://www.youtube.com/watch?v=l3TLQuwr4G0).

### Set up a New Project

1. Create a directory folder and call it what you want. I called mine **ai-text-to-image-generator**
2. Create 3 files inside your main directory and call them, _index.html_, _styles.css_ and _app.js_.

### index.html

Create a basic HTML file with whatever layout you like. Add a section with the class _images-section_, a div with the class _input-container_, an _input_ element and a div with the id _submit-button_.

The _index.html_ file should look something like this:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>AI image generator</title>
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
    <div class="wrapper">
      <header class="header">
        <h1>AI image generator</h1>
      </header>
      <section class="images-section"></section>
      <div class="input-container">
        <input />
        <div id="submit-button">Generate</div>
      </div>
    </div>
    <!-- END wrapper -->
    <script src="app.js"></script>
  </body>
</html>
```

### styles.css

You can style the page any way you like. Here are my styles:

```css
html {
  box-sizing: border-box;
}
*,
*::before,
*::after {
  box-sizing: inherit;
}
img {
  max-width: 100%;
  height: auto;
  vertical-align: middle;
}
body {
  margin: 0;
  padding: 0;
  font-family: sans-serif;
  font-size: 1.35rem;
  line-height: 1.6;
  background-colour: #001220;
  background: url(bg.svg);
  background-size: cover;
  background-position: bottom center, 50%, 50%;
}
h1 {
  font-size: 2.1rem;
  colour: whitesmoke;
  line-height: 1.1;
  margin-bottom: 1rem;
}
.wrapper {
  height: 100vh;
  padding: 1rem;
  text-align: center;
  display: grid;
  place-content: center;
}
section,
.input-container {
  width: 100vw;
}
.header {
  margin-bottom: 2rem;
}
.images-section {
  margin-bottom: 2rem;
}
.image-container img {
  height: 300px;
  min-width: 300px;
  padding-inline: 1rem;
  border-radius: 8px;
}
.input-container {
  display: grid;
  padding: 1rem;
  gap: 1rem;
}
@media (min-width: 600px) {
  .input-container {
    grid-template-columns: 2fr 1fr;
  }
}
input {
  font-size: 16px;
  font-size: max(16px, 1em);
  font-family: inherit;
  padding: 10px;
  background-colour: #fff;
  border: 2px solid #c62368;
  border-radius: 8px;
}
#submit-button {
  colour: #fff;
  background-colour: #001220;
  border-radius: 8px;
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.18);
  padding: 1rem 2rem;
  min-width: 10ch;
  min-height: 44px;
  text-align: center;

  cursor: pointer;
}
#submit-button:hover {
  background-colour: #c62368;
}
```

### Get an OpenAI API Key

1. Go to [openai.com](https://openai.com/) and login.
2. On the left hand sidebar click _API keys_.
3. Click _+ Create a new secret key_.

### app.js

Open _App.js_ and type the following:

```javascript
const submitButton = document.querySelector("#submit-button");
const inputElement = document.querySelector("input");
const imageSection = document.querySelector(".images-section");

const API_KEY = "YOUR API KEY GOES HERE";

const getImages = async () => {
  const options = {
    method: "POST",
    headers: {
      Authorization: `Bearer ${API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      prompt: inputElement.value,
      size: "512x512",
    }),
  };
  try {
    const response = await fetch(
      "https://api.openai.com/v1/images/generations",
      options
    );
    const data = await response.json();

    console.log("Response from API:", data);

    if (data && data.data) {
      data.data.forEach((imageObject) => {
        const imageContainer = document.createElement("div");
        imageContainer.classList.add("image-container");
        const imageElement = document.createElement("img");
        imageElement.setAttribute("src", imageObject.url);
        imageContainer.append(imageElement);
        imageSection.append(imageContainer);
      });
    } else {
      console.error("No data or data is undefined");
    }
  } catch (error) {
    console.error(error);
  }
};

submitButton.addEventListener("click", getImages);
```

#### HTML Elements Selection

- `submitButton`: Represents the submit button.
- `inputElement`: Represents an input element where the user enters a prompt.
- `imageSection`: Represents a section in the HTML where generated images will be displayed.

#### API Key

`API_KEY` is your OpenAI API key. Make sure to keep this key secure and avoid sharing it publicly.

#### Function `getImages`

- This function is asynchronous (`async` keyword) and is triggered when the submit button is clicked:

```javascript
submitButton.addEventListener("click", getImages);
```

- It constructs an options object for the `fetch` function, including the API key in the headers.
- It sends a POST request to the OpenAI API endpoint with a JSON payload containing the prompt from the input element and a specified size:

```html
https://api.openai.com/v1/images/generations
```

- `JSON.stringify` is used to convert a JavaScript object into a JSON-formatted string, which is useful for sending data in an HTTP request or performing other tasks that require a string representation of the data.
- It handles the response and logs the data to the console.
- If the response contains image data `data.data`, it iterates over the images, creates HTML elements for each, and appends them to the `imageSection`.
- If there is no data or if the data is undefined, an error is logged to the console.

#### Event Listener

An event listener is added to the submit button, triggering the `getImages` function when the button is clicked.

#### Image Generation

Up to 10 images at a time can be generated but I've opted to only generate one (which is the default) and I've reduced the image size from 1024x1024 to 512x512 because the lower the size, the lower the cost of image generation.

To change the amount of images you generate edit the `getImages` function. In this example we are generating 4 images:

```javascript
body: JSON.stringify({
  prompt: inputElement.value,
  n: 4,
  size: "512x512",
});
```

You can read more about OpenAI Create Image on [this OpenAI API reference page](https://platform.openai.com/docs/api-reference/images/create).

### Source

[Build an AI Image Generator in JavaScript! (Super simple!) | OpenAI API DALL-E ChatGPT](https://www.youtube.com/watch?v=l3TLQuwr4G0) by [Code with Ania Kubów](https://www.youtube.com/@AniaKubow)
