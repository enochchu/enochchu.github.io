import { render, screen } from "@testing-library/react";

import { Terminal } from './Terminal';

describe('Terminal', () => {
    it('should be able to render', () => {
        render(<Terminal />);
        const terminal = screen.getByTestId('terminal');
        expect(terminal).toBeInTheDocument();
    });
});