require('dotenv').config({
	path: `.env.${process.env.NODE_ENV}`,
})
module.exports = {
	siteMetadata: {
		title: `My Gatsby Site`,
		siteUrl: `https://www.yourdomain.tld`,
	},
	plugins: [
		{
			resolve: `gatsby-source-custom-api`,
			options: {
				apiKey: process.env.API_KEY,
			},
		},
	],
}
