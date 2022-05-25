import React from 'react'
import { useFormik } from 'formik'
import * as yup from "yup"

//validación "artesanal" previo al uso de YUP
// const validate = (values) => {
//   const errors = {};
//   if (!values.firstName) {
//     errors.firstName = "Required";
//   } else if (values.firstName.length > 15) {
//     errors.firstName = "Must be 15 characters or less"
//   }
//   if (!values.lastName) {
//     errors.lastName = "Required";
//   } else if (values.lastName.length > 20) {
//     errors.lastName = "Must be 20 characters or less"
//   }
//   if (!values.email) {
//     errors.email = "Required";
//   } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
//     errors.email = "Invalid email adress"
//   }
//   return errors
// }



const SignUpForm = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: ""
    },
    //aquí insertábamos la función que contiene las validaciones "artesanales"
    // validate,
    validationSchema: yup.object({
      firstName: yup.string()
        .max(15, "Must be 15 characters or less")
        .required("Required"),
      lastName: yup.string()
        .max(20, "Must be 20 characters or less")
        .required("Required"),
      email: yup.string()
        .email("Invalid email adress")
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2))
    }
  })
  return (
    <main className="container">
      <div className="row justify-content-center mt-5">
        <form className='col-10 col-sm-8 col-md-6 col-lg-4' onSubmit={formik.handleSubmit}>

          <label className="form-label" htmlFor="firstName">First Name</label>
          <input
            autoFocus
            className='form-control'
            id='firstName'
            name='firstName'
            type="firstName"
            {...formik.getFieldProps("firstName")}
          // onChange={formik.handleChange}
          // onBlur={formik.handleBlur}
          // value={formik.values.firstName}
          />

          {formik.touched.firstName && formik.errors.firstName && <div>{formik.errors.firstName}</div>}
          <label className="form-label" htmlFor="lastName">Last Name</label>
          <input
            className='form-control'
            id='lastName'
            name='lastName'
            type="lastName"
            {...formik.getFieldProps("lastName")}
          //  onChange={formik.handleChange}
          // onBlur={formik.handleBlur}
          // value={formik.values.lastName} 
          />

          {formik.touched.lastName && formik.errors.lastName && <div>{formik.errors.lastName}</div>}
          <label className="form-label" htmlFor="email">Email</label>
          <input
            className='form-control'
            id='email'
            name='email'
            type="text"
            {...formik.getFieldProps("email")}
          // onChange={formik.handleChange}
          // onBlur={formik.handleBlur}
          // value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email && <div>{formik.errors.email}</div>}
          <input className="btn btn-success mt-3" type='submit' />

        </form>
      </div>
    </main>
  )
}

export default SignUpForm