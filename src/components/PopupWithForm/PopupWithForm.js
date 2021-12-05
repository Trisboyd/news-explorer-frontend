import React from 'react';
import { MainButton } from '../Main/styledMain';
import {
    Overlay, PopupExit, PopupForm, FormTitle, FormInput, FormLabel, FormSwitch, FormSwitchSpan, FormErrorMessage
} from './styledPopupWithForm';

const PopupWithForm = (props) => {

    // ___________________________________________________________________________________Form Type Functions
    //_________form state for determining which form should be shown (sign in or sign up)
    // ____________________________________________________0 = signin, 1 = signup
    const [formState, setFormState] = React.useState(0);

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

    // ________________________________________________________________________Inputs
    const [inputs, setInputs] = React.useState({
        email: '',
        password: '',
        name: ''
    })

    // ___________________________________________________________________change inputs based on typing
    const handleChange = ({ target }) => {
        const { name, value } = target;
        setInputs({
            ...inputs,
            [name]: value
        });
    };

    // _______________________________________________________________________reset inputs
    const resetInputs = () => {
        setInputs({
            email: '',
            password: '',
            name: ''
        })
    }

    // _________________________________________________________________________close popoup

    const closePopup = () => {
        resetInputs();
        props.closePopup();
    }

    // ______________________________________________________________________login function
    const handleLogin = (event) => {
        event.preventDefault();
        props.handleLogin(inputs);
        closePopup();
    }

    // ___________________________________________________________________________register function
    const handleRegister = (event) => {
        event.preventDefault();
        props.handleRegister(inputs);
        closePopup();
    }

    return (
        <Overlay isOpen={props.isOpen}>
            {/* <PopupContainer> */}
            <PopupForm
                onSubmit={formState === 0 ? handleLogin : handleRegister}>
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
                    onChange={handleChange}></FormInput>
                <FormErrorMessage></FormErrorMessage>
                <FormLabel>Password</FormLabel>
                <FormInput
                    type='text'
                    min='2'
                    max='40'
                    id='password'
                    name='password'
                    value={inputs.password}
                    placeholder='Enter password'
                    onChange={handleChange}
                    required>
                </FormInput>
                <FormErrorMessage></FormErrorMessage>
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
                            onChange={handleChange}>
                        </FormInput>
                        <FormErrorMessage></FormErrorMessage>
                    </>}
                <MainButton
                    color={'#2F71E5'}
                    width={'360px'}
                    mobileWidth={'90%'}
                    height={'64px'}
                    position={'relative'}
                    textColor={'#FFF'}>
                    {formTitle[formState]}
                </MainButton>
                <FormSwitch>or
                    <FormSwitchSpan
                        onClick={swapFormTitle}>
                        {otherTitle()}
                    </FormSwitchSpan>
                </FormSwitch>
            </PopupForm>
            {/* </PopupContainer> */}
        </Overlay>
    )
}

export default PopupWithForm;
