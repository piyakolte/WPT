import Header from "./Header";
import {Footer} from "./Footer";
import{useLocation} from "react-router-dom";
import { useState,useEffect } from "react";
import { ProductCard } from "./ProductCard";
import { useSelector } from "react-redux";

export  function Product()
{
  const location= useLocation();
  const[products,setProducts]=useState([]);
  const user=useSelector((state)=>state.loginReducer.user)


useEffect(()=>
{
setProducts([{name:"Bag 1",price:"600",image:"image5.jpg"},
    {name:"Bag 2",price:"600",image:"image1.jpg"},
    {name:"Bag 3",price:"600",image:"image2.jpg"},
    {name:"Bag 4",price:"600",image:"image3.jpg"},
    {name:"Bag 5",price:"600",image:"image4.jpg"},

                    
])
},[])

  return(<>
    <Header/>
    <h1>{user}</h1>

    {/* <svg id="wave" style={{transform:"rotate(0deg)",transition:"0.3s"}} viewBox="0 0 1440 490" /> */}
    {/* <h1>Product{location.state.name}</h1> */}
    <div>
        {products.map((p,i)=>
    {
        return< ProductCard key={i} 
                name={p.name} 
                images={p.image}
                price={p.price} />
        })}
    </div>
    <Footer/>

</>)
}