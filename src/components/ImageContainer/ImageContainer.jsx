import { styled } from "styled-components"

function LogicalImageContainer({imgURL, className, label}){
    return(
        <div className={className}>
            <img src={imgURL} alt={label} />
        </div>
    )
}


export const ImageContainer = styled(LogicalImageContainer)`
    display: flex;
    align-items: center;
    width: ${props => props.width || "100px"};

    img{
        width: 100%;
        height: 100%;
    }
`

export const BannerContainer = styled(ImageContainer)`
    width: 100%;
    
`