import styled from "styled-components"
import Book from "../Book"
import booksDB from "../Search/books.js";

const Title = styled.h2`
    color: #FFF;
    font-size: 42px;
    text-align: center;
    width: 100%;
`

const SubTitle = styled.h3`
    color: #FFF;    
    font-size: 22px;
    font-weight: 500;
    margin-bottom: 40px;
    text-align: center;
`

const BooksContent = styled.div`
    display: flex;
    gap: 15px;
    justify-content: center;
    flex-direction: column;
    margin-top: 30px;
`

const BooksSection = styled.section`
  display: flex;
  gap: 16px;
  justify-content: center;
  flex-wrap: wrap;
  border-top: 1px solid #FFF;
  padding-top: 40px;
`

export default function Books() {
    return (
        <BooksContent>
            <Title>Aqui estão todos os livros disponiveis</Title>
            <SubTitle>Divirta-se com nossa estante virtual</SubTitle>

            <BooksSection>
            {booksDB?.map((book) => { 
                return (
                <Book key={book.id} book={book} />
                ); 
            })}
            </BooksSection>
        </BooksContent>
    )
}