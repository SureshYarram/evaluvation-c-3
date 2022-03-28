import axios from "axios";
import { useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import styled from "styled-components";


export const BookDetailsPage = () => {
  // Get book details based on ID whenever user lands on the page
  // ID will come from route

  const [book, setBook] = useState(null);

  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    getBook();
  }, []);

  const getBook = () => {
    axios.get(`http://localhost:8080/books/${id}`).then((res) => {
      setBook(res.data);
    })
  };
  const Main = styled.div`
    /* Apply some responsive styling to children */
    margin: auto;
    text-align:center;
    & li{
      list-style:none;
    }
  `;

  if( id > 20 ){
    return <Navigate to={"*"}/>
  }

  if (book === null) {
    return null;
  }
  
  return (
    <>
      <Main className="bookContainer">
        <h2 className="title">{book.title}</h2>
        <img className="image" src={book.imageUrl} alt="#" />
        <div className="author">{book.auther}</div>
        <div className="description">{book.description}</div>
        <div className="price">{book.price}</div>
        <div className="section">{book.section}</div>
        <div className="isbnNumber">{book.isbnNumber}</div>
        <ul className="reviews">
          {book.reviews.map((e) => (
            <li>{e}</li>
          ))}
          {/* Reviews will be an array, iterate over them and create a new <li> for every review */}
        </ul>
      </Main>
    </>
  );
};

