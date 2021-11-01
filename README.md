# ReactJS Quick Start Guide

## Table of Contents
- [Introduction](#introduction)
- [Prerequisites](#prerequisites)
- [How To Setup in ReactJS](#how-to-setup-in-reactjs)
    - [What Is Node?](#what-is-node)
    - [What Is NPM?](#what-is-npm)
    - [What Is GIT?](#what-is-git)
    - [What Is ReactJS?](#what-is-reactjs)
    - [What Is Create React App?](#what-is-create-react-app)
        - [How to install ReactJS](#how-to-install-reactjs)
- [How To Code in ReactJS](#how-to-code-in-reactjs)
    - [Why Do We Use Components in ReactJS?](#why-do-we-use-components-in-reactjs)
    - [What Is JSX?](#what-is-jsx)
    - [How To Create Your First Component?](#how-to-create-your-first-component)
    - [App Component?](#app-component)
- [Tips](#tips)

## Introduction
- Why do we use or code in ReactJS?
- NWhat do we need to code in ReactJS?
- How do we code in ReactJS
- Who Am I?

## Prerequisites
- Node
- NPM
- Git
- Visual Studio Code (development environment)


## How To Setup in ReactJS
- Clone the repo and `cd` into its folder
- `npm install` to install dependencies
- `npm start` to run the app in dev mode
- Create a new React Project using Create React App by running `npx create-react-app reactjs-lesson-one-multi-tenant --template typescript`


### What Is Node?
- `Node.js` is a server-side platform built on Google Chrome's JavaScript Engine and was developed by Ryan Dahl in 2009.
- Node.js is also an open source, cross-platform (mac, windows, linux) environment for developing and/or running software applications. 
- `NodeJS` applications are written in JavaScript, and can be run within the Node.js runtime, as in on OS X, Microsoft Windows, and Linux.
- Node.js also provides a rich library of JavaScript modules (code) which simplifies the development of applications
- `Download & Install NodeJS: https://nodejs.org/en/download/`


### What Is NPM?
- `npm` is the world's largest online code repository  and is used for the publishing of open-source Node.js projects.
- `npm` is also available as a local command-line utility for interacting with the online repository and/or or software package installation, version management and dependency management. 
- There is a ton of Node.js software libraries and/or applications published on npm and they can be searched for on `https://www.npmjs.com`. 
- Anytime you have a software package that you want to install, it can be installed with a single command-line NPM command.
- `Learn More`: https://nodejs.org/en/knowledge/getting-started/npm/what-is-npm/


### What Is GIT?
- Git is a software that's used for tracking changes in any set of files and also for co-ordinating coding work among programmers and/or collaboratively developing source code. Git makes collaboration between developers easier by managing changes from multiple developers so it can all be be merged into one source code. 
- Git is the most commonly used software version control system. Git tracks the changes you make to files, so you have a record of what has been done, and you can revert to specific versions should you ever need to.
- Git is software that runs locally. Your files and their history are stored on your computer. You can also use online Git hosts (such as GitHub or Bitbucket) to store a copy of the files and their revision history. Having shared locations where you can upload your changes and/or download changes from others, helps you collaborate more easily with other developers. 
- Git can also automatically merge multiple changes from two or more people, so they can later merge those changes without losing each other’s work!
- Git was created by Linus Torvalds in 2005 for development of Linux.
`Download & Install Git: https://git-scm.com/downloads`


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
`JSX` stands for `Javascript XML` and is the React syntax / language that allows you to write HMTL like tags inside JavaScript!
- Browsers do not understan JSX beacuse its' not valid Javascript syntax and so, we need a tool like `Bablel` to transform / compile `JSX` 
syntax into Javasript functions that the browser can understand and execute! 
- Each JSX tag is compiled into a Javascript `React.createElement` function call which is a plain Javascript function that browsers support  / understand.
- A JSX expression starts with a HTML-like opening tag, and also ends with its closing tag. You can leave out the closing tag if there are no children
Here is what JSX looks like ...
```
<code>
  const h1Element = <h1 className="myclass">H1 Element</h1>;
</code>
```

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
</code>
```

- Export statements
At the bottom of your App.tsx file, you will find a default export statement that makes your App component available to other modules. Here is what the code looks like ...
```
<code>
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
