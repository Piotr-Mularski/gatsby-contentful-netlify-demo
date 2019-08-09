import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout/layout';
import Head from '../components/head';

// gatsby will get this named export and populate $slug variable from the context on createPage
// query will result in props
export const query = graphql`
	query($slug: String!) {
		markdownRemark(fields: { slug: { eq: $slug } }) {
			frontmatter {
				title
				date
			}
			html
		}
	}
`;

const Blog = (props) => {
	return (
		<Layout>
			<Head title={props.data.markdownRemark.frontmatter.title} />
			<h2>{props.data.markdownRemark.frontmatter.title}</h2>
			<p>{props.data.markdownRemark.frontmatter.date}</p>
			<div dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }}></div>
		</Layout>
	);
};

export default Blog;
