import React from 'react';
import { MainButton } from '../Main/styledMain';
import {
    Overlay, PopupExit, PopupForm, FormTitle, FormInput, FormLabel, FormSwitch, FormSwitchSpan, FormErrorMessage
} from './styledPopupWithForm';

const PopupWithForm = (props) => {

    // ________________________________Ref
    const formRef = React.useRef();

    // __________________________________________________________________________________________________SIGNIN VS SIGNUP
    //_________form state for determining which form should be shown (sign in or sign up)
    // ____________________________________________________0 = signin, 1 = signup
    const [formState, setFormState] = React.useState(0);
    const [isValid, setIsValid] = React.useState('false');

    const formTitle = ['Sign in', 'Sign up'];

    const swapFormTitle = () => {
        if (formState === 0) {
            setFormState(1)
        }
        else setFormState(0);
    }

    const otherTitle = () => {
        return formTitle.filter((title) => title !== formTitle[formState]);
    }

    // _____________________________________________________________________________________________INPUTS AND VALIDATION
    const [inputs, setInputs] = React.useState({
        email: '',
        password: '',
        name: ''
    })

    // ______________________________ reset inputs everytime popup is opened
    React.useEffect(() => {
        resetInputs();
    }, [props.isOpen]);

    // _____________________________________update submit button based on validity of form inputs
    const checkFormValidity = (event) => {
        setIsValid(formRef.current.checkValidity());
    }

    // ______________________________________________________ Validation messages
    const [errorMessages, setErrorMessages] = React.useState(
        { email: '', password: '', name: '' }
    );

    const updateErrorMessages = (event) => {
        const { name, validationMessage } = event.target;
        setErrorMessages({
            ...errorMessages,
            [name]: validationMessage
        })
    }

    // _______________________________________________________change inputs and error messages based on user input
    const handleChange = (event) => {
        const { name, value } = event.target;
        errorMessages[name] && updateErrorMessages(event);
        setInputs({
            ...inputs,
            [name]: value
        });
    };

    // ______________________________________________________reset inputs
    const resetInputs = () => {
        setInputs({
            email: '',
            password: '',
            name: ''
        })
        setErrorMessages({
            email: '',
            password: '',
            name: ''
        })
    }

    // _________________________________________________________________________POPUP BEHAVIOR, LOGIN, REGISTER
    // _________________________________________ close popup
    const closePopup = () => {
        props.closePopup();
    }

    // ________________________________________________________login function
    const handleLogin = (event) => {
        event.preventDefault();
        props.handleLogin(inputs);
    }

    // _____________________________________________________register function
    const handleRegister = (event) => {
        event.preventDefault();
        props.handleRegister(inputs);
    }

    return (
        <Overlay isOpen={props.isOpen}>
            <PopupForm
                onSubmit={formState === 0 ? handleLogin : handleRegister}
                ref={formRef}
                onChange={checkFormValidity}
                novalidate>
                <PopupExit
                    onClick={closePopup}
                    height={'40px'}
                    width={'40px'}
                    top={'-10%'}
                    right={'-10%'}
                    smallTop={'-5%'}
                    smallRight={'5px'}
                    smallSize={'24px'} />
                <FormTitle>
                    {formTitle[formState]}
                </FormTitle>
                <FormLabel>Email</FormLabel>
                <FormInput
                    type='email'
                    id='email'
                    name='email'
                    value={inputs.email}
                    placeholder='Enter email'
                    required
                    onChange={handleChange}
                    onBlur={updateErrorMessages}>
                </FormInput>
                <FormErrorMessage>{errorMessages.email}</FormErrorMessage>
                <FormLabel>Password</FormLabel>
                <FormInput
                    type='password'
                    min='2'
                    max='40'
                    id='password'
                    name='password'
                    value={inputs.password}
                    placeholder='Enter password'
                    required
                    onChange={handleChange}
                    onBlur={updateErrorMessages}>
                </FormInput>
                <FormErrorMessage>{errorMessages.password}</FormErrorMessage>
                {formState === 1 &&
                    <>
                        <FormLabel>Username</FormLabel>
                        <FormInput
                            type='text'
                            min='2'
                            max='40'
                            id='name'
                            name='name'
                            value={inputs.name}
                            placeholder='Enter your username'
                            required
                            onChange={handleChange}
                            onBlur={updateErrorMessages}>
                        </FormInput>
                        <FormErrorMessage>{errorMessages.name}</FormErrorMessage>
                    </>}
                <FormErrorMessage>{props.emailMessage}</FormErrorMessage>
                <MainButton
                    color={!isValid ? '#E6E8EB' : '#2F71E5'}
                    width={'360px'}
                    mobileWidth={'90%'}
                    height={'64px'}
                    position={'relative'}
                    textColor={'#FFF'}
                    disabled={!isValid}>
                    {formTitle[formState]}
                </MainButton>
                <FormSwitch>or
                    <FormSwitchSpan
                        onClick={swapFormTitle}>
                        {otherTitle()}
                    </FormSwitchSpan>
                </FormSwitch>
            </PopupForm>
        </Overlay>
    )
}

export default PopupWithForm;
