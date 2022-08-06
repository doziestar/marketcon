import React, { useState, useEffect } from "react";
import SignupLayout from "../layouts/SignupLayout";
import { Stepper, Step, StepLabel, IconButton, Button } from "@mui/material";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import InputField from "../components/InputField";

function Signup() {
	const [activeStep, setActiveStep] = useState(0);
	const [selectedIDType, setSelectedIDType] = useState("");

	return (
		<SignupLayout title="Login">
			<div className="signup-container ">
				<InputField label="Enter Email Address" type="email" />
				<InputField label="Enter Password" type="password" />
			</div>
		</SignupLayout>
	);
}

export default Signup;
