import { FC } from 'react'
import { useEmployeeContext } from '../../utils/ContextProvider'

const EmployeeCards: FC = () => {
    const EmployeeContext = useEmployeeContext()
    const { loading, employees, nameSearchTerm, officeSearchTerm } = EmployeeContext

    const filteredArr = employees.filter(employee => employee.name.toUpperCase().includes(nameSearchTerm.toUpperCase()))

    // const officeFilter = employees.filter(employee => employee.office.toUpperCase().includes(officeSearchTerm.toUpperCase()))

    return (
        <div style={{ width: '100vw', height: '100vh' }}>
            {!loading ?
                filteredArr
                    .map(employee =>
                    (
                        <div key={employee.email}
                            style={{
                                display: 'flex',
                                margin: '20px'
                            }}>
                            <p>
                                {employee.name} -----
                            </p>
                            <p>
                                {employee.email} ------
                            </p>
                            <p>
                                {employee.office}
                            </p>
                        </div>)
                    ) : (
                    <p>LOADING...</p>
                )}
        </div>
    )
}

export default EmployeeCards