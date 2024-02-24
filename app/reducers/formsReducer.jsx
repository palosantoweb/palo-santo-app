'use client'
export const initialStateForm = {
    name: '',
    email: '',
    nationality: null,
    phoneNumber: '',
    birthDate: '',
    consultation: ''
  };
  
  const formsReducer = (state = initialStateForm, action) => {
    switch (action.type) {
      case 'SET_FIELD':
        return { ...state, [action.payload.field]: action.payload.value };     
      case 'CLEAN_FIELDS':
        return initialStateForm;       
    default:
        return state;
    }
  };
  
  export default formsReducer;
  