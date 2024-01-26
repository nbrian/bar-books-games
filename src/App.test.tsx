import { beforeEach, describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from './App';
import '@testing-library/jest-dom';

describe('App test', () => {
	beforeEach(() => {
		render(<App />);
	});

	test('renders learn react link', () => {
		expect(screen.getByText(/Vite + React/i)).toBeDefined();
	});
});
