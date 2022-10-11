import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    justify-content: center;
    padding: 1rem;
`

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: white;
    max-width: 80rem;
    border-radius: 0.25rem;
    box-shadow: 0px 8px 8px 8px rgba(118,118,118,0.8);
    gap: 2rem;
    padding: 1rem 0;
`

const inputStyle = `
    margin: 0;
    width: 80%;
    max-width: 160rem;
    border: 1px solid lightgrey;
    border-radius: 0.25rem;
    padding: 1rem 0rem;
    color: black;
`

export const NameInput = styled.input`
    ${inputStyle}
    text-indent: 0.25rem;
`

export const OfficeSelect = styled.select`
    ${inputStyle}
`