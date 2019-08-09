import React from 'react';
import Head from '../components/head';
import Layout from '../components/layout/layout';

const Contact = () => {
	return (
		<Layout>
			<Head title="Contact Page" />
			<h1>This is the Contact Page</h1>
			<ul>
				<li>Phone: 333-222-111</li>
				<li>Adress: Fibonacci Street 012358, 13-2134 Mathishard</li>
			</ul>
		</Layout>
	);
};

export default Contact;
