import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import Register from './register';
import Login from './login';
import { Navbar, Nav, Form, FormControl, Button, NavDropdown } from 'react-bootstrap';

export default function Welcome() {
	return (
		<React.Fragment>
			<Navbar bg="light" expand="lg">
				<Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="mr-auto">
						<Nav.Link href="#home">Home</Nav.Link>
						<Nav.Link href="#link">Link</Nav.Link>
						<NavDropdown title="Dropdown" id="basic-nav-dropdown">
							<NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
							<NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
							<NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
							<NavDropdown.Divider />
							<NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
						</NavDropdown>
					</Nav>
					<Form inline>
						<FormControl type="text" placeholder="Search" className="mr-sm-2" />
						<Button variant="outline-success">Search</Button>
					</Form>
				</Navbar.Collapse>
			</Navbar>

			<img src="/assets/reactlogo" />
			<h2>Welcome to your Budgeting app!</h2>
			<HashRouter>
				<div>
					<Route exact path="/" component={Register} />
					<Route path="/login" component={Login} />
				</div>
			</HashRouter>
		</React.Fragment>
	);
}
