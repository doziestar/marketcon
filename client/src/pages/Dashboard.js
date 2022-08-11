import React, { useState } from "react";
import Layout from "../layouts/MainLayout";
import DashboardCard from "../components/DashboardCard";
import { Container, Row, Col } from "react-bootstrap";
import { FaCreditCard, FaDollarSign, FaBriefcase } from "react-icons/fa";
// ES2015 module syntax
import {
	Chart,
	ChartValueAxis,
	ChartValueAxisItem,
	ChartCategoryAxis,
	ChartCategoryAxisItem,
	ChartSeries,
	ChartSeriesItem,
} from "@progress/kendo-react-charts";
import { List, ListItem, ListItemText } from "@mui/material";

function Dashboard() {
	const [chartData] = useState([22, 45, 80, 33, 50, 90]);
	const [chartCategories] = useState([
		"Mon",
		"Tue",
		"Wed",
		"Thurs",
		"Friday",
	]);

	return (
		<div>
			<Layout>
				<Container>
					<Row>
						<Col md={4}>
							<DashboardCard title="Current Balance:" value="$40">
								<FaDollarSign />
							</DashboardCard>
						</Col>
						<Col md={4}>
							<DashboardCard
								title="Total Spent in July:"
								value="$380"
							>
								<FaCreditCard />
							</DashboardCard>
						</Col>
						<Col md={4}>
							<DashboardCard
								title="Average Montly Income:"
								value="$3000"
							>
								<FaBriefcase />
							</DashboardCard>
						</Col>
					</Row>
					<Row className="justify-content-center my-5">
						<Col md={8}>
							<h6 class="small text-center">
								<b>Daily Transactions</b>
							</h6>
							<Chart>
								<ChartValueAxis>
									<ChartValueAxisItem
										title={{
											text: "Amount",
										}}
										min={0}
										max={300}
									/>
								</ChartValueAxis>
								<ChartCategoryAxis>
									<ChartCategoryAxisItem
										categories={chartCategories}
									/>
								</ChartCategoryAxis>
								<ChartSeries>
									<ChartSeriesItem
										color={"blue"}
										data={chartData}
										type="line"
									/>
								</ChartSeries>
							</Chart>
						</Col>
					</Row>
					<Row>
						<Col md={8}>
							<List>
								<ListItem className="border rounded m-3">
									<ListItemText
										primary="John Doe"
										secondary="$40"
									/>
									<div className="text-muted small">
										Yesterday, 12:40
									</div>
								</ListItem>
								<ListItem className="border rounded m-3">
									<ListItemText
										primary="John Doe"
										secondary="$40"
									/>
									<div className="text-muted small">
										Yesterday, 12:40
									</div>
								</ListItem>
								<ListItem className="border rounded m-3">
									<ListItemText
										primary="John Doe"
										secondary="$40"
									/>
									<div className="text-muted small">
										Yesterday, 12:40
									</div>
								</ListItem>
							</List>
						</Col>
						<Col md={4}></Col>
					</Row>
				</Container>
			</Layout>
		</div>
	);
}

export default Dashboard;
