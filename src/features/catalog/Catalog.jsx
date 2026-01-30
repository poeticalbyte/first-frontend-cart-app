import { useEffect, useState } from "react";
import { getProducts } from "./productService.js";
import { CatalogItem } from "./CatalogItem";

export const Catalog = ({ handler }) => {

  const [ products, setProducts ] = useState([]);
  const [ isLoading, setIsLoading ] = useState(true); 

  const findAll = async () => {
    const prods = await getProducts();
    setProducts(prods);
    setIsLoading(false);
  };

  useEffect(
      () => {
        findAll();
    }, []);

  return (
    <>
      {
        isLoading && <div className="alert alert-info">Loading...</div>
      }
      <div className="row">
        { products.map(prod => (
          <div className="col-4 my-2" key={prod.id}>
            <CatalogItem 
              handler={ handler }
              id={prod.id}
              name={prod.name} 
              description={prod.description} 
              price={prod.price} 
            />
          </div>)) }

      </div>
    </>
  );
}