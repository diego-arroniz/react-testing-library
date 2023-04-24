export type IEmployee = {
  id: number;
  name: string;
  department: string;
  title: string;
}

export const fakeEmployees: IEmployee[] = [
  {
    id: 1,
    name: 'John Smith',
    department: 'Sales',
    title: 'Senior Sales Agent'
  },
  {
    id: 2,
    name: 'Sarah Jenkins',
    department: 'Engineering',
    title: 'Senior Full-Stack Engineer'
  },
  { id: 3, name: 'Tim Reynolds', department: 'Design', title: 'Designer' }
]
