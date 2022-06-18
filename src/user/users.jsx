import React, { useState,useEffect } from "react"
import MaterialTable from "material-table"
import axios from "axios"
import {Formik,Form} from 'formik'
import FormikControl from '../formik-element/FormikControl';
import Pagination from "../common/pagination";



const Users = () => {
   
    const [users,setUsers] = useState([]);
    const [schema,setSchema] = useState([]);
    const [count,setCount] = useState([]);
    const [pageSize,setPageSize] = useState([4]);
    const [searchCondition,setSearchCondition] = useState([]);
    const [pageNum,setPageNum] = useState(1);
    const initialValues = {User_userName_eq : '',User_email_eq : '',User_mobileNo_eq:''};

    const fetchUser = () => {
        let getUser = null;

        if(searchCondition){
            getUser = axios.get("http://localhost:8095/users",
                            {
                                params :{ 
                                    seachParam : searchCondition,
                                    pageNum : pageNum
                                }
                            })
        }else{
            getUser = axios.get("http://localhost:8095/users",
                            { 
                                params :{ 
                                    pageNum : pageNum
                                }
                            });
        }
        getUser.then( response => {      
            let userData = response.data.result;
            let userSchema = response.data.schema;
            setSchema(userSchema);
            setUsers(userData);
            setCount(response.data.resultSize);
            setPageSize(4);
        })

    }

    useEffect( () => {
        fetchUser();
    },[searchCondition,pageNum])

    const onSubmit = (formValues,onSubmitProps) => {
        let param = Object.entries(formValues)
                    .filter(([key,value]) => value != null && value != '')
                    .reduce((obj,[key,value]) => {
                        obj[key] = value.trim();
                        return obj;
                    },{})

        let paramStr = JSON.stringify(param);
        setSearchCondition(paramStr);   
    }

    const handlePageChange = (page) => {
        setPageNum(page);
    };


    return (<div> 

        <Formik  
                initialValues={initialValues}
                onSubmit = {onSubmit}>
        {
        (formik) => 
        <div className="col-md-4">
        <Form>
            <FormikControl control="input" type="text" name="User_userName_eq" label="User Name"/>
            <FormikControl control="input" type="text"name="User_email_eq" label="Email"/>
            <FormikControl control="input" type="text"name="User_mobileNo_eq" label="Mobile No"/>
            
        
            <button type="submit" className="btn btn-primary">Submit</button>
        </Form>
        </div>

        }
        </Formik>

        <MaterialTable  data={users} columns={schema}
            options={
                {
                    search : false,
                    paging:false
                }
        }/>

        <Pagination
                itemsCount={count}
                pageSize={pageSize}
                onPageChange={handlePageChange}
                />

    </div>)
}

export default Users;
