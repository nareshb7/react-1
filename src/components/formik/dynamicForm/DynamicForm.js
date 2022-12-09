import React from 'react';
import { Formik, Form, Field } from 'formik';

const DynamicForm = () => {
  const submitFunc =()=> {
    alert('submitted')
  }
  return <div>Dynamic Form
    <Formik intialValues={{name:'', locatiom:''}} onSubmit={submitFunc}>
      {
        ({errors, values, setValues, touched})=> (
          <Form>
            <Field name='numberOfPersons'>
              {
                <select>
                  <option></option>
                  {
                    [1,2,3,4,5].map((i, idx)=> <option key={idx} value={i}>{i}</option>)
                  }
                </select>
              }
            </Field>
          </Form>
        )
      }
    </Formik>
  </div>;
};
export default DynamicForm;
