import { Record } from 'immutable'

const Employee = new Record({
  id: undefined,
  name: undefined,
  avatar: '/assets/images/default.png',
  rating: undefined,
  approved: undefined
},
'Employee'
)

export default Employee
