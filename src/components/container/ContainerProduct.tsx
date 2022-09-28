import { dataProducts } from "../../data/product.data"
import Products from "../Products"

const ContainerProduct = () => {
  return (
    <>
      <h1 className="my-5 font-bold text-2xl text-center">Nuestros productos</h1>
      <div className="grid gap-10 justify-center md:grid-cols-2 justify-items-center lg:grid-cols-3 mx-10 mb-8">
        {dataProducts.map((p, index)=>(
        <Products key={index} data={p}/>
        ))}
      </div>
    </>
  )
}

export default ContainerProduct