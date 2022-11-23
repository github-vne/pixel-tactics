import type {Config} from '@jest/types';

const MODULES_WITH_MODERN_SYNTAX = ['react-data-wrapper', 'react-i18n-mini', 'i18n-mini'];

const config: Config.InitialOptions = {
	setupFiles: ['./config/jest/jest.setup.ts'],
	globalSetup: './config/jest/global.setup.ts',
	moduleDirectories: ['node_modules', './src'],
	transformIgnorePatterns: [`/node_modules/(?!${MODULES_WITH_MODERN_SYNTAX.join('|')}).+\\.js$`],
	moduleNameMapper: {
		'\\.(png|jpg|svg)$': '/config/jest/fileMock.ts',
		'\\.(css)$': 'identity-obj-proxy',
	},
	modulePathIgnorePatterns: ['/__mocks__/'],
	testEnvironment: 'jsdom',
	transform: {
		'^.+\\.(t|j)sx?$': '@swc/jest',
	},
	collectCoverageFrom: ['src/**/*.{js,jsx,ts,tsx}'],
	coverageReporters: ['html'],
};

export default config;
