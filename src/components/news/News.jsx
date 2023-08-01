import news from '../../assets/news.json'
import {
    NewsStyled,
    NewContentStyle
} from './NewsStyled'

function News(){
    return (
        <NewsStyled>
            <h1>New</h1>
            
            <div id="newsContainer">
               { news.map((uniqueNew, i) => (
                    <NewContentStyle key={uniqueNew.id}>
                        <h2>{uniqueNew.title}</h2>
                        <p>{uniqueNew.description}</p>
                        {i != 2 && <hr />}
                    </NewContentStyle>
                ))
                }
            </div>
            

        </NewsStyled>
    )
}

export default News;