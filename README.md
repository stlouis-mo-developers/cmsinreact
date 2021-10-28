# ReactJS Quick Start Guide

## Table of Contents
- [Introduction](#introduction)
- [Prerequisites](#prerequisites)
    - [How to install ReactJS](#how-to-install-reactjs)
- [How To Setup in ReactJS](#how-to-setup-in-reactjs)
    - [What Is Node?](#what-is-node)
    - [What Is NPM?](#what-is-npm)
    - [What Is GIT?](#what-is-git)
    - [What Is ReactJS?](#what-is-reactjs)
    - [What Is Create React App?](#what-is-create-react-app)
- [How To Code in ReactJS](#how-to-code-in-reactjs)
    -[Why Do We Use Components in ReactJS?](#why-do-we-use-components-in-reactjs)
    -[How To Create Your First Component?](#how-to-create-your-first-component)
    -[App Component?](#app-component)
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

### How to install ReactJS
run `npm install -g react@latest react-dom@latest` on your development machine


## How To Setup in ReactJS
- Clone the repo and `cd` into its folder
- `npm install` to install dependencies
- `npm start` to run the app in dev mode
- Create a new React Project using Create React App by running `npx create-react-app reactjs-lesson-one-multi-tenant --template typescript`


### What Is Node?
Node.js is a server-side platform built on Google Chrome's JavaScript Engine (V8 Engine). Node.js was developed by Ryan Dahl in 2009.
Node.js is an open source, cross-platform runtime environment for developing server-side and networking applications. 
Node.js applications are written in JavaScript, and can be run within the Node.js runtime on OS X, Microsoft Windows, and Linux.
Node.js also provides a rich library of JavaScript modules which simplifies the development of web applications using Node.js to a great extent.
- `Learn More: https://www.tutorialspoint.com/nodejs/nodejs_introduction.htm`


### What Is NPM?
npm is two things: first and foremost, it is an online repository for the publishing of open-source Node.js projects; second, it is a command-line utility for interacting with said repository that aids in package installation, version management, and dependency management. A plethora of Node.js libraries and applications are published on npm, and many more are added every day. These applications can be searched for on https://www.npmjs.com/. Once you have a package you want to install, it can be installed with a single command-line command.
- `Learn More`: https://nodejs.org/en/knowledge/getting-started/npm/what-is-npm/


### What Is GIT?
Git is software for tracking changes in any set of files and is used for coordinating work among programmers and/or collaboratively developing source code during software development. 
Git is the most commonly used version control system. Git tracks the changes you make to files, so you have a record of what has been done, and you can revert to specific versions should you ever need to. Git also makes collaboration easier, allowing changes by multiple people to all be merged into one source. 
Git is software that runs locally. Your files and their history are stored on your computer. You can also use online hosts (such as GitHub or Bitbucket) to store a copy of the files and their revision history. Having a centrally located place where you can upload your changes and download changes from others, enable you to collaborate more easily with other developers. Git can automatically merge the changes, so two people can even work on different parts of the same file and later merge those changes without losing each other’s work!
Git was created by Linus Torvalds in 2005 for development of Linux.
`Learn More: https://en.wikipedia.org/wiki/Git`


### What Is ReactJS?
React.js is an open-source JavaScript library that is used for building frontends or user interfaces for single-page applications.
React helps developers create fast / large web applications that can show. reflect or react to data changes, without reloading the entire page!

### What Is Create React App?
Create-React-App is a command-line tool from Facebook that allows you to quickly & easily generate a new React project from the command-line 
without spending a lot of time setting up your local build, development & testing environment.
React was first created by Jordan Walke, a software engineer working for Facebook.
This project was generated with [Create React App](https://github.com/facebook/create-react-app).


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


### How To Create Your First Component?
- If you used the `Create React App` or the `git clone fom repo-url` method, you already have the first component created for you.
- Your first component is also known as the App component and is contained within your `src` folder in the `App.tsx` file.
- So, open your `App.tsx` file and you will find a ReactJS function that declarees your App Component. 
- So, there are two types of components that we can create in ReactJs based on how it uses `State`. State is data that we bring into a component that ends up being used, changed or even presented in the User Interface 
    - A `Functional component` or `stateless component` or `dumb component` is a JavaScript function that accepts an argument or input named props and returns a React element. Functional components don't have or hold their own `State`
    - A `class component` or `stateful component`or `smart component` is a React component that holds or maintains its own `State`.

### App Component
 - `Create React App` by default generates your first component as a functional component inside the `App.tsx` file
 - A functional component is a JavaScript function that accepts an argument or inputs named props and returns a React element, Functional components don't have their own state and are also known as `stateless components`


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
