const Footer = () => {
  return (
    <>
      <div className="grid justify-items-center bg-[url('./img/fondoFooter2.jpg')]">
        <h1 className="text-white text-2xl mt-4">Nuestros Clientes</h1>
        <div>
          <div className="grid grid-cols-4 m-5">
            <img src="./img/footer1.png" alt="img_brand" />
            <img src="./img/footer2.png" alt="img_brand" />
            <img src="./img/footer3.png" alt="img_brand" />
            <img src="./img/footer4.png" alt="img_brand" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer