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
    margin: ${props => props.$global ? ' 0 20px 10px 20px' : 0 };
    //Definir um tamanho máximo depois de todos os ajustes finos;
    //max-width: 1400px;

    & button{
        align-self: center;
    }

    
    ${({theme}) => theme.tablet`
        margin: ${props => props.$global ? ' 0 40px 10px 40px' : 0 };
        
    `}

`

export const ComponentWrapper = styled(LogicalWrapper)`
    display: ${props => props.display || 'flex'};
    flex-direction: ${props => props.direction || 'row'};
    align-items: ${props => props.align_items};
    border: ${props => props.border};
    gap: ${props => props.gap};

    ${({theme}) => theme.tablet`
        display: grid;
        grid-template-columns: repeat(2, auto);
        grid-template-rows: repeat(2, auto);

        grid-template-areas: 
        " hero hero "
        " uniquenew news"
    
    `}

    

    ${({theme}) => theme.desktop`
        grid-template-columns: repeat(3, auto);
        grid-template-rows: repeat(2, auto);

        grid-template-areas: 
        " hero hero news "
        " uniquenew uniquenew news"


    
    `}



`