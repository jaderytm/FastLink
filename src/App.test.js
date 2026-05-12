// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders FastLink title', () => {
    render(<App />);
    const titleElement = screen.getByText(/FastLink/i);
    expect(titleElement).toBeInTheDocument();
});
