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
    margin: ${props => props.$global ? ' 0 20px 30px 20px' : 0 };
    //max-width: 500px;


    & button{
        align-self: center;
    }

    
    ${({theme}) => theme.tablet`
        max-width: 720px;
        margin-bottom: 40px;
        
    `}

    ${({theme}) => theme.desktop`
        margin: ${props => props.$global ? ' 0 30px 84px 30px' : 0 };
        max-width: 1100px;
        
    `}



`

export const ComponentWrapper = styled(LogicalWrapper)`
    display: ${props => props.display || 'flex'};
    flex-direction: ${props => props.direction || 'row'};
    place-items: ${props => props.place_items};
    margin-bottom: 32px ;
    border: ${props => props.border};
    gap: ${props => props.gap};

    

    ${({theme}) => theme.tablet`
        display: grid;
        grid-template-columns: repeat(2, auto);
        grid-template-rows: repeat(2, auto);
        margin-bottom: 63px;

        grid-template-areas: 
        " hero hero "
        " uniquenew news"
    
    `}

    

    ${({theme}) => theme.desktop`
        grid-template-columns: repeat(3, auto);
        grid-template-rows: repeat(2, auto);
        margin-bottom: 72px ;

        grid-template-areas: 
        " hero hero news "
        " uniquenew uniquenew news"


    
    `}



`