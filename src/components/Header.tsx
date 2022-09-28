const Header = () => {
  return (
    <>
      <div className="bg-[url('./img/1.jpg')] h-2/5 lg:h-3/5 bg-cover py-3 text-white">
        <div className="md:flex justify-between items-center">
          <div className="w-28 mx-auto md:mx-7 lg:w-56">
            <img src="./img/logo.png" alt="" />
          </div>

          <div className="flex flex-col md:flex-row md:justify-around items-center lg:text-2xl my-5 font-semibold mx-4">
            <a className="px-2 lg:px-10" href="#">Inicio</a>
            <a className="px-2 lg:px-10" href="#">Nosotros</a>
            <a className="px-2 lg:px-10" href="#">Servicios</a>
            <a className="px-2 lg:px-10" href="#">Blog</a>
            <a className="px-2 lg:px-10" href="#">Contacto</a>
          </div>
        </div>
        <div className="flex flex-col items-center mt-16 md:mt-40 lg:mt-80">
          <h1 className="text-2xl md:text-4xl font-bold lg:text-5xl">Vive en armonia</h1>
          <h2 className="text-xs md:text-sm lg:text-lg">Despierta el arte que está en ti</h2>
        </div>
      </div>
    </>
  )
}

export default Header