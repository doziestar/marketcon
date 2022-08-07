import React, { useState, useRef, createRef } from "react";
import SignupLayout from "../layouts/SignupLayout";
import { Stepper, Step, StepLabel, IconButton, Button } from "@mui/material";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import InputField from "../components/InputField";
import { Link } from "react-router-dom";

function Signup() {
	const [activeStep, setActiveStep] = useState(0);
	const [formData, setFormData] = useState({
		fullname: "",
		email: "",
		password: "",
		idType: "",
		idValue: "",
	});
	const [otp, setOtp] = useState(["", "", "", ""]);
	const otpRefs = useRef(otp.map(() => createRef()));

	const next = () => {
		if (activeStep === 1) {
			console.log(
				"Submit Form and fetch otp to check against otp to be entered"
			);
		}
		if (activeStep < 2) setActiveStep((prev) => prev + 1);
	};
	const previous = () => {
		if (activeStep > 0) setActiveStep((prev) => prev - 1);
	};

	const handleChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	const handleOTPChange = (e) => {
		let i = parseInt(e.target.name);
		let newOtp = [...otp];
		newOtp[i] = e.target.value;
		setOtp(newOtp);
		// to previous otp input after erasing
		if (e.target.value === "" && i !== 0) {
			otpRefs.current[i - 1].current.focus();
		}
		// to next otp input after entering
		if (e.target.value !== "" && i !== 3) {
			otpRefs.current[i + 1].current.focus();
		}
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
						<InputField
							label="Enter Full Name"
							type="text"
							name="fullname"
							value={formData.fullname}
							onChange={handleChange}
						/>
						<InputField
							label="Enter Email Address"
							type="email"
							name="email"
							value={formData.email}
							onChange={handleChange}
						/>
						<InputField
							label="Enter Password"
							type="password"
							name="password"
							value={formData.password}
							onChange={handleChange}
						/>
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
								onClick={() =>
									handleChange({
										target: {
											name: "idType",
											value: "NIN",
										},
									})
								}
								variant={
									formData.idType === "NIN"
										? "outlined"
										: "text"
								}
							>
								NIN
							</Button>
							<Button
								className="id-type-btn mx-4 "
								onClick={() =>
									handleChange({
										target: {
											name: "idType",
											value: "BVN",
										},
									})
								}
								variant={
									formData.idType === "BVN"
										? "outlined"
										: "text"
								}
							>
								BVN
							</Button>
						</div>
						<InputField
							label={
								formData.idType !== ""
									? `Enter ${formData.idType}`
									: ""
							}
							type="text"
							name="idValue"
							onChange={handleChange}
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
						{otp.map((item, i) => (
							<InputField
								type="OTP"
								name={i}
								key={i}
								value={otp[i]}
								onChange={handleOTPChange}
								dynamicRef={otpRefs.current[i]}
							/>
						))}
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
			{activeStep === 0 && (
				<div className="text-center">
					<Link to="/login">Already have an account?</Link>
				</div>
			)}
		</SignupLayout>
	);
}

export default Signup;
