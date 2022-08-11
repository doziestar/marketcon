import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function DashboardCard({ children, title, value }) {
	return (
		<div className="dashboard-card border">
			<Container className=" h-100">
				<Row className=" h-100">
					<Col className="h-100 d-flex flex-column justify-content-center">
						<div className="small">
							<b>{title}</b>
						</div>
						<div className="display-6">{value}</div>
					</Col>
					<Col className="h-100 d-flex flex-column justify-content-center align-items-center">
						<div className="card-icon-container border">
							{children}
						</div>
					</Col>
				</Row>
			</Container>
		</div>
	);
}

export default DashboardCard;
