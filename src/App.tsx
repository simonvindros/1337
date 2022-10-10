import './App.css';
import React, { FC } from 'react'
import EmployeeCards from './components/EmployeeCards/EmployeeCards';
import Filter from './components/Filter/Filter';
import { EmployeeProvider } from './utils/ContextProvider'

const App: FC = () => {

  return (
    <EmployeeProvider>

      <Filter />
      <EmployeeCards />

    </EmployeeProvider>
  );
}

export default App;
