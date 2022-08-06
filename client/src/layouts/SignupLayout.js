import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function SignupLayout({ children, title }) {
	return (
		<div className="signup-layout ">
			<Container className="container  ">
				<Row className="">
					<Col md={6}>
						<div className="layout-left"></div>
					</Col>
					<Col md={6} className=" signup-layout-children-container">
						<h2 className="text-center my-5">{title}</h2>
						{children}
					</Col>
				</Row>
			</Container>
		</div>
	);
}

export default SignupLayout;
