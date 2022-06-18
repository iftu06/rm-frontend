import React from 'react';
import {ErrorMessage,Field} from 'formik'
import TextError from './TextError';
import { first } from 'lodash';

const CheckBoxGroup = (props) => {
    const { label,name,options,...rest } = props
    return ( 
    <React.Fragment>
    <label htmlFor={name}> {label} </label>
    <div className="form-group">
   
        <Field  name={name} id={name} {...rest} >
            {
                ({field}) => {
                   return options.map( (option) => {
                       
                        return ( <React.Fragment key={option.key}> 
                            <div className='form-check form-check-inline'>
                                <input key={'role'+option.va} type="checkbox" 
                                id={option.value}  {...field} value={option.value}
                                checked={field.value.includes(String(option.value)) ? true : false}
                                className="form-check-input"
                            />
                                <label class="form-check-label" htmlFor={option.value}>{option.key}</label>
                            </div>
                        </React.Fragment>)
                    })
                }
               
            }
        </Field>
        <ErrorMessage name={name} component={TextError} />
    
    </div>
    </React.Fragment>
     );
}
 

export default CheckBoxGroup;