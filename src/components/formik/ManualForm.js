import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const ManualForm = () => {
  const validateFunc = ({ name, mobile, password }) => {
    let obj = { name: '', mobile: '', password: '' };
    const psdPattern = /^[\d]{8,}$/;
    if (
      !mobile.match(/^[\d]{10}$/) ||
      name.length < 3 ||
      !password.match(psdPattern)
    ) {
      if (!mobile.match(/^[\d]{10}$/)) {
        obj.mobile = '10 digits';
      }
      if (name.length < 3) {
        obj.name = 'Min. 3 Characters';
      }
      if (!password.match(psdPattern)) {
        obj.password = 'Min 8 digits required';
      }
      return obj;
    }
  };
  const handleSubmit = (value) => {
    console.log(value, 'value');
    alert('Submitted, Check Console');
  };
  return (
    <div>
      <h2>Manual Form : </h2>

      <Formik
        initialValues={{ name: '', mobile: '', password: '' }}
        onSubmit={handleSubmit}
        validate={validateFunc}
      >
        {({ errors, touched }) => (
          <Form>
            <div>
              <Field type="text" name="name" placeholder="Name" />
              <div style={{ height: '25px' }}>
                {touched.name && errors.name}
              </div>
            </div>
            <div>
              <Field type="text" name="mobile" placeholder="Mobile Number" />
              <div style={{ height: '25px' }}>
                {' '}
                {touched.mobile && errors.mobile}
              </div>
            </div>
            <div>
              <Field type="text" name="password" placeholder="Password" />
              <div style={{ height: '25px' }}>
                {touched.password && errors.password}
              </div>
            </div>
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
export default ManualForm;
