module.exports = {
	siteMetadata: {
		title: `Illinois Robotics in Space`,
		description: `A multidisciplinary student organization at UIUC`,
		author: `@iyaja`
	},
	plugins: [
		`gatsby-plugin-react-helmet`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src`
			}
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `markdown`,
				path: `${__dirname}/src/markdown`
			}
		},
		`gatsby-transformer-remark`,
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		{
      			resolve: 'gatsby-plugin-html-attributes',
      			options: {
        			lang: 'en'
      			}
    		},
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `gatsby-starter-default`,
				short_name: `starter`,
				start_url: `/`,
				background_color: `#13294b`,
				theme_color: `#e84a27`,
				display: `minimal-ui`,
				icon: `static/favicon-32x32.png` // This path is relative to the root of the site.
			}
		}
		// this (optional) plugin enables Progressive Web App + Offline functionality
		// To learn more, visit: https://gatsby.dev/offline
		// `gatsby-plugin-offline`
	]
};
