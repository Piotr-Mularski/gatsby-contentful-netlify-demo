import React from 'react';
import Layout from '../components/layout/layout';
import Head from '../components/head';

const About = () => {
	return (
		<div>
			<Layout>
				<Head title="About Page" />
				<h1>This is about page</h1>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus consequatur error
					quisquam soluta commodi corrupti, explicabo adipisci fuga nisi veritatis perspiciatis
					dicta itaque, inventore corporis.
				</p>
			</Layout>
		</div>
	);
};

export default About;
