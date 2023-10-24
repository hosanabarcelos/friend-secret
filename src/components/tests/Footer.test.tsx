import { render, screen } from "@testing-library/react";
import React from "react";
import { RecoilRoot } from "recoil";
import Footer from "../Footer";

describe('When there were not enough participants', () => {
    test('the game cannot start', () => {
        render(
            <RecoilRoot>
                <Footer />
            </RecoilRoot>
        );

        const button = screen.getByRole('button');

        expect(button).toBeDisabled();
    });
});