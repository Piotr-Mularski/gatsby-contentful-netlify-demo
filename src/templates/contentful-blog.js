import React from 'react';
import { graphql } from 'gatsby';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Layout from '../components/layout/layout';
import Head from '../components/head';

// gatsby will get this named export and populate $slug variable from the context on createPage
// query will result in props
export const query = graphql`
	query($slug: String!) {
		contentfulBlogPost(slug: { eq: $slug }) {
			title
			slug
			publishedDate(formatString: "DD MM YYYY")
			body {
				json
			}
		}
	}
`;

const Blog = (props) => {
	const options = {
		renderNode: {
			'embedded-asset-block': (node) => {
				const alt = node.data.target.fields.title['en-US'];
				const url = node.data.target.fields.file['en-US'].url;
				return <img alt={alt} src={url} />;
			}
		}
	};
	return (
		<Layout>
			<Head title={props.data.contentfulBlogPost.title} />
			<h2>{props.data.contentfulBlogPost.title}</h2>
			<p>{props.data.contentfulBlogPost.publishedDate}</p>
			{documentToReactComponents(props.data.contentfulBlogPost.body.json, options)}
		</Layout>
	);
};

export default Blog;
