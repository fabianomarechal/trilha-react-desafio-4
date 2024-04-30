import styled from 'styled-components';

interface IButtonContainerProps {
    disabled: boolean;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    children: string;
}

export const ButtonContainer = styled.button<IButtonContainerProps>`
    width: 100%;
    height: 42px;
    background-color: ${(props)=> props.disabled ? '#84588A' : '#81259D'};
    color: #FFF;

    border: 1px solid #81259D;
    border-radius: 21px;

    &:hover {
        opacity: ${(props)=> props.disabled ? 1 : 0.6};
        cursor:  ${(props)=> props.disabled ? 'not-allowed' : 'pointer'};
    }
`