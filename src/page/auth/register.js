import React from 'react'
import style from './style.module.css'
import { Formik } from 'formik';
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <>
      <div className={style.body}>
        <div className={style.carousel}>
          <div className={style.bighello}>
            <span>Explore</span>
            <span>Books</span>
            <span>Explore</span>
            <span>World</span>
          </div>
        </div>
        <div className={style.form}>
          <h2>Register</h2>
          <p>Please fill this form with your Identity</p>
          <Formik
            initialValues={{ fullname: '', email: '', password: '' }}
            validate={values => {
              const errors = {};
              if (!values.fullname ){
                errors.fullname = 'Please fill the Fullname';
              }
              if (!values.email) {
                errors.email = 'Please fill the email';
              } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
              ) {
                errors.email = 'Invalid email address';
              }
              return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
                setSubmitting(false);
                console.log(values)
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
              /* and other goodies */
            }) => (
              <form onSubmit={handleSubmit}>
                <div className={style.input}>
                  <label htmlFor="fullname">Name : </label>
                  <input
                    type="text"
                    name="fullname"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.fullname}
                  />
                </div>
                <div className={style.errormessage}>
                  {errors.fullname && touched.fullname && errors.fullname}
                </div>
                <div className={style.input}>
                  <label htmlFor="email">Email : </label>
                  <input
                    type="email"
                    name="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                  />
                </div>
                <div className={style.errormessage}>
                  {errors.email && touched.email && errors.email}
                </div>
                <div className={style.input}>
                  <label htmlFor="password">Password : </label>
                  <input
                    type="password"
                    name="password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                  />
                </div>
                <div className={style.errormessage}>
                  {errors.password && touched.password && errors.password}
                </div>
                <button type="submit" disabled={isSubmitting}>
                  Login
                </button>
              </form>
            )}
          </Formik>
          <p>Already have an account ? <Link to="/login">Login</Link></p>
        </div>
      </div>
    </>
  )
}

export default Register