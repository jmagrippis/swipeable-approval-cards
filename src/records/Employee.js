import { Record } from 'immutable'

const Employee = new Record({
  id: undefined,
  name: undefined,
  avatar: '/assets/images/default.png',
  rating: undefined,
  assessment: undefined
},
'Employee'
)

export default Employee
