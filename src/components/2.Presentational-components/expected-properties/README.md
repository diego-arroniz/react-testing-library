### Testing expected properties

- Presentational components can have data passed into them as **props**. The ExpectedPropertiesView component is expecting props **fakeEmployees** to display the list of employees:
  `const ExpectedPropertiesView: React.FC<IProps> = (props) => {`
    `return (`
      `<table className="table table-striped">`
        `<thead className="thead-dark">`
          ...
        `</thead>`
        `<tbody>`
          `{props.fakeEmployees.map((employee) => {`
            `return (`
              `<tr key={employee.id}>`
                `<td>{employee.name}</td>`
                `<td>{employee.department}</td>`
                `<td>{employee.title}</td>`
              `</tr>`
            `);`
          `})}`
        `</tbody>`
      `</table>`
    `);`
  `};`
- We can test that the component properly accepts and displays the rows of employee data in the DOM.
  1. Import **render** and **screen** method, the EmpectedPropertiesView and the **fakeEmployees** mock.
    `import ExpectedPropertiesView from './ExpectedProperties.view';`
    `import { render, screen } from 'src/utils/test-utils';`
    `import { fakeEmployees } from 'src/mocks/employees';`
  2. Declare the test and render component, passing the **fakeEmployee** data.
    `it('renders with expected values', () => {`
      `render(<ExpectedPropertiesView fakeEmployees={fakeEmployees} />)`
    `});`

