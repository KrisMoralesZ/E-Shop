import React, { useEffect, useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import { apiCall } from "../../assets/helpers/apiCall";
import Layout from "../../Components/Layout";
import ProductCard from "../../Components/ProductCard";
import CheckOutSideMenu from "../../Components/CheckOutSideMenu/CheckOutSideMenu";
import ProductDetails from "../../Components/ProductDetails";
import Searcher from "../../Components/Searcher";

const Home = () => {
  const {
    items,
    filteredItems,
    searchByTitle,
    searchByCategory,
    setItems,
    setFilteredItems
  } = useContext(ShoppingCartContext);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await fetch(apiCall);
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        const data = await response.json();
        console.log('@@@@', data)
        setItems(data)
      } catch (error) {
        console.error('Error fetching products:', error);
        throw error;
      }
    };

    getProducts()
  }, [])

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
      <Searcher />
      <div className="flex flex-wrap gap-4 w-full max-w-screen-lg">
        {showFilteredItems ?
          filteredItems?.map(filteredItem => (
            <ProductCard key={filteredItem.id} data={filteredItem} />
          )) :
          items?.map(item => (
            <ProductCard key={item.id} data={item} />
          ))}
      </div>
      <CheckOutSideMenu />
      <ProductDetails />
    </Layout>
  )
}

export default Home;
