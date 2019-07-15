---
title: 'React Introduction'
date: '2019-07-15'
---

Before we learn anything about React, we must figure out one concept: Why does it exist? More specifically, what problem does it solve?

Most developers learn libraries and frameworks without knowing the benefits of them. Don't be like most people, use your brain, you can think on your own. 

### The Birth of React

In 2000, we only have html, css, javascript in web development field. Browsers have to download some files every time a new page is loaded. As more browsers showed up, there are compatible issues. That's why jquery showed up, to manipulate DOM in an easy way.
After that, we have backboneJS in order to build big apps.
Then we got the idea of Single Page Application(SPA).
In 2010, AngularJS was created by Google, with the concept of MVC.
While AngularJS cannot handle too much request, Facebook created React in 2013 at JS conference.
One year later, Angular team rewrote their source code to improve their performance. However, many people was comfortable with React that year.

Today, React has become the most popular front-end tool with the most job demand across the world, being used by very large companies like Airbnb, Uber, Netflix, Twitter, Reddit, Pinterest, Wicks, Paypal, Stripe, Tumblr and Walmart.

### What makes React great?

1. Don't touch the DOM, I'll do it.
DOM, which stands for Document Object Model, was initially manipulated by JavaScript and DOM API. It is called an "imperative" way, which means we directly change individual parts of our app. Downside is it's very hard to see "events" and "edge cases". Besides, it takes a long time for browsers to repaint and recaculate the layout.

React is a "declarative" way to manipulate the DOM. By sending it a big JS object, which contains all the inforamtion about what the page should look like, React do all the dirty staff for us. It reduces the complexity of the building process, improves the code quality and saves time. React is smart enough to react to whatever we tell it to do, as well as adjust itself accordingly to any change that happen inside our app.

2. Build website like lego blocks
One of React's amazing powers is the "Reusable Components", which can be used in different places or projects. For example: [material-ui](https://material-ui.com/), [react-bootstrap](https://react-bootstrap.github.io/) or [blueprintjs](https://blueprintjs.com/).

One "lego block"(component, as a class or a function) takes in some props as inputs and produces an html-like code block that can be rendered into a UI component.

Notes: you can install React Developer Tools into your google chrome as an extension to make your like as a react developer a lot more easier.

3. Unidirectional Data Flow(One way data flow)
React creates a Virtual Dom and use it to look and modify the Actual Dom for us. For example, as soon as any state change, React will update the Actual Dom. During this process, the data only flow one way, from state inside this component, through Virtual DOM, to Actual DOM, no way back. This one way data flow is a restriction of React, which makes React app fast and easy to debug.

4. UI, the rest is up to you.
React only builds to User Interface for us, and any other feature we want need to be added by ourselves.
Besides, React is also known as "Learn Once, Write Anywhere", which means that React has the ability to across platforms, such as React Native, React 360, React Blessed, Electron and React Desktop.

That's why we need those two libraries: React(core of React) and React-DOM(only interact with DOM).

5. How to be a great react developer?
1.Decide on Components:
How do we break down the app into different components.
2.Decide the State and where it lives
3.What changes when state changes:
Which part of Virtual DOM rerenders when state changes.

