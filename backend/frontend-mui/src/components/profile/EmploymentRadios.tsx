import { FormControlLabel, Radio } from '@mui/material'

import { Employment } from '../../types/Profile'

const EmploymentRadios = ({ employments }: { employments: Employment[] }) => {
  console.debug('employments', employments)
  if (employments) {
    return (
      <>
        {employments.map((emp, ind) => {
          console.log(emp)
          return (
            <FormControlLabel
              key={ind}
              value={emp.uuid}
              control={<Radio />}
              label={emp.name}
            />
          )
        })}
      </>
    )
  }
  return <>Loading...</>
}

export default EmploymentRadios
