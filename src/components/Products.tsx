import { interfaceProducts } from "../interface/product.interface";

interface MyProps{
  data: interfaceProducts
}

const Products = ({data:{description, img, title}}: MyProps) => {
  return (
    <>
      <div className="w-80 lg:w-96 bg-slate-300 rounded-lg">
        <div>
          <img className="rounded-t-lg" src={img} alt="img__product" />
        </div>
        <div className="p-4">
          <h2 className="font-bold mb-2">{title}</h2>
          <p className="text-justify">{description}</p>
        </div>
      </div>
    </>
  );
};

export default Products;
