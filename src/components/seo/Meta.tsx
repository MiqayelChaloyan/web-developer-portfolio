import { FC, PropsWithChildren } from 'react';

import { DefaultSeo } from 'next-seo';

const seoTitle = 'Front-End Developer';
const seoDescription = `Hi, I'm Mikayel Chaloyan. A passionate Front-end React Developer based in Armenia, Vanadzor.`;
const seoUrl = 'https://art-house-holding.vercel.app/en';
const seoOGImage = 'https://dariopironi.com/wp-content/uploads/2022/09/How-to-Become-a-React-Developer.png';
const seoOGImageAlt = 'Front-End Developer';
const seoSiteName = 'Front-End Developer';
const seoLocale = 'en';

const Meta: FC<PropsWithChildren> = ({ children }) => {
	return <>
		<DefaultSeo
			title={seoTitle}
			description={seoDescription}
			canonical={seoUrl}
			openGraph={{
				url: seoUrl,
				title: seoTitle,
				description: seoDescription,
				images: [
					{
						url: seoOGImage,
						width: 500,
						height: 500,
						alt: seoOGImageAlt,
					},
				],
				siteName: seoSiteName,
				type: 'website',
				locale: seoLocale
			}}
		/>
		{children}
	</>;
};

export default Meta;