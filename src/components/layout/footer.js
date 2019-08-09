import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import footerStyles from '../../styles/modules/footer.module.scss';

const Footer = () => {
	const data = useStaticQuery(graphql`
		query {
			site {
				siteMetadata {
					author
				}
			}
		}
	`);

	return (
		<footer className={footerStyles.footer}>
			<p>
				Created with{' '}
				<span role="img" aria-label="emoji heart">
					♥️
				</span>{' '}
				by {data.site.siteMetadata.author}
			</p>
		</footer>
	);
};

export default Footer;
