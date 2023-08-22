import {fireEvent, render} from "@testing-library/react";
import {Provider} from "react-redux";
import store from "./store";
import App from "./App";

describe('App', () => {
    it("should submit form and display user info", () => {
        const { getByTestId, queryByText, getByText } = render(
            <Provider store={store}>
                <App />
            </Provider>
        )

        fireEvent.change(getByTestId('firstName'), { target: { value: 'Dmytro' } })
        fireEvent.change(getByTestId('lastName'), { target: { value: 'Vasyliev' } })
        fireEvent.change(getByTestId('email'), { target: { value: 'test@gmail.com' } })
        fireEvent.change(getByTestId('message'), { target: { value: 'message 10 chars' } })
        fireEvent.click(getByTestId('submit button'))

        expect(getByText('Dmytro')).toBeInTheDocument()
        expect(getByText('Vasyliev')).toBeInTheDocument()
        expect(getByText('test@gmail.com')).toBeInTheDocument()
        expect(getByText('message 10 chars')).toBeInTheDocument()
    })
})