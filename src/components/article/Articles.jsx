import articles from "../../assets/articles.json"

import {
    ArticlesStyled,//Cobre todos os artigos
    ArticleStyled,//Cobre um artigo
    ArticleThumbContentStyled, //Cobre o componente de imagem
    ArticleThumbStyled,// Componente de imagem
    ArticleContentStyled //Cobre o conteúdo do artigo (título e preview)
} from './ArticleStyles'

function Articles(){
    
    return(
        <ArticlesStyled>
            {
                articles.map((article) => ( //objeto
                    <ArticleStyled key={article.id}>
                        <ArticleThumbContentStyled>
                            <ArticleThumbStyled src={article.url} alt={article.alt} />
                        </ArticleThumbContentStyled>

                        <ArticleContentStyled>
                            <h2>{`0${article.id + 1}`}</h2>
                            <h2>{article.title}</h2>
                            <p>{article.preview}</p>
                        </ArticleContentStyled>
                    </ArticleStyled>
                ))
            }
        </ArticlesStyled>

    )
}

export default Articles;