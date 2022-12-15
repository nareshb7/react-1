import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Action } from '../Redux';

const SignUp = () => {
  const navigate = useNavigate();
  const [details, setDetails] = useState({
    username: '',
    email: '',
    mobile: '',
    password: '',
  });
  const [checkObj, setCheckObj] = useState({
    email: false,
    mobile: false,
    username: false,
    password: false,
  });
  const [valid, setValid] = useState(true);
  const users = useSelector((state) => state.data.users);
  const [errors, setErrors] = useState({});
  const dispatch = useDispatch();

  useEffect(() => {
    let { email, mobile, username, password } = checkObj;
    if (email && mobile && username && password) {
      setValid(false);
    } else {
      setValid(true);
    }
  }, [checkObj]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const mblpattern = /^[0-9]{10}$/;
    const emailPattern = /^[A-z][A-z0-9]+@[A-z0-9]+(?:[.][a-z]{2,})+$/;
    const psdPattern =
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*-_+]).{8,}$/;
    switch (name) {
      case 'email':
        errors.email = '';
        if (value.match(emailPattern)) {
          console.log(
            users.find((user) => user.email === value),
            'check 42'
          );
          if (users.find((user) => user.email === value)) {
            errors.email = 'Try New Email Id';
            setCheckObj({ ...checkObj, email: false });
          } else {
            setCheckObj({ ...checkObj, email: true });
          }
        } else {
          errors.email = 'Enter Valid Email';
          setCheckObj({ ...checkObj, email: false });
        }
        break;
      case 'mobile':
        errors.mobile = !value.match(mblpattern)
          ? 'Enter Valid Mobile Number'
          : '';

        value.match(mblpattern)
          ? setCheckObj({ ...checkObj, mobile: true })
          : setCheckObj({ ...checkObj, mobile: false });
        break;
      case 'username':
        errors.username = value.length < 2 ? 'Name Required' : '';
        value.length < 2
          ? setCheckObj({ ...checkObj, username: false })
          : setCheckObj({ ...checkObj, username: true });
        break;
      case 'password':
        errors.password = value.match(psdPattern)
          ? ''
          : 'one uppercase, lowercase, digit, minimum 8 characters required';
        value.match(psdPattern)
          ? setCheckObj({ ...checkObj, password: true })
          : setCheckObj({ ...checkObj, password: false });
        break;
      default:
        return;
    }
    setErrors({ ...errors, [name]: errors[name] });
    setDetails({ ...details, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Hii ${details.username}, Account Created Sucessfully `);
    dispatch(Action(details));
    navigate('/ecom/login');
  };
  return (
    <div>
      <div>
        <form className="ipStyle" onSubmit={handleSubmit}>
          <div>
            <div>
              <label>Name :</label>
            </div>
            <input
              type="text"
              name="username"
              value={details.username}
              onChange={handleChange}
              placeholder="Enter your name"
            />
            <div className="danger">{errors.username} </div>
          </div>
          <div>
            <div>
              <label>Email :</label>
            </div>
            <input
              type="text"
              name="email"
              value={details.email}
              onChange={handleChange}
              placeholder="Email"
            />
            <div className="danger">{errors.email}</div>
          </div>
          <div>
            <div>
              <label>Mobile : </label>
            </div>
            <input
              type="number"
              name="mobile"
              value={details.mobile}
              onChange={handleChange}
              placeholder="Enter Mobile Number"
            />
            <div className="danger">{errors.mobile} </div>
          </div>
          <div>
            <div>
              <label>Password : </label>
            </div>
            <input
              type="password"
              name="password"
              value={details.password}
              onChange={handleChange}
              placeholder="Password"
            />
            <div className="danger">{errors.password} </div>
          </div>
          <div>
            <button type="submit" disabled={valid}>
              Sign In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
