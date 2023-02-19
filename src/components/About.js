import React from 'react';

const About = () => {
  return (
    <div>
      <h2>About this Project : </h2>
      <h3>Add Contact :</h3>
      <p>
        In this covered total form validation and converting image into Base64
        data
      </p>
      <hr />
      <h2>Contact List : </h2>
      <p>Printing the form data with Add and Update Functionality</p>
      <hr />
      <h2>Table : </h2>
      <p>
        Taken the json mock data and did sort function and like accordian
        function with delete and updating the current user list length
      </p>
      <hr />
      <h2>Store : </h2>
      <p>
        Fetching data from api, add one loader, limited the api result to 100{' '}
      </p>
      <hr />
      <h2>Nested Comp and Context</h2>
      <p>Using the deep navigating and passed the context value</p>
      <hr />
      <h2>Cloth Home : </h2>
      <p>
        {' '}
        Created an object with 20 Id's , and created a mini store by using
        Adavnced useContext storing the clicked data into store{' '}
      </p>
      <hr />
      <h2>Redux : </h2>
      <h3>Example 1 : </h3>
      <p>Basic redux example normalyy updating on count on when u click</p>
      <h3>Example 2 : </h3>
      <p>
        In this sending the form data to store and in login page comparing the
        creds from strore data if the creds match with store data , it will go
        to home page in home page if u want to update ur creds u can update,{' '}
        <b>Topics : useSelector, useDispatch, reduxjs/toolkit, store</b>{' '}
      </p>
      <h3>Example 3 : </h3>
      <p>
        Adding the form data to store and printing the data in a table,{' '}
        <b>
          Topics : mapStateToProps, mapDispatchToProps, connect from 'redux'
        </b>{' '}
      </p>
      <hr />
      <h2>Examples : </h2>
      <p>
        Ex- imagedownloading, Ex1-array data filtered by starting letter of
        value, Ex2 - Simple add and update comp, Ex3 - class Compoment, Ex4 -
        DynamicWidth and height of page, Ex5 - Object designed based on table
        format, localipAdress, Palindrome, Selected CheckBoxes number has to
        show dynamically{' '}
      </p>
      <hr />
      <h2>Reusable</h2>
      <p>
        Created a onebutton and using that button for update ,delete, submit,{' '}
        <b>Topics : Reusable Component</b>
      </p>
      <hr />
      <h2>Paginaton Example :</h2>
      <p>We limited the data into 10 items per page </p>
    </div>
  );
};
export default About;
