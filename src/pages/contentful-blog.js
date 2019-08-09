import React from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';
import Head from '../components/head';

import Layout from '../components/layout/layout';

import blogStyles from '../styles/modules/blog.module.scss';

const ContentfulBlog = () => {
	const data = useStaticQuery(graphql`
		query {
			allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
				edges {
					node {
						title
						publishedDate(formatString: "Do MMMM YYYY")
						slug
					}
				}
			}
		}
	`);

	const { edges } = data.allContentfulBlogPost;

	const blogPosts = edges.map((edge) => {
		return (
			<li className={blogStyles.post}>
				<h2>
					<Link to={`/blog/${edge.node.slug}`}>{edge.node.title}</Link>
				</h2>
				<p>{edge.node.publishedDate}</p>
			</li>
		);
	});

	return (
		<Layout>
			<Head title="Contentful Blog" />
			<h1>This is the Blog Page</h1>
			<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia id laborum sed minus.</p>
			<ol className={blogStyles.posts}>{blogPosts}</ol>
		</Layout>
	);
};

export default ContentfulBlog;
