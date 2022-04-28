import React from "react";
import { Link } from "react-router-dom";
import styled  from "styled-components";
export const Flex = styled.div`
//  add required style
box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
padding: 15px;
`;
export const BookCard = (props) => {
  const { id, title, isbn, pageCount, thumbnailUrl } = props;
  return (
    <>
    <Link to = {`/books/${id}`}>
      <Flex >
        <img src={thumbnailUrl} alt={title} height = "200px" width={"200px"} />
        <h3>{title}</h3>
        <h4>{isbn}</h4>
      </Flex>
    </Link>
    </>
  );
};
