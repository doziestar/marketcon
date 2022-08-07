import React, { useState } from "react";
import SignupLayout from "../layouts/SignupLayout";
import InputField from "../components/InputField";
import { Link } from "react-router-dom";

function Login() {
	return (
		<SignupLayout title="Login">
			<div className="signup-container ">
				<InputField label="Enter Email Address" type="email" />
				<InputField label="Enter Password" type="password" />
			</div>
			<div className="text-center">
				<Link to="/">Don't have an account?</Link>
			</div>
		</SignupLayout>
	);
}

export default Login;
