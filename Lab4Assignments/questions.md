Q1: Explain using code examples what is meant by props and state in
React JS?

A1: The difference between props and state is that pros are read only and cannot be changed once its within a child component while state is mutable and can be modified at anytime using a setState method.

Props are extremely useful when comminicating between components and allows for the developer to customise the behaviour and appearance of the child depending on the parent

States also has the useful feature of when a change in state occurs it then triggers all of the components to re-render therefore changing to the new value that it was set to onto the screen.

Below are code example showing each of these in action:

Props:

import React from 'react';
import ChildComponent from './ChildComponent';

const ParentComponent = () => {
  const data = "Hello from Parent!";

  return (
    <div>
      <ChildComponent message={data} />
    </div>
  );
};

// ChildComponent.jsx
import React from 'react';

const ChildComponent = (props) => {
  return (
    <div>
      <p>{props.message}</p>
    </div>
  );
};

export default ChildComponent;

States:
mport React, { useState } from 'react';

const FunctionalComponent = () => {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={incrementCount}>Increment</button>
    </div>
  );
};

Q2: In functional programming, what does the term functor mean? Can you give
an example in JavaScript?

A2: In Functional programming a functor is an object that implements or uses a map function to apply functionality to each individual values inside of that functor such as an array.


const container1 = new Container(5);

// Use map to apply a function to the value inside the Container
const container2 = container1.map(value => value * 2);

console.log(container1.value);  // Output: 5
console.log(container2.value);  // Output: 10

Q3: We have looked at three kinds of asynchronous programming mechanisms, namely callbacks,
promises and streams. Mention one advantage and one disadvantage of each type.

A3: 

Callbacks
Advantage: They are extremely simple to implement and is a standard practise in javascript.
Disadvantage: If there are too many callback happening at the same time it can lead to endless amounts of nested callbacks which can make code hard to maintain as its not easily readable.

Promises
Advantage:Promises can create a cleaner code base than Callbacks can provide. They can help avoid the issues of all the nested callbacks and allow for better error handing with .catch() and .then()
Disadvantage: Promises cannot be calcelled and sonce its created it can either return a sucessfull or rejected or unsuccessful response.

Streams
Advantage: Streams are useful for processing larege datasets in a more effiecient way than other alternatives. this is because the data can be processed incrementally rather than loading it all at once.
Disadvantage: Streams are more complex to implement that the other 2 alternatives that have been mentioned. Streams are also not fully supported by all apis and libraries so therefore integration can be an issue with this libraries.

Q4: With the aid of a diagram and example code, describe the Cascading Style Sheets (CSS) Box
Model and show how it can be used to space DOM elements

A4 : 

+----------------------------------+
|              Margin              |
|  +---------------------------+   |
|  |         Border            |   |
|  |  +---------------------+  |   |
|  |  |       Padding       |  |   |
|  |  |  +---------------+  |  |   |
|  |  |  |   Content     |  |  |   |
|  |  |  |               |  |  |   |
|  |  |  +---------------+  |  |   |
|  |  +---------------------+  |   |
|  +---------------------------+   |
+----------------------------------+


As can be seen in the diagram above these boxes represent the box model used.

The margain is the area that surrounds the element and can set boudaries between elements

The border is the area directly surroudning the element 

The padding is the area inside the bored but the clear area that exists outside of the content itsself

The content is the content of the element example the text that is to be displayed



Q5 : Detail how the browser loads and bootstraps a rich web application from an initial URL.

A5 : Bootstrap works using the foloowing steps Firstly once the user loads the page this calls the URL. This then sends a request to the server which then proccesses the html css and javasctipy files for the website. Then it gets parsed to the html document and loads render and excecutes the css and javascript files.The browser the constructs dom and cssdom components which combined create a render tree it then calculates and pains the pixels onto the screen based on the calculated positions. This whole process is done progressively so try and keep the user experience smooth and to try and optimise performance.
