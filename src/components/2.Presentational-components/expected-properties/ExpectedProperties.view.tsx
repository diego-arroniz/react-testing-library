import { IEmployee } from 'src/mocks/employees';

type IProps = {
  fakeEmployees: IEmployee[];
};

const ExpectedPropertiesView: React.FC<IProps> = (props) => {
  return (
    <table className="table table-striped">
      <thead className="thead-dark">
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Department</th>
          <th scope="col">Title</th>
        </tr>
      </thead>
      <tbody>
        {props.fakeEmployees.map((employee) => {
          return (
            <tr key={employee.id}>
              <td>{employee.name}</td>
              <td>{employee.department}</td>
              <td>{employee.title}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default ExpectedPropertiesView;
