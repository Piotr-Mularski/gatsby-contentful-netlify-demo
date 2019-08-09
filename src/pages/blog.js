import React from 'react';
import Layout from '../components/layout/layout';
import { graphql, useStaticQuery, Link } from 'gatsby';

import blogStyles from '../styles/modules/blog.module.scss';

const Blog = () => {
	const data = useStaticQuery(graphql`
		query {
			allMarkdownRemark {
				edges {
					node {
						frontmatter {
							title
							date
						}
						html
						fields {
							slug
						}
					}
				}
			}
		}
	`);

	const { edges } = data.allMarkdownRemark;
	const blogPosts = edges.map((edge) => {
		return (
			<li className={blogStyles.post}>
				<h2>
					<Link to={`/blog/${edge.node.fields.slug}`}>{edge.node.frontmatter.title}</Link>
				</h2>
				<p>{edge.node.frontmatter.date}</p>
			</li>
		);
	});
	return (
		<Layout>
			<h1>This is the Blog Page</h1>
			<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia id laborum sed minus.</p>
			<ol className={blogStyles.posts}>{blogPosts}</ol>
		</Layout>
	);
};

export default Blog;
