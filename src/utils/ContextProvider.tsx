import axios from 'axios'
import React, { FC, useContext, useState } from 'react'
import { Employees, Context, ProviderProps } from '../models'

const EmployeeContext = React.createContext<Context>({} as Context)

const useEmployeeContext = (): Context => useContext(EmployeeContext)

const EmployeeProvider: FC<ProviderProps> = ({ children }): JSX.Element => {
    const [loading, setLoading] = useState<boolean>(true)
    const [employees, setEmployees] = useState<Employees>([])
    const [nameSearchTerm, setNameSearchTerm] = useState('')
    const [officeSearchTerm, setOfficeSearchTerm] = useState('All')

    if (employees.length === 0) {
        axios.get('https://api.1337co.de/v3/employees', {
            headers: {
                'Authorization': `${process.env.REACT_APP_API_KEY}`
            }
        })
            .then((res) => {
                setEmployees(res.data)
                setLoading(false)
            })
            .catch((error) => {
                console.error(error)
            })
    }

    return (
        <EmployeeContext.Provider value={{
            loading,
            setLoading,
            employees,
            setEmployees,
            nameSearchTerm,
            setNameSearchTerm,
            officeSearchTerm,
            setOfficeSearchTerm
        }}>
            <div style={{ backgroundColor: 'lightgrey', display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
                {children}
            </div>
        </EmployeeContext.Provider>
    )
}

export { EmployeeProvider, useEmployeeContext }