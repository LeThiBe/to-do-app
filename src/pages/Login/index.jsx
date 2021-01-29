import { Formik, Form, Field, ErrorMessage } from 'formik';
import { connect } from "react-redux";
import { Redirect } from 'react-router-dom';

import {login as loginAction} from '../../actions';

const Login = (props) => {

const {loginSuccess, errorMessage} = props;
  if (loginSuccess === true) {
    return (
      <Redirect to="/" />
    );
  } else {
    return (
      <>
        <h1>Login</h1>
        <Formik
          initialValues={{
            email: '',
            password: ''
          }}
          validate={values => {
            const errors = {};
            if (!values.email) {
              errors.email = 'Required';
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = 'Invalid email address';
            }

            return errors;
          }}
          onSubmit={(values) => {
            props.login(values);
          }}
        >
          <Form>
            {errorMessage ? (
              <div>{errorMessage}</div>
            ) : null}
            <label htmlFor="email">Email</label>
            <Field
              display="block"
              id="email"
              name="email"
              placeholder="jane@acme.com"
              type="email"
            />
            <ErrorMessage name="email" component="div" />
            <label htmlFor="password">Password</label>
            <Field
              id="password"
              type="password"
              name="password"
            />
            <ErrorMessage name="password" component="div" />
            <button type="submit">Submit</button>
          </Form>
        </Formik>
      </>
    );
  }
}

const mapStateToProps = state => ({
  loginSuccess: state.loginData.loginSuccess,
  errorMessage: state.loginData.errorMessage
});

const mapDispatchToProps = dispatch => ({
  login: (data) => {
    dispatch(loginAction(data));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
