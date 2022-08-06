import React, { useState, useEffect } from "react";
import SignupLayout from "../layouts/SignupLayout";
import { Stepper, Step, StepLabel, IconButton, Button } from "@mui/material";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import InputField from "../components/InputField";

function Signup() {
	const [activeStep, setActiveStep] = useState(0);
	const [selectedIDType, setSelectedIDType] = useState("");
	// const [fullname, setFullname] = useState("");
	// const [email, setEmail] = useState("");
	// const [password, setPassword] = useState("");

	const next = () => {
		if (activeStep < 2) setActiveStep((prev) => prev + 1);
	};
	const previous = () => {
		if (activeStep > 0) setActiveStep((prev) => prev - 1);
	};
	return (
		<SignupLayout title="Signup">
			<div className="signup-container ">
				<Stepper activeStep={activeStep}>
					<Step completed={activeStep > 0}>
						<StepLabel>Basic Information</StepLabel>
					</Step>
					<Step completed={activeStep > 1}>
						<StepLabel>BVN/NIN</StepLabel>
					</Step>
					<Step completed={activeStep > 2}>
						<StepLabel>OTP</StepLabel>
					</Step>
				</Stepper>
				{/* Basic Information Form */}
				{activeStep === 0 && (
					<div className="mt-5">
						<InputField label="Enter Full Name" type="text" />
						<InputField label="Enter Email Address" type="email" />
						<InputField label="Enter Password" type="password" />
					</div>
				)}
				{/* BVN/NIN Form */}
				{activeStep === 1 && (
					<div className="mt-5">
						<div className="mt-5 w-50 mx-auto text-center">
							<div className="text-center mb-3">
								What means of Identification do you possess?
							</div>
							<Button
								className="id-type-btn mx-4 "
								onClick={() => setSelectedIDType("NIN")}
								variant={
									selectedIDType === "NIN"
										? "outlined"
										: "text"
								}
							>
								NIN
							</Button>
							<Button
								className="id-type-btn mx-4 "
								onClick={() => setSelectedIDType("BVN")}
								variant={
									selectedIDType === "BVN"
										? "outlined"
										: "text"
								}
							>
								BVN
							</Button>
						</div>
						<InputField
							label={
								selectedIDType !== ""
									? `Enter ${selectedIDType}`
									: ""
							}
							type="text"
						/>
					</div>
				)}
				{/* OTP Form */}
				{activeStep === 2 && (
					<div className="mt-5 text-center">
						Enter OTP
						<p className="small text-muted w-50 mx-auto">
							An OTP has been sent to the phone number attached to
							the NIN/BVN you entered previously, enter it below.
						</p>
						<InputField type="OTP" />
						<InputField type="OTP" />
						<InputField type="OTP" />
						<InputField type="OTP" />
					</div>
				)}
				{/* Next and Previous Buttons */}
				<div className="d-flex flex-row justify-content-around my-5 w-50  mx-auto">
					<IconButton onClick={previous} disabled={activeStep === 0}>
						<FaChevronLeft />
					</IconButton>
					{activeStep !== 2 && (
						<IconButton onClick={next}>
							<FaChevronRight />
						</IconButton>
					)}
					{activeStep === 2 && (
						<Button className="signup-btn" onClick={next}>
							Signup
						</Button>
					)}
				</div>
			</div>
		</SignupLayout>
	);
}

export default Signup;
