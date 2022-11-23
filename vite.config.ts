import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';
import postcssNesting from 'postcss-nesting';

const path = require('path');

type TViteConfig = {
	mode: string;
	command: string;
};

// https://vitejs.dev/config/
export default (args: TViteConfig) => {
	const generateScopedName =
		args.mode === 'production' ? '[hash:base64:2]' : '[local]_[hash:base64:2]';

	return defineConfig({
		resolve: {
			alias: {
				entities: path.resolve(__dirname, './src/entities'),
				store: path.resolve(__dirname, './src/store'),
				constants: path.resolve(__dirname, './src/constants'),
			},
		},
		plugins: [react()],
		css: {
			postcss: {plugins: [postcssNesting]},
			modules: {generateScopedName},
		},
	});
};
