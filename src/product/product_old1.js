import React from "react";
import { Formik ,Form,Field,ErrorMessage} from "formik";
import * as Yup from "yup";

const initialValues = {
  name: "",
  description : ''
};


const onSubmit = (values) => {
  console.log(values);
};

const validationSchema = Yup.object({
  name: Yup.string().required("Name can not be empty"),
  description: Yup.string().required("Description can not be empty")
});

const Product = () => {
  // const formik = useFormik({
  //   initialValues,
  //   onSubmit,
  //   validationSchema,
  // });

 // console.log("touched", formik.errors.name);
 // console.log("touched", formik.touched.name);

  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
    <div className="row">
      <div className="col-4">
        <Form >
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <Field
              type="text"
              id="name"
              name="name"
              className="form-control"/>
            <ErrorMessage name="name" />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description:</label>
            <Field
              type="text"
              id="description"
              name="description"
              className="form-control"/>
            <ErrorMessage name="description" />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </Form>
      </div>
    </div>
    </Formik>
  );
};

export default Product;
