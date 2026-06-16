import styled from "styled-components";
import Input from "../Input";

import { useEffect, useState } from "react";
import Book from "../Book/index.jsx";
import {getLivros} from '../../service/livros.js'


const SearchContext = styled.section`
  color: #FFF;
  text-align: center;
  padding: 85px 0;
  height: 270px;
  width: 100%;
  justify-content: center;
`

const Title = styled.h2`
color: #FFF;
font-size: 42px;
text-align: center;
width: 100%;
`

const SubTitle = styled.h3`
font-size: 22px;
font-weight: 500;
margin-bottom: 40px;
`

const BooksSection = styled.section`
  display: flex;
  justify-content: center;
  gap: 16px;
  flex-wrap: wrap;
  margin-top: 40px;
  border-top: 1px solid #FFF;
  padding-top: 40px;
`

export default function Search() {
  const [books, setBooks] = useState([]);
  const [booksAPI, setBooksAPI] = useState([])
  
  useEffect(() => {
    const fetchBooks = async () => {
      const response = await getLivros()
      console.log(response);
      
      setBooksAPI(response)
    }
    fetchBooks()
  }, [])


  const handleSearch = (e) => {
    const value = e.target.value;
    if (value.length > 3) {
      const filteredBooks = booksAPI.filter(book => {
        console.log(book);
        return book.nome.toLowerCase().includes(value.toLowerCase());
      });
      setBooks(filteredBooks);
    } else {
      setBooks([]);
    }

  };

  return (
    <SearchContext>
      <Title>Já sabe por onde começar?</Title>
      <SubTitle>Encontre seu livro em nossa estante</SubTitle>
      <Input 
        placeholder="Escreva sua proxima leitura"
        onChange={handleSearch}
      />
      <BooksSection>
        {books?.map((book) => { 
          return (
            <Book key={book.id} book={book} />
          ); 
        })}
      </BooksSection>
    </SearchContext>
  );
}