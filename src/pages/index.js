import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout/layout';
import Head from '../components/head';

const IndexPage = () => {
	return (
		<div>
			<Layout>
				<Head title="Home Page" />
				<h1>Hey!</h1>
				<p>My name is Piotrek and this is my first attempt of creating Gatsby page</p>
				<Link to="/contact">Contact Me</Link>
			</Layout>
		</div>
	);
};

export default IndexPage;
