import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout/layout';
import Head from '../components/head';

const NotFound = () => {
	return (
		<Layout>
			<Head title="404 :(" />
			<h2>Not found :(</h2>
			<Link to="/">Go back to home page</Link>
		</Layout>
	);
};

export default NotFound;
