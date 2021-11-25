# ReactJS Quick Start Guide

## Table of Contents
- [Introduction](#introduction)
  - [Why do we code in ReactJS?](#why-do-we-code-in-reactjs)
  - [What do we need to code in ReactJS?](#what-do-we-need-to-code-in-reactjs)
  - [Who Am I?](#who-am-i)
- [How To Get Started in ReactJS](#how-to-get-started-in-reactjs)
    - [How To Install & Learn About Node?](#what-is-node)
    - [[How To Install & Learn About NPM?](#what-is-npm)
    - [[How To Install & Learn About GIT?](#what-is-git)
    - [[How To Install & Learn About ReactJS?](#what-is-reactjs)
    - [What Is Create React App?](#what-is-create-react-app)
        - [How to install ReactJS](#how-to-install-reactjs)
- [How To Code in ReactJS](#how-to-code-in-reactjs)
    - [Why Do We Use Components in ReactJS?](#why-do-we-use-components-in-reactjs)
    - [What Is JSX?](#what-is-jsx)
    - [How To Create Your First Component?](#how-to-create-your-first-component)
    - [App Component?](#app-component)
- [Tips](#tips)

## Introduction
In this section we will cover:
- Why do we use or code in ReactJS?
- What do we need to code in ReactJS?
- Who Am I?

### Why do we code in ReactJS?
- React is an open source JavaScript framework that is used for building the front-ends or user interfaces for single-page applications
because it can update sections of the front-end (based on data changes) without reloading the entire page. 
- React is the most popular JavaScript library / framework used in building the frontends / user interface (UI) / view layer for
both web and mobile applications. 
- React simplifies and/or facilitates the breaking down of our View Layer / User Interface into distinct sections (components) that 
can we worked on independently and/or re-used across our web / mobile app project. For example, a component that displays who's online can be reused in multiple places across our project without having to code it each time!


### What do we need to code in ReactJS?
We need a development environment (windows / mac / linux) that is setup for React development. An environment like that will have the following installed ...
- Node
- NPM
- Git
- Visual Studio Code or any other JavaScript development environment 
- React.JS library 

### Who Am I?
My name is Kingsley Tagb and I am a software developer with more than 10+ years of designing, architecting & coding 
enterprise Web, mobile & desktop applications using multiple software frameworks including React.JS
- Contact me with help or questions by sending me a message via: https://www.facebook.com/howtobecomeacomputerprogrammer

## How To Get Started in ReactJS?
- Clone the repo and `cd` into its folder
- `npm install` to install dependencies
- `npm start` to run the app in dev mode
- Create a new React Project using Create React App by running `npx create-react-app reactjs-lesson-one-multi-tenant --template typescript`

#### [Home](#table-of-contents)

### What Is Node?
- `Node.js` is a server-side platform built on Google Chrome's JavaScript Engine and was developed by Ryan Dahl in 2009.
- Node.js is also an open source, cross-platform (mac, windows, linux) environment for developing and/or running software applications. 
- `NodeJS` applications are written in JavaScript, and can be run within the Node.js runtime, as in on OS X, Microsoft Windows, and Linux.
- Node.js also provides a rich library of JavaScript modules (code) which simplifies the development of applications
- `Download & Install NodeJS: https://nodejs.org/en/download/`

#### [Home](#table-of-contents)


### What Is NPM?
- `npm` is the world's largest online code repository  and is used for the publishing of open-source Node.js projects.
- `npm` is also available as a local command-line utility for interacting with the online repository and/or or software package installation, version management and dependency management. 
- There is a ton of Node.js software libraries and/or applications published on npm and they can be searched for on `https://www.npmjs.com`. 
- Anytime you have a software package that you want to install, it can be installed with a single command-line NPM command.
- `Learn More`: https://nodejs.org/en/knowledge/getting-started/npm/what-is-npm/

#### [Home](#table-of-contents)


### What Is GIT?
- Git is a software that's used for tracking changes in any set of files and also for co-ordinating coding work among programmers and/or collaboratively developing source code. Git makes collaboration between developers easier by managing changes from multiple developers so it can all be be merged into one source code. 
- Git is the most commonly used software version control system. Git tracks the changes you make to files, so you have a record of what has been done, and you can revert to specific versions should you ever need to.
- Git is software that runs locally. Your files and their history are stored on your computer. You can also use online Git hosts (such as GitHub or Bitbucket) to store a copy of the files and their revision history. Having shared locations where you can upload your changes and/or download changes from others, helps you collaborate more easily with other developers. 
- Git can also automatically merge multiple changes from two or more people, so they can later merge those changes without losing each other’s work!
- Git was created by Linus Torvalds in 2005 for development of Linux.
`Download & Install Git: https://git-scm.com/downloads`

#### [Home](#table-of-contents)


### What Is ReactJS?
React.js is an open-source JavaScript library that is used for building frontends or user interfaces for single-page applications.
React helps developers create fast / large web applications that can show. reflect or react to data changes, without reloading the entire page!

### What Is Create React App?
Create-React-App is a command-line tool from Facebook that allows you to quickly & easily generate a new React project from the command-line 
without spending a lot of time setting up your local build, development & testing environment.
React was first created by Jordan Walke, a software engineer working for Facebook.
This project was generated with [Create React App](https://github.com/facebook/create-react-app).

### How to install ReactJS
run `npm install -g react@latest react-dom@latest` on your development machine

#### [Home](#table-of-contents)


## How To Code in ReactJS

### Why Do We Use Components in ReactJS?
Components are the core building blocks of React Frontends / User Interfaces (UIs), Websites or Apps. 
So, developing an application in React means breaking down your app into multiple, independent, reusable sections (components)
so that they can be worked on in-isolation and then merged later into a final parent component!
Some of the typical components you will find in a ReactJS app incude:
- App Component
- Header Component
- Footer Component
- Login Component

### What Is JSX?
`JSX` stands for `Javascript XML` and is the React syntax / language extension of JavaScript base that allows you to write HTML like tags inside JavaScript!
- Browsers do not understan JSX beacuse it's not valid Javascript syntax and so, we need a tool like `Bablel` to transform / compile `JSX` 
syntax into Javasript functions that the browser can understand and execute! 
- Each JSX tag is compiled into a Javascript `React.createElement` function call which is a plain Javascript function that browsers support  / understand.
- A JSX expression starts with a HTML-like opening tag, and also ends with its closing tag. You can leave out the closing tag if there are no children
- JSX expressions are written inside curly braces { }. Expressions are variables or any valid JavaScript expressions.

#### What does a JSX statement looks like?
```
<code>
export function App() {
  const name = "Kingsley Tagbo";
  
  return (
    <div className="App" id="App">
      <h3> Hi {name} </h3>
    </div>
  );
}
export default App;
</code>
```

#### How do you comment out code in JSX?
- Regular JavaScript comments in JSX are parsed as Text and displayed. So, you can't use a plain JavaScript comment like this:
```
<code>
 <!-- This comments out code in plain JavaScript but not in JSX -->
</code>
```
- Place your JSX statements inside of Curly braces like this: {/* commented out statement */}.
- Here is a single line JSX Comment
```
<code>
{/* I'm a single line JSX commented out code */}
</code>
```

- Here is a multi line JSX Comment
```
<code>
{/* 
  I am a multi
  line
  commented out code
*/}  
</code>
```

- Here is an example of JSX Comment in a React App. When you run this, nothing will showup on the screen
```
<code>
export function App() {
  const name = "Kingsley Tagbo";
  return (
    <div id="App">
      {/* <h3> Hi {name} </h3> */}
    </div>
  );
}
export default App;
</code>
```

#### How do you create simple math expressions in JSX?
- The code below demonstrates how you can create basic math expressions in JSX:
```
<code>
export function App() {
  const multiply = 5 * 5;
  return (
    <div id="App">
      <div> 
        5 * 5 is {multiply} <br/>
        5 + 5 is {5 + 5} <br/>
        5 - 5 is {5 - 5} <br/>
      </div>
    </div>
  );
}
export default App;
</code>
```

#### How do you diplay multiple nested HTML elements in JSX?
- Multiple nested HTML elements must be wrapped in ONE top level element for a valid JSX expression.
- In the tutorial below, there is one top-level / containing `DIV` HTML tag 
```
<code>
export function App() {
  const multiply = 5 * 5;
  return (
    <div id="App">
      <div> 
        <p>5 * 5 is {multiply} </p>
        <h3>5 + 5 is {5 + 5} </h3>
        <div><strong>5 - 5 is {5 - 5} </strong></div>
      </div>
    </div>
  );
}
export default App;
</code>
```

- Alternatively, you can use a `fragment` to wrap multiple nested lines of HTML
- A fragment looks like an empty HTML tag `<></>`.   
- In the tutorial below, there is one top-level / containing `<>` tag 
```
<code>
export function App() {
  const multiply = 5 * 5;
  return (
    <div id="App">
      <> 
        <p>5 * 5 is {multiply} </p>
        <h3>5 + 5 is {5 + 5} </h3>
        <div><strong>5 - 5 is {5 - 5} </strong></div>
      </>
    </div>
  );
}
export default App;
</code


### How To Create Your First Component?
- If you used the `Create React App` or the `git clone fom repo-url` method, you already have the first component created for you.
- Your first component is also known as the App component and is contained within your `src` folder in the `App.tsx` file.
- So, open your `App.tsx` file and you will find a ReactJS function that declarees your App Component. 
- So, there are two types of components that we can create in ReactJs based on how it uses `State`. State is data that we bring into a component that ends up being used, changed or even presented in the User Interface 
    - A `Functional component` or `stateless component` or `dumb component` is a JavaScript function that accepts an argument or input named props and returns a React element. Functional components don't have or hold their own `State`
    - A `class component` or `stateful component`or `smart component` is a React component that holds or maintains its own `State`.

### App Component
 - `Create React App` by default generates your first component as a functional component inside the `App.tsx` file
 - The App.tsx file consists of import statements at the beginning, the App component in the middle, and an export statement at the bottom. 

 The import statements at the top of the file `App.tsx` provides us with code that has been created some where. 
Here is what it looks like ... 
```
<code>
import React from 'react';
import logo from './logo.svg';
import './App.css';
</code>
```

- The first statement finds the default export from the NodeJS React library and imports that as constant named React 
- The second statement imports a logo from './logo.svg'. 
- The third statement imports the stylesheets / CSS for your ReactJS App component 
- The App component
- After all the imports, you have a functional compponent named App. Here is what it looks like ...

```
<code>
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
export default App;
</code>
```

- Export statements
At the bottom of your App.tsx file, you will find a default export statement that makes your App component available to other modules. Here is what the code looks like ...
```
<code>
export default App;
</code>
```
#### [Home](#table-of-contents)

### How To Create a Footer Component?
- The footer at the bottom of a website typically contains a copyright notice and other needed HTML markup
- All the HTML functionality in the Footer section can be seperated out into a `Footer` component placed inside a sub folder at `./components/Footer.tsx`
- The HTML / JSX Marku cane be exported from the Footer component and imported into the `App` component where it can be dispalyed
- The Tutorial below demonstrates a simple Footer component created inside `./components/Footer.tsx`
```
<code>
function Footer() {
  return (
    <footer>
      <p>Copyright &copy; Kingsley Tagbo</p>
    </footer>
  );
}
export default Footer;
</code>
```

- The Tutorial below shows how the footer component is included and reused in the React App
```
<code>
import React from 'react';
import logo from './logo.svg';
import './App.css';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Footer />
    </div>
  );
}

export default App;

</code>
```


# References 
 - JSX 
  - https://medium.com/javascript-scene/jsx-looks-like-an-abomination-1c1ec351a918

## Tips

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
