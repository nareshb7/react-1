import React from 'react';
import { Formik, Form, Field } from 'formik';

const FormikEx = () => {
  const handleSubmit = (value) => {
    console.log(value, 'value');
    alert('submitted');
  };
  return (
    <div>
      Formik
      <Formik
        initialValues={{ name: '', mobile: '', password: '' }}
        onSubmit={handleSubmit}
      >
        <Form>
          <Field type="text" name="name" />
          <Field type="text" name="mobile" />
          <Field type="text" name="password" />
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
};
export default FormikEx;
