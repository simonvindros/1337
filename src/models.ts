export type Employee = {
    name: string
    email: string
    phoneNumber: string
    office: string
    manager?: string
    orgUnit: string
    mainText: string
    gitHub?: string
    twitter?: string
    stackOverflow?: string
    linkedIn?: string
    imagePortraitUrl?: string
    imageWallOfLeetUrl?: string
    highlighted?: boolean
    published?: boolean
}

export type Employees = Employee[]

export type Context = {
    loading: Boolean
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
    employees: Employees
    setEmployees: React.Dispatch<React.SetStateAction<Employees>>
    nameSearchTerm: string
    setNameSearchTerm: React.Dispatch<React.SetStateAction<string>>
    officeSearchTerm: string
    setOfficeSearchTerm: React.Dispatch<React.SetStateAction<string>>
}

export type ProviderProps = {
    children: React.ReactNode
}