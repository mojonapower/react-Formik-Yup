import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

const Home = () => {
	return (
		<Formik
			initialValues={{ password: "", email: "" }}
			validationSchema={Yup.object({
				password: Yup.string()
					.max(15, "Must be 15 characters or less")
					.required("Required"),

				email: Yup.string()
					.email("Invalid email address")
					.required("Required"),
			})}
			onSubmit={(values, { setSubmitting }) => {
				setTimeout(() => {
					alert(JSON.stringify(values, null, 2));
					setSubmitting(false);
				}, 400);
			}}>
			<Form>
				<label htmlFor="email">Email Address</label>
				<Field name="email" type="email" />
				<ErrorMessage name="email" />

				<label htmlFor="password">password</label>
				<Field name="password" type="password" />
				<ErrorMessage name="password" />

				<button type="submit">Submit</button>
			</Form>
		</Formik>
	);
};
export default Home;
