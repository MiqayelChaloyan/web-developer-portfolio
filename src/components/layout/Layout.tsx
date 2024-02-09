import React from 'react';
import Meta from '@/components/seo/Meta';

import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
	children: React.ReactNode
	headerPosition?: 'fixed' | 'sticky'
};

const Layout: React.FC<LayoutProps> = ({ children, headerPosition }) => (
	<Meta>
		<div className="wrapper">
			<div className="wrapper-content">
				<Header typePosition={`${headerPosition === 'fixed' ? 'fixed' : 'sticky'}`} />
				<main className="wrapper-main">{children}</main>
			</div>
			<Footer />
		</div>
	</Meta>
);

export default Layout;
