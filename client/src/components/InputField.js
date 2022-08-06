import React, { useEffect, useState } from "react";
import { IconButton } from "@mui/material";
import { FaEye, FaEyeSlash } from "react-icons/fa";

function InputField({ label, type, placeholder }) {
	const [id, setId] = useState("");
	const [resolvedType, setResolvedType] = useState(type);

	useEffect(() => {
		setId(`${Math.random() * 100000}`);
	}, []);

	const togglePasswordDisplay = () => {
		let finalType = resolvedType === "password" ? "text" : "password";
		setResolvedType(finalType);
	};

	if (type === "otp" || type === "OTP") {
		return (
			<input
				id={id}
				type="text"
				className="short-input-field p-2 mx-2"
				placeholder="_"
				maxLength={1}
			/>
		);
	}
	return (
		<div>
			<div className="d-flex flex-column w-50 mx-auto mt-3">
				<label htmlFor={id} className="px-3 py-2">
					{label}
				</label>
				{type === "password" ? (
					<div className="input-field d-flex flex-row overflow-hidden px-2">
						<input type={resolvedType} className="password-input" />
						<IconButton onClick={togglePasswordDisplay}>
							{resolvedType === "password" ? (
								<FaEye />
							) : (
								<FaEyeSlash />
							)}
						</IconButton>
					</div>
				) : (
					<input
						id={id}
						type={type}
						className="input-field p-2"
						placeholder={placeholder}
					/>
				)}
			</div>
		</div>
	);
}

InputField.defaultProps = {
	label: "",
	type: "text",
	placeholder: "",
};

export default InputField;
