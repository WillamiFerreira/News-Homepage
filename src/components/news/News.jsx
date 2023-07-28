import news from '../../assets/news.json'
import {
    NewsStyled,
    NewContentStyle
} from './NewsStyled'

function News(){
    return (
        <NewsStyled>
            <h1>New</h1>
            {
                news.map((uniqueNew) => (
                    <NewContentStyle key={uniqueNew.id}>
                        <h2>{uniqueNew.title}</h2>
                        <p>{uniqueNew.description}</p>
                    </NewContentStyle>
                ))
            }

        </NewsStyled>
    )
}

export default News;