
import './App.css'
import './styles/products.scss'
import ProductsCard from "./components/ProductsCard";
import MyForm from "./components/MyForm";

function App() {

  const products = [
    {
      id: 1,
      name: "iphone 11",
      price: 1000,
      image: "../src/assets/images/iphone11.png",
    },
    {
      id: 2,
      name: "iphone 12",
      price: 1500,
      image: "../src/assets/images/iphone12.png",
    },
    {
      id: 3,
      name: "iphone 13",
      price: 2000,
      image: "../src/assets/images/iphone13.png",
    },
    {
      id: 4,
      name: "iphone 14",
      price: 3000,
      image: "../src/assets/images/iphone13.png",
    },
  ];

  return (
    <>
  


     
   <div className="flex">
   <MyForm/>


  {/* -----------product */}
  <div className="productsCard">
    {products.map((item) => {
      return <ProductsCard key={item.id} data={item} />;
    })}
  </div>
 
   </div>

  
    </>
  );
}

export default App
