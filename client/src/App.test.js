import React from 'react';
import * as rtl from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from './App';

describe("App testing", () => {
    it("has an element with text 'World Cup players' ", () => {
        const simulatedDom = rtl.render(
            <App />
        );
        const h1 = simulatedDom.queryByText(/World Cup players/i)
        expect(h1).toBeInTheDocument();
    })
})