import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { BookCard } from "./BookCard";
import styled, { css } from "styled-components";

export const Grid = styled.div`
  display:grid;
  grid-template-columns: repeat(3,25%);
  grid-gap: 15px;
  justify-content: center;

`;

const Books = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    // make a GET request to http://localhost:8080/books to get all the books data
    axios.get("http://localhost:8080/books").then((response) => {
      setData(response.data)
      
    })
  }, []);

  return (
    <>
      <h1>Books</h1>
      <Grid data-testid="books-container">
        {/* {!!data && 
          // map thorugh the data and use <BookCard/> component to display each book
          } */}
          {data.map((book) =><BookCard key={book.id} id={book.id} title={book.title} isbn={book.isbn} pageCount={book.pageCount} thumbnailUrl={book.thumbnailUrl}/>)}
      </Grid>
    </>
  );
};
export default Books;
