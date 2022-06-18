import React from 'react';
import {ErrorMessage,Field} from 'formik'
import TextError from './TextError';


const TextArea = (props) => {
    const {label,name,...rest} = props
    return ( <div className='form-group'>
        <label htmlFor={name}>{label}</label>
        <Field as="textarea" id={name} name={name} {...rest} className="form-control"/>
        <ErrorMessage name={name} component={TextError}/>

    </div> );
}
 
export default TextArea;