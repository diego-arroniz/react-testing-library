### Debug Method
You can use the debug method to log the entire DOM output of a component when you run your test:

`it('displays the header and paragraph text', () => {`
  `render(<DebugMethod />)`
  `screen.debug()`
`});` 

Adding the **screen.debug()** the complete body of the component will be logged into the console.

#### Debugging specific component elements
We can use the **debug** method to log specific elements of the DOM.

`it('displays the header and paragraph text', () => {`
  `render(<DebugMethod />)`
  `const header = screen.getByRole('heading', { name: /travel anywhere/i })`
  `screen.debug(header)`
`});`

Adding a variable to get an specific part of the DOM, will log ir into the console, so you can focus your test on it.

Remeber the importance of deleting the debug methods before you make any commit.