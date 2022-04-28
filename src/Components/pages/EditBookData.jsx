import axios from "axios";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { Input } from "./Login";

// add style for form
export const Form = styled.form`
`;
// add style for text area
export const Textarea = styled.textarea`

`;

export const EditBookData = () => {
  const navigate = useNavigate()

  const {id} = useParams()
const [data,setData] = useState({})

  const handleUpdate = (e) => {
    
    e.preventDefault();

    axios.patch(`http://localhost:8080/books/${id}`,data).then((response) => {
      navigate(-1)
    })
    // make a PATCH request to http://localhost:8080/books/${id} and update thubnail and long description fields
    // on successfull request navigate to previous page
  };


  const handle = (e) => {
    const {id,value} = e.target
    setData({
      ...data,
      [id]:value
    })

  }

  return (
    <>
      <Form onSubmit={handleUpdate}>
        <Input onChange={handle}
          data-testid="update-form-thumbnail"
          placeholder="Enter updated thumbnail url"
          id="thumbnailUrl"
        />
        <Textarea onChange={handle}
          data-testid="update-form-description"
          placeholder="Update long Description"
          id="longDescription"
        />
        <Input dat-testid="update-form-submit" type="submit" value="Update" />
      </Form>
    </>
  );
};
