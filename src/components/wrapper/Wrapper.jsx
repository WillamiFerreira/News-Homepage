import { styled } from "styled-components"

function LogicalWrapper({children, className}) {
    return(
        <div className={className}>
            {children}
        </div>
    )
} 


export const Wrapper = styled(LogicalWrapper)`

    display: flex;
    flex-direction: column;
    border: ${props => props.border};
    gap: ${props => props.gap};
    padding: ${props => props.padding || '0px'} ;
    margin: 0 16px;

    & button{
        align-self: center;
    }

    
    ${({theme}) => theme.tablet`
        margin: 0 36px;
    `}

`