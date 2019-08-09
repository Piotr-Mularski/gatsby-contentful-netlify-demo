const path = require('path');

module.exports.onCreateNode = ({ node, actions }) => {
	const { createNodeField } = actions;

	if (node.internal.type === 'MarkdownRemark') {
		const slug = path.basename(node.fileAbsolutePath, '.md');
		console.log('@@@@@@@@@@@@@@@', slug);

		createNodeField({
			node,
			name: 'slug',
			value: slug
		});
	}
};

module.exports.createPages = async ({ graphql, actions }) => {
	const { createPage } = actions;
	const blogTemplate = path.resolve('./src/templates/blog.js');

	const response = await graphql(`
		query {
			allMarkdownRemark {
				edges {
					node {
						fields {
							slug
						}
					}
				}
			}
		}
	`);

	response.data.allMarkdownRemark.edges.map((edge) => {
		console.log('###### creted page');
		createPage({
			component: blogTemplate,
			path: `/blog/${edge.node.fields.slug}`,
			context: {
				slug: edge.node.fields.slug
			}
		});
	});
};

module.exports.createPages = async ({ graphql, actions }) => {
	const { createPage } = actions;
	const contentfulBlogTemplate = path.resolve('./src/templates/contentful-blog.js');

	const blogTemplate = path.resolve('./src/templates/blog.js');

	const response = await graphql(`
		query {
			allMarkdownRemark {
				edges {
					node {
						fields {
							slug
						}
					}
				}
			}
		}
	`);

	response.data.allMarkdownRemark.edges.map((edge) => {
		console.log('###### creted page');
		createPage({
			component: blogTemplate,
			path: `/blog/${edge.node.fields.slug}`,
			context: {
				slug: edge.node.fields.slug
			}
		});
	});

	const responseContentful = await graphql(`
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

	responseContentful.data.allContentfulBlogPost.edges.map((edge) => {
		console.log('###### creted contentful page');
		createPage({
			component: contentfulBlogTemplate,
			path: `/blog/${edge.node.slug}`,
			context: {
				slug: edge.node.slug
			}
		});
	});
};
