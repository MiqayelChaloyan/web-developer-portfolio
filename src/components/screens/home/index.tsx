import { FC, memo } from 'react';
import Head from 'next/head';

import Layout from '@/components/layout/Layout';
import MainScreen from './MainScreen';

const Home = () => {
	return (
		<Layout headerPosition='fixed'>
			<Head>
				<title>Front-End Developer</title>
				<meta name='description' content='Front-End Developer' />
			</Head>
			<MainScreen />
		</Layout>
	);
};

export default memo(Home);