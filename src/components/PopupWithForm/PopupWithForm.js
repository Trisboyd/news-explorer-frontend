import React from 'react';
import { MainButton } from '../Main/styledMain';
import {
    Overlay, PopupExit, PopupForm, PopupContainer,
    FormTitle, FormInput, FormLabel, FormSwitch, FormSwitchSpan
} from './styledPopupWithForm';

const PopupWithForm = (props) => {

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

    return (
        <Overlay isOpen={props.isOpen}>
            <PopupContainer>
                <PopupExit onClick={props.closePopup} />
                <PopupForm>
                    <FormTitle>
                        {formTitle[formState]}
                    </FormTitle>
                    <FormLabel>Email</FormLabel>
                    <FormInput
                        id='email'
                        name='email'
                        placeholder='Enter email'
                        required></FormInput>
                    <FormLabel>Password</FormLabel>
                    <FormInput
                        id='password'
                        name='password'
                        placeholder='Enter password'
                        required>
                    </FormInput>
                    {formState === 1 ?
                        <>
                        <FormLabel>Username</FormLabel>
                        <FormInput
                            id='username'
                            name='usernam'
                            placeholder='Enter your username'
                            required>
                        </FormInput>
                        </> : ''}
                    <MainButton
                        color={'#2F71E5'}
                        width={'360px'}
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
            </PopupContainer>
        </Overlay>
    )
}

export default PopupWithForm;
