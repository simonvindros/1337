import { FC } from 'react'
import { useEmployeeContext } from '../../utils/ContextProvider'

import * as S from './styled'


const Filter: FC = () => {
    const EmployeeContext = useEmployeeContext()
    const { setNameSearchTerm, setOfficeSearchTerm } = EmployeeContext

    return (
        <S.Container>
            <S.Wrapper>
                <S.NameInput placeholder='Jane Doe' onChange={(event) => { setNameSearchTerm(event.target.value) }} />
                <S.OfficeSelect onChange={(event) => { setOfficeSearchTerm(event.target.value) }}>
                    <option value="All">All Offices</option>
                    <option value="Stockholm">Stockholm</option>
                    <option value="Lund">Lund</option>
                    <option value="Borlänge">Borlänge</option>
                    <option value="Helsingborg">Helsingborg</option>
                    <option value="Ljubljana">Ljubljana</option>
                </S.OfficeSelect>
            </S.Wrapper>
        </S.Container>
    )
}

export default Filter