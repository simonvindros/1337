import { FC } from 'react'
import { useEmployeeContext } from '../../utils/ContextProvider'

import * as S from './styled'


const Filter: FC = () => {
    const EmployeeContext = useEmployeeContext()
    const { setNameSearchTerm, setOfficeSearchTerm } = EmployeeContext

    return (
        <>
            <S.Filter placeholder='Jane Doe' onChange={(event) => { setNameSearchTerm(event.target.value) }} />
            <S.Filter placeholder='Stockholm' onChange={(event) => { setOfficeSearchTerm(event.target.value) }} />
        </>
    )
}

export default Filter