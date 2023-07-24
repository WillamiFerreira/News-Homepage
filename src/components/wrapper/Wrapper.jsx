import { styled } from "styled-components"

function LogicalWrapper({children, className}) {
    return(
        <div className={className}>
            {children}
        </div>
    )
} 


export const Wrapper = styled(LogicalWrapper)`
    border: 1px solid red;
    gap: ${props => props.gap};
    padding: ${props => props.padding}
`