import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

const AddressForm = ({ initialValues, onSubmit, onCancel }) => {
  
  const validate = (values) => {
    const errors = {};

    if (!values.name) {
      errors.name = "Name is required";
    }

    if (!values.dob) {
      errors.dob = "Date of Birth is required";
    }

    if (!values.address) {
      errors.address = "Address is required";
    }

    if (!values.city) {
      errors.city = "City is required";
    }

    if (!values.country) {
      errors.country = "Country is required";
    }

    if (!values.phone) {
      errors.phone = "Phone is required";
    } else if (!/^\d{10}$/.test(values.phone)) {
      errors.phone = "Phone must be 10 digits";
    }

    if (!values.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = "Invalid email format";
    }

    return errors;
  };

  return (
    <Formik
      initialValues={initialValues || { name: "", dob: "", address: "", city: "", country: "", phone: "", email: "" }}
      validate={validate} 
      onSubmit={(values, { resetForm }) => {
        onSubmit(values);
        resetForm();
      }}
    >
      <Form className="mb-4">
        <Field type="text" name="name" className="form-control mb-2" placeholder="Name" />
        <ErrorMessage name="name" component="div" className="text-danger" />

        <Field type="date" name="dob" className="form-control mb-2" />
        <ErrorMessage name="dob" component="div" className="text-danger" />

        <Field type="text" name="address" className="form-control mb-2" placeholder="Address" />
        <ErrorMessage name="address" component="div" className="text-danger" />

        <Field type="text" name="city" className="form-control mb-2" placeholder="City" />
        <ErrorMessage name="city" component="div" className="text-danger" />

        <Field type="text" name="country" className="form-control mb-2" placeholder="Country" />
        <ErrorMessage name="country" component="div" className="text-danger" />

        <Field type="text" name="phone" className="form-control mb-2" placeholder="Phone" />
        <ErrorMessage name="phone" component="div" className="text-danger" />

        <Field type="email" name="email" className="form-control mb-2" placeholder="Email" />
        <ErrorMessage name="email" component="div" className="text-danger" />

        <button type="submit" className="btn btn-success me-2">Save</button>
        <button type="button" className="btn btn-secondary" onClick={onCancel}>Cancel</button>
      </Form>
    </Formik>
  );
};

export default AddressForm;