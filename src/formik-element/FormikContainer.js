import React from 'react'
import {Formik,Form} from 'formik'
import * as Yup from 'yup';
import FormikControl from './FormikControl';

const FormikContainer = () => {
    const dropdownOptions = [ 
                                {key : "Select an Option",value:''},
                                {key : "Option 1",value:'option1'},
                                {key : "Option 2",value:'option2'}
                            ];
    const radiOptions = [
                            {key : "Option 1",value:'radio1'},
                            {key : "Option 2",value:'radio2'}
                        ];
    const checkOptions = [
        {key : "Option 1",value:'checkOption1'},
        {key : "Option 2",value:'checkOption2'}
    ]
    const initialValues = {name : '',price : '',description : '',selectOption:'',
                            radioOption:'',checkOption:[],birthDate:new Date()};
    const validationSchema = Yup.object({
        'name' : Yup.string().required('Name can not be empty'),
        'price' : Yup.string().required('Price can not be empty'),
        'description' : Yup.string().required('Description can not be empty'),
        'selectOption' : Yup.string().required('Required'),
        'radioOption' : Yup.string().required('Required'),
        "checkOption" : Yup.array().required('Required'),
        "birthDate" : Yup.date().required('Required').nullable()
    });
    const onSubmit = (values) => console.log(values);
    return (<Formik initialValues={initialValues}
                    validationSchema = {validationSchema}
                    onSubmit = {onSubmit}>
        {
            (formik) => <Form>
                <FormikControl control="input" type="text" name="name" label="Name"/>
                <FormikControl control="input" type="text" name="price" label="Price"/>
                <FormikControl control="textarea" type="text" name="description" label="Description"/>
                <FormikControl control="select"  name="selectOption" label="Select a Topic" options={dropdownOptions}/>
                <FormikControl control="radio"  name="radioOption" label="Select a Opt" options={radiOptions}/>
                <FormikControl control="checkbox"  name="checkOption" 
                    label="Checkbox Topics" options={checkOptions}/>
                {/* <FormikControl control="date"  name="birthDate" 
                    label="Pick a date"/> */}
                <button type="submit">Submit</button>
            </Form>
        }
    </Formik>  );
}
 
export default FormikContainer;
