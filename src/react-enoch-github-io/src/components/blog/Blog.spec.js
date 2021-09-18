import React from 'react';

import '@testing-library/react'
import Blog from "./Blog"

function renderToDOM() {
    if (root !== null) {
        ReactDOM.render(<Blog />, root);
    }
}

describe("Blog", () => {
    it("should instantiate successfully", () => {
        renderToDOM();
        expect(RenderDOM.render).toHaveBeenCalled();
    });

    it('should be able to display an index of posts', () => {

    });
});
