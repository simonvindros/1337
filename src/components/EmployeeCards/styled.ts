import styled from 'styled-components'
import { card } from '../../typography'

export const Container = styled.div`
    display: flex;
    width: 100vw;
    justify-content: center;
`

export const Wrapper = styled.div<{ loading: boolean }>`
    display: grid;
    grid-template-columns: ${props => props.loading ? 'repeat(1, 1fr)' : 'repeat(4, 1fr)'};
    gap: 2rem 1rem;
    max-width: 80rem;
    padding: 1rem;
    @media (max-width: 960px) {
        grid-template-columns: repeat(3, 1fr);
    }
    @media (max-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
    }
    @media (max-width: 480px) {
        grid-template-columns: repeat(1, 1fr);
    }
`

export const Card = styled.div`
    display: flex;
    border-radius: 0.25rem;
    box-shadow: 0px 8px 9px 8px rgba(118,118,118,0.8);
    flex-direction: column;
    padding: 1rem 0.5rem;
    background-color: white;
`

export const Image = styled.img`
    max-height: 100%;
    max-width: 100%;
`

export const InformationAndLinks = styled.div`
    display: flex;
    flex: 1;
    gap: 0.5rem;
    padding: 1rem 0rem 0rem 0rem;
`

export const Information = styled.div`
    display: flex;
    flex: 2;
    flex-direction: column;
    justify-content: space-around;
    gap: 0.25rem;
`

const cardText = `
    font-size: ${card.cardText.fontSize};
    font-weight: ${card.cardText.fontWeight};
    color: ${card.cardText.color};
`

export const EmployeeName = styled.span`
    ${cardText}
`

export const EmployeeOffice = styled.span`
    ${cardText}
`

export const Links = styled.div`
    display: flex;
    flex: 1;
    gap: 0.5rem;
    justify-content: flex-end;
`

export const Icon = styled.img`
    max-height: 1.5rem;
    max-width: 1.5rem;
`

export const Loading = styled.span`
    display: flex;
    flex: 1;
    width: 100%;
    justify-content: center;
    align-items: center;
    ${cardText}
`