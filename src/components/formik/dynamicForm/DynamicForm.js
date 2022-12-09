import React from 'react';
import { Formik, Form, Field, FieldArray } from 'formik';

const DynamicForm = () => {

  const submitFunc = (fields) => {
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(fields, null, 4));
  };

  const handleChange = (e, values, setValues, field) => {
    const persons = [...values.persons];
    const numberOfPersons = e.target.value || 0;
    console.log(numberOfPersons, 'nop');
    const previousNumber = parseInt(field.value || '0');
    if (previousNumber < numberOfPersons) {
      for (let i = previousNumber; i < numberOfPersons; i++) {
        persons.push({ name: '', location: '' });
      }
    } else {
      for (let i = previousNumber; i >= numberOfPersons; i--) {
        persons.splice(i, 1);
      }
    }
    console.log(persons, 'persons');
    setValues({ ...values, persons });
    field.onChange(e);
  };
  return (
    <div>
      Dynamic Form
      <Formik
        initialValues={{ numberOfPersons: '', persons: [] }}
        onSubmit={submitFunc}
      >
        {({ errors, values, setValues, touched }) => (
          <Form>
            <h3>Select No. of Persons :</h3>
            <Field name="numberOfPersons">
              {({ field }) => (
                <select
                  {...field}
                  onChange={(e) => handleChange(e, values, setValues, field)}
                  style={{padding:'10px'}}
                >
                  <option> ' '</option>
                  {[1, 2, 3, 4, 5].map((i, idx) => (
                    <option key={idx} value={i}>
                      {i}
                    </option>
                  ))}
                </select>
              )}
            </Field>
            <FieldArray>
              {() =>
                values.persons.map((val, idx) => {
                  return (
                    <div key={idx} style={{ margin: '10px' }}>
                      <Field
                        name={`tickets.${idx}.name`}
                        placeholder="Enter Name"
                      />
                      <Field
                        name={`tickets.${idx}.location`}
                        placeholder="Enter Location"
                      />
                    </div>
                  );
                })
              }
            </FieldArray>
            <button type='submit'>Submit </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
export default DynamicForm;
