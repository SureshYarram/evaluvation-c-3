export const SortAndFilterButtons = ({ handleSort }) => {
  return (
    <div className="sortButtons">
      {/*
        Create 4 sorting buttons here to sort by following criteria:

        sort title in Ascending order  class: sortByTitleAsc
        sort title in Descending order class: sortByTitleDesc
        sort price asending order      class: sortByPriceAsc
        sort price descending order    class: sortByPriceDesc

        on every button click, call the reusable sorting function
        you received from Parent component, 
        and sort the data.
        

      */}
     
      <button className="sortByTitleAsc" onClick={()=>handleSort("title",1)}>Ascending order</button>
      <button className="sortByTitleDesc" onClick={()=>handleSort("title",-1)}>Descending order</button>
      <button className="sortByPriceAsc" onClick={()=>handleSort("price",1)}>asending order</button>
      <button className="sortByPriceDesc" onClick={()=>handleSort("price",-1)}>descending order</button>
      
    </div>
  );
};
