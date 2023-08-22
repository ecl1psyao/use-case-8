import {fireEvent, render} from "@testing-library/react";
import {Provider} from "react-redux";
import store from "../store";
import Form from "./Form";

describe('Form', () => {
    it('should show error messages when values are invalid', () => {
        const { getByTestId, getAllByText, getByText } = render(
            <Provider store={store}>
                <Form />
            </Provider>
        )

        expect(getAllByText('Required field')).toHaveLength(2)
        expect(getByText('Invalid email')).toBeInTheDocument()
        expect(getByText('Message should have at least 10 characters')).toBeInTheDocument()
        expect(getByTestId('submit button')).toBeDisabled()
    })

    it("shouldn't show error messages when values are valid", () => {
        const { queryByTestId, getByTestId, queryByText, getByText } = render(
            <Provider store={store}>
                <Form />
            </Provider>
        )

        fireEvent.change(getByTestId('firstName'), { target: { value: 'Dmytro' } })
        fireEvent.change(getByTestId('lastName'), { target: { value: 'Vasyliev' } })
        fireEvent.change(getByTestId('email'), { target: { value: 'test@gmail.com' } })
        fireEvent.change(getByTestId('message'), { target: { value: 'message 10 chars' } })

        expect(queryByText('Required field')).not.toBeInTheDocument()
        expect(queryByText('Invalid email')).not.toBeInTheDocument()
        expect(queryByText('Message should have at least 10 characters')).not.toBeInTheDocument()
        expect(queryByTestId('submit button')).not.toBeDisabled()
    })

    it('show error message when email is invalid', () => {
        const { getByText, getByTestId } = render(
            <Provider store={store}>
                <Form />
            </Provider>
        )

        fireEvent.change(getByTestId('email'), { target: { value: 'testgmail.com' } })
        expect(getByText('Invalid email')).toBeInTheDocument()
    })

    it('show error message when message is less than 10 chars', () => {
        const {  getByTestId, getByText } = render(
            <Provider store={store}>
                <Form />
            </Provider>
        )

        fireEvent.change(getByTestId('email'), { target: { value: 'message' } })
        expect(getByText('Message should have at least 10 characters')).toBeInTheDocument()
    })
})