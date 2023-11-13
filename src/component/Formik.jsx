import React from "react";

import { useFormik } from "formik";
import * as Yup from "yup";
const Formik = () => {
  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
    },

    validationSchema: Yup.object({
      firstname: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("Required"),
      lastname: Yup.string()
        .max(20, "Must be 20 characters or less")
        .required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string().min(3, "Invalid password").required("Required"),
    }),

    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <div className="container mx-auto border mt-5 rounded w-50 shadow-lg ">
          <h4 className="fst-italic text-center mt-4">Validate Form With Formik</h4>
          <label className="fw-bold form-label" htmlFor="form3Example3">
  First name
</label>
<br />
{formik.errors.firstname && formik.touched.firstname ? (
  <div className="alert alert-danger" role="alert">
    {formik.errors.firstname && <div>{formik.errors.firstname}</div>}
    <br />
  </div>
) : null}
          <input
            name="firstname"
            onChange={formik.handleChange}
            value={formik.values.firstname}
            className="form-control my-2"
            type="text"
            placeholder=""
          />

          <label className="fw-bold form-label" for="form3Example3">
            Last name
          </label>
          <br />
          {formik.errors.lastname && formik.touched.lastname ? (
  <div className="alert alert-danger" role="alert">
    {formik.errors.lastname && <div>{formik.errors.lastname}</div>}
    <br />
  </div>
) : null}
          <br />
          <input
            name="lastname"
            onChange={formik.handleChange}
            value={formik.values.lastname}
            className="form-control my-2"
            type="text"
            placeholder=""
          />

          <label className="fw-bold form-label" for="form3Example3">
            Email address
          </label>
          <br />
          {formik.errors.email && formik.touched.email ? (
  <div className="alert alert-danger" role="alert">
    {formik.errors.email && <div>{formik.errors.email}</div>}
    <br />
  </div>
) : null}
          <br />
          <input
            name="email"
            onChange={formik.handleChange}
            value={formik.values.email}
            className="form-control my-2"
            type="text"
            placeholder=""
          />

          <label className="fw-bold form-label" for="form3Example3">
            Enter Password
          </label>
          <br />
          {formik.errors.password && formik.touched.password ? (
  <div className="alert alert-danger" role="alert">
    {formik.errors.password && <div>{formik.errors.password}</div>}
    <br />
  </div>
) : null}
        <br />
          <input
            name="password"
            onChange={formik.handleChange}
            value={formik.values.password}
            className="form-control my-2"
            type="text"
            placeholder=""
          />
          <button className="btn btn-info  fw-bold text-center text-white mb-5 w-100">
            Login in
          </button>
        </div>
      </form>
    </>
  );
};

export default Formik;
