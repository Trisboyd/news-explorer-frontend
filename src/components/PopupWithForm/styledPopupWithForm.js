import styled from 'styled-components';
import exit from '../../images/close-icon.svg';
import { Link } from 'react-router-dom';

export const Overlay = styled.section`
    display: flex;
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    justify-content: center;
    align-items: center;
    background-color:rgba(0, 0, 0, 0.5);
    z-index: 1;
    opacity: ${props => props.isOpen ? '1' : '0'};
    visibility: ${props => props.isOpen ? 'visible' : 'hidden'};
    transition: visibility 1s, opacity 1s ease;
    `
export const PopupContainer = styled.div`
    position: relative;
    max-width: 430px;
    display: flex;
    justify-content: center;
    z-index: 2;
    `
export const PopupExit = styled.button`
    height: 40px;
    width: 40px;
    position: absolute;
    top: -45px;
    right: -45px;
    cursor: pointer;
    background-image: url(${exit});
    background-color: rgba(0, 0, 0, 0);
    background-size: cover;
    background-repeat: no-repeat;
    border: none;
    transition: opacity .5s ease-in-out .5s;
    `
export const PopupForm = styled.form`
    width: 100%;
    background: #FFFFFF;
    box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.15);
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    z-index: 3;

    @media screen and (max-width: 680px) {
    width: 88.125%;
    `
export const FormTitle = styled.h3`
    font-style: normal;
    font-weight: 900;
    font-size: 24px;
    line-height: 29px;
    color: #000000;
    width: 330px;
    margin: 34px 64px 24.26px 36px;
    `
export const FormInput = styled.input`
    width: 83.5%;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 17px;
    vertical-align: text-top;
    color: #000000;
    border: none;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    margin-left: 36px;
    padding-bottom: 13.26px;

    :focus {
        outline: none;
    }
    :last-of-type {
        margin-bottom: 39px;
    }
`
export const FormLabel = styled.label`
    font-size: 12px;
    line-height: 15px;
    color: #2F71E5;
    margin: 31px 0 9px 36px;
`
export const FormSwitch = styled.p`
    font-size: 14px;
    line-height: 17px;
    text-align: center;
    color: #000000;
    margin: 16px auto 28px auto;
`
export const FormSwitchSpan = styled.a`
    color: #2F71E5;
    cursor: pointer;
    margin-left: 8px;
`