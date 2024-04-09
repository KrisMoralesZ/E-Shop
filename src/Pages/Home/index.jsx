import React, { useEffect, useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import Layout from "../../Components/Layout";
import Card from "../../Components/Card";
import ProductDetails from "../../Components/ProductDetails";

const Home = () => {
  const {
    items,
    filteredItems,
    searchByTitle,
    searchByCategory,
    setItems,
    setFilteredItems,
    setSearchByTitle,
  } = useContext(ShoppingCartContext)

  useEffect(() => {
    fetch('https://api.escuelajs.co/api/v1/products')
      .then(response => response.json())
      .then(data => setItems(data))
  }, []);

  const filteredItemsByTitle = (items, searchByTitle) =>
    items?.filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()));

  const filteredItemsByCategory = (items, searchByCategory) =>
    items?.filter(item => item.category.name.toLowerCase().includes(searchByCategory.toLowerCase()));

  useEffect(() => {
    if (searchByTitle) {
      setFilteredItems(filteredItemsByTitle(items, searchByTitle));
    }

    if (searchByCategory) {
      setFilteredItems(filteredItemsByCategory(items, searchByCategory));
    }
  }, [items, searchByTitle, searchByCategory]);

  const showFilteredItems = searchByTitle || searchByCategory;

  return (
    <Layout>
      <div className="flex w-80 items-center relative justify-center">
        <h1 className="font-medium text-xl">Home</h1>
      </div>
      <input
        type="text"
        placeholder="Search your Products"
        className="rounded-lg border border-black w-80 p-4 mb-4 focus:outline-none"
        onChange={(event) => setSearchByTitle(event.target.value)}
      />
      <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
        {showFilteredItems ?
          filteredItems?.map(filteredItem => (
            <Card key={filteredItem.id} data={filteredItem} />
          )) :
          items?.map(item => (
            <Card key={item.id} data={item} />
          ))}
      </div>
      <ProductDetails />
    </Layout>
  )
}

export default Home;
