## 2 Structuring test with React Testing Library

- The typical pattern to write test code and the recomended by the creators is with Arrage-Act-Assert.

### Arrange - Render

- To test your React component's output, you need a way to render them into the DOM. The **render** method takes a passed-in components, puts it inside a **div** element, and attaches it to the DOM.

`import { render } from @testing-library/react;`
`import ElemetToTest from './ElementToTest;`
`it ('dislays the heading', () => { render (<ElementToTest />)}`

- In many other testing frameworks it's necessary to write additional code to clean up the DOM after the first test is excecuted, so the following test starts from a clean slate and no be affected by the code from the previous test. The **render** method automatically helos us to do this action.

### Selecting elements in the DOM output - Act

- Once we have rendered the component to test in to the DOM, the next step is to select the elements by quering the outputs as a user would.

- To query the DOM there is a **screen** method:

`import { render, screen } from '@testing-library/react';`

- If we wanted to serach the DOM element with the text _"Welcome to our site"_, there are two ways:

  - Using **getByText** -> looks for an element with the matching text, and we add a regular expression inside the method so the an uppercaso or lower case doesn't affect the query.
    `it ('dislays the heading', () => {`
    `render (<ElementToTest />)`
    `screen.getByText(/welcome to our site!/i)`
    `})`
  - Using **getByRole** -> The DOM Testing Library team recommends using this method to select elements. This help us to query the DOM, similarly to how anyone, including screen readers, would search. Different to **getByText**, **getByRole** method will look for an element _heading_ and the text provided.
    `it ('dislays the heading', () => {`
    `render (<ElementToTest />)`
    `screen.getByRole('heading', { name: /welcome to our site!/i })`
    `})`

  - With the two code snippets you will get an error. The errors are displayed automatically. In this case you will see a list of all the possible roles that are in the DOM.

### Asserting expected behavior - Assert

- The last step is to make assertions on behavior. In our examples we can use **toBeInTheDocument** method.
  `it ('dislays the heading', () => {`
  `render (<ElementToTest />)`
  `screen.getByRole('heading', { name: /welcome to our site!/i }).toBeInTheDocument()`
  `})`
