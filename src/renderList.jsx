import { products } from "../models/products"
import {container} from "../cssmodules/renderlist.module.css"
export default function RenderList() {
const productlist= products.map(p=>{
    return (
        <div key={p.id} >
      <div>id: {p.id}</div>  
      <div>name: {p.name}</div>  
      <div>price: {p.price}</div> 
      </div> 
    )
})
  return (
    <div className={container}>
<h1>MY FOOD PRODUCTS</h1>
      {productlist}
    </div>
  )
}
