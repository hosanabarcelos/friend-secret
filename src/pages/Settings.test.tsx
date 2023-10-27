import { render } from "@testing-library/react";
import React from "react";
import { RecoilRoot } from "recoil";
import Settings from "./Settings";

const mockNavigation = jest.fn()

jest.mock('react-router-dom', () => {
    return {
        useNavigate: () => mockNavigation
    }
})

describe('Settings', () => {
    test('render', () => {
        const { container } = render(<RecoilRoot>
            <Settings />
        </RecoilRoot>)

        expect(container).toMatchSnapshot()
    })
})