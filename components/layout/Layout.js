import React from 'react';
import Footer from './Footer';
import Header from './Nav';

export const Layout = ({ children }) => {
	return (
		<div>
			<Header />
			{children}
			<Footer />
		</div>
	);
};

export default Layout;
