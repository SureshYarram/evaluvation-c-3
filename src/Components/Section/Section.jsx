import { useParams } from "react-router";
import { useState, useEffect } from "react";
import axios from "axios";
import { BookCard } from "../BookCard/BookCard";
import { SortAndFilterButtons } from "../SortAndFilterButtons/SortAndFilterButtons";
import styled from "styled-components";

export const Section = () => {
  // you will receive section name from URL here.
  // Get books for only this section and show
  //   Everything else is same as Home page

  const Main = styled.div`
    /* Same as Homepage */
  `;
   
  const { section } = useParams();

  const [sectionbook, setSectionbook] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:8080/books`).then((res) => {
      setSectionbook(res.data);
    });
  }, [section]);

  const handleSort = (title,value)=>{
    if(title === "price" && value === 1) setSectionbook(prev=>[...prev.sort((a,b)=>a.price-b.price)])
    else if(title === "price" && value === -1) setSectionbook(prev=>[...prev.sort((a,b)=>b.price-a.price)])
    else if(title === "title" && value === -1) setSectionbook(prev=>[...prev.sort((a,b)=>{if(a.title>b.title)return -1})])
    else if(title === "title" && value === 1) setSectionbook(prev=>[...prev.sort((a,b)=>{if(b.title>a.title)return -1})])
  }
  return (
    <>
      <h2 style={{ textAlign: "center" }}>
        {
         section
        }
         
      
      </h2>
      <SortAndFilterButtons handleSort={handleSort} />

      <Main className="sectionContainer">
        {/* SHow same BookCard component here, just like homepage but with books only belong to this Section */}

        {sectionbook
          .filter((a) => (section === a.section ? true : false))
          .map((el) => (
            <BookCard
              style={{ height: "250px", width: "300px", margin: "1%" }}
              id={el.id}
              imageUrl={el.imageUrl}
              title={el.title}
              price={el.price}
            />
          ))}
      </Main>
    </>
  );
};
