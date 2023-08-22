import {useState} from "react";
import validator from "validator/es";
import {useDispatch} from "react-redux";

const Form = () => {
    const dispatch = useDispatch()
    const [values, setValues] = useState({
        firstName: '',
        lastName: '',
        email: '',
        message: ''
    })

    const isFirstNameValid = !validator.isEmpty(values.firstName)
    const isLastNameValid = !validator.isEmpty(values.lastName)
    const isEmailValid = validator.isEmail(values.email)
    const isMessageValid = values.message.length >= 10

    const handleChange = (e) => {
        setValues(prevState => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch({
            type: 'SET_VALUES',
            payload: values
        })
        alert('Values are successfully stored')
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                First name:
                <input
                    onChange={handleChange}
                    value={values.firstName}
                    type="text"
                    name="firstName"
                />
                {!isFirstNameValid && <span className="Error">Required field</span>}
                <br />
            </div>
            <div>
                Last name:
                <input
                    onChange={handleChange}
                    value={values.lastName}
                    type="text"
                    name="lastName"
                />
                {!isLastNameValid && <span className="Error">Required field</span>}
                <br />
            </div>
            <div>
                E-mail:
                <input
                    onChange={handleChange}
                    value={values.email}
                    type="text"
                    name="email"
                />
                {!isEmailValid && <span className="Error">Invalid email</span>}
                <br />
            </div>
            <div>
                Message:
                <input
                    onChange={handleChange}
                    value={values.message}
                    type="text"
                    name="message"
                />
                {!isMessageValid && <span className="Error">Message should have at least 10 characters</span>}
                <br />
            </div>
            <input
                disabled={!(isMessageValid && isFirstNameValid && isLastNameValid && isEmailValid)}
                type="submit"
                value="Submit"
            />
        </form>
    );
};

export default Form;