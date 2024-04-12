import React, { useContext } from "react";
import { ShoppingCartContext } from "@/Context";

const Searcher = () => {
  const { setSearchByTitle } = useContext(ShoppingCartContext);

  return (
    <div>
      <input
        type="text"
        placeholder="Search your Products"
        className="rounded-lg border border-black w-80 p-4 mb-4 focus:outline-none"
        onChange={(event) => setSearchByTitle(event.target.value)}
      />
    </div>
  )
}

export default Searcher;