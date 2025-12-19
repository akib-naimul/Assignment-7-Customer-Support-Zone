Live Site Link :  https://assignment7-customer-support-zone.netlify.app/

This project is a React-based Customer Support Ticket System built using Vite, React, Tailwind CSS, and daisyUI. It allows users to manage customer tickets, track in-progress tasks, and mark tickets as resolved.

Q1. What is JSX, and why is it used?

JSX (JavaScript XML) is a syntax extension for JavaScript that allows writing HTML-like code inside JavaScript files in React.

It is used because it makes the UI structure easier to understand and write. JSX allows developers to combine UI markup and JavaScript logic in a single file. React uses JSX to create and manage UI elements efficiently.

Q2. What is the difference between State and Props?

State and Props are both used to manage data in React, but they serve different purposes.

State is used to store data that belongs to a component and can change over time.

Props are used to pass data from a parent component to a child component and cannot be modified by the child.

State is mutable, while props are read-only. When state changes, the component re-renders automatically.

Q3. What is the useState hook, and how does it work?

The useState hook is a built-in React Hook that allows functional components to manage state.

It returns two values:

The current state value

A function to update that value

When the state update function is called, React re-renders the component with the new state value.

Q4. How can you share state between components in React?

State can be shared between components by lifting the state up to their nearest common parent component. The parent then passes the state and state-updating functions to child components using props.

Other ways to share state include using the Context API or state management libraries like Redux, but lifting state up is the most common and simple approach.

Q5. How is event handling done in React?

Event handling in React is done using camelCase event names such as onClick, onChange, and onSubmit.

Event handlers are written as JavaScript functions and passed to elements. When an event occurs, the function is executed, and state can be updated accordingly.

React uses a synthetic event system that works consistently across different browsers.
