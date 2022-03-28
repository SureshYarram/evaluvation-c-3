import { BookCard } from "../BookCard/BookCard";
import { SortAndFilterButtons } from "../SortAndFilterButtons/SortAndFilterButtons";
import { useState,useEffect } from "react";
import axios from "axios"
import styled from "styled-components";
export const Home = () => {
  // get all books when user lands on the page
  // populate them as mentioned below
    const [book, setBook] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/books").then((res) => {
      setBook([...res.data]);
    });
  }, []);



  const Main = styled.div`
    /* Apply some responsive styling to children */
  `;

  const handleSort = (title,value)=>{
    if(title === "price" && value === 1) setBook(prev=>[...prev.sort((a,b)=>a.price-b.price)])
    else if(title === "price" && value === -1) setBook(prev=>[...prev.sort((a,b)=>b.price-a.price)])
    else if(title === "title" && value === -1) setBook(prev=>[...prev.sort((a,b)=>{if(a.title>b.title)return -1})])
    else if(title === "title" && value === 1) setBook(prev=>[...prev.sort((a,b)=>{if(b.title>a.title)return -1})])
  }

  return (
    <div className="homeContainer">
      <h2 style={{ textAlign: "center" }}>Home</h2>
      <SortAndFilterButtons
        handleSort={handleSort}
      />

      <Main className="mainContainer">
        {/* 
            Iterate over books that you get from network
            populate a <BookCard /> component
            pass down books id, imageUrl, title, price and anything else that you want to 
            show in books Card.
        */}
        {book.map((el) => (
          <BookCard
            style={{ height: "250px", width: "300px", margin: "1%" }}
            id={el.id}
            imageUrl={el.imageUrl}
            title={el.title}
            price={el.price}
          />
        ))}
      </Main>
    </div>
  );
};
