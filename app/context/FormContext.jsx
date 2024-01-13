'use client'
import { createContext, useContext, useReducer } from 'react';
import formsReducer, { initialStateForm } from '../reducers/formsReducer';

const FormContext = createContext();

const FormProvider = ({ children }) => {
  const [formState, dispatch] = useReducer(formsReducer, initialStateForm);

  const setInfoForms = (field, value) =>{
    dispatch({ type: 'SET_FIELD', payload: { field, value } });
  }

  return (
    <FormContext.Provider value={{ formState, setInfoForms }}>
      {children}
    </FormContext.Provider>
  );
};

const useForms = () => {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error('useClient must be used within a ClientProvider');
  }
  return context;
};

export { FormProvider, useForms };
