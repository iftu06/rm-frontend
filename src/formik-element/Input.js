import React from 'react';
import {ErrorMessage,Field} from 'formik'
import TextError from './TextError';


const Input = (props) => {
    const {label,name,...rest} = props
    return ( <div className='form-group'>
        <label htmlFor={name}>{label}</label>
        <Field id={name} name={name} {...rest} className="form-control"/>
        <ErrorMessage name={name} component={TextError}/>

    </div> );
}
 
export default Input;