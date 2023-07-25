import { styled } from "styled-components";
import LogicalArticleItem from "./LogicalArticleItem";

export const ArticleItem = styled(LogicalArticleItem)`
    display: flex;
    img{
        min-width: 100px;
    }
    h3{
        font-weight: bold;
    }
`