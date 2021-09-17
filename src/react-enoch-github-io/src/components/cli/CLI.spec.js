import React from 'react';

import '@testing-library/react'
import CLI from "./CLI";

describe("CLI", () => {
    it("should instantiate successfully", () => {
        try {
            render(<CLI />);
        }
        catch (e) {
            fail();
        }t
    });
});
