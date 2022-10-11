import { FC, useEffect } from 'react'
import { useEmployeeContext } from '../../utils/ContextProvider'
import portraitplaceholder from '../../assets/images/portraitplaceholder.png'
import github from '../../assets/icons/github.png'
import linkedin from '../../assets/icons/linkedin.png'
import twitter from '../../assets/icons/twitter.png'
import * as S from './styled'

const EmployeeCards: FC = () => {
    const EmployeeContext = useEmployeeContext()
    const { loading, employees, nameSearchTerm, officeSearchTerm } = EmployeeContext

    const filterArr = () => {
        if (officeSearchTerm === 'All') {
            return employees.filter(employee => employee.name.toUpperCase().includes(nameSearchTerm.toUpperCase()))
        } else {
            return employees.filter(employee => employee.name.toUpperCase().includes(nameSearchTerm.toUpperCase()) && employee.office === officeSearchTerm)
        }
    }

    useEffect(() => {
        filterArr()
    }, [nameSearchTerm, officeSearchTerm])

    return (
        <S.Container>
            <S.Wrapper loading={loading}>
                {!loading ?
                    filterArr()
                        .map(employee =>
                        (
                            <S.Card key={employee.email}>
                                <S.Image src={portraitplaceholder} />
                                <S.InformationAndLinks>
                                    <S.Information>
                                        <S.EmployeeName>{employee.name}</S.EmployeeName>
                                        <S.EmployeeOffice>Office: {employee.office}</S.EmployeeOffice>
                                    </S.Information>
                                    <S.Links>
                                        <S.Icon src={github} />
                                        <S.Icon src={linkedin} />
                                        <S.Icon src={twitter} />
                                    </S.Links>
                                </S.InformationAndLinks>
                            </S.Card>)
                        ) : (
                        <S.Loading>
                            LOADING...
                        </S.Loading>
                    )}
            </S.Wrapper>
        </S.Container>
    )
}

export default EmployeeCards