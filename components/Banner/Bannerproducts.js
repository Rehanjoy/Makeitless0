import React from 'react'

function Bannerproducts() {
  return (
    <div>
                  <section className="bg-white dark:bg-gray-100">
        <div className="container px-6 py-1 mx-auto text-center relative">
          <div className="flex justify-center mt-10">
            <img
              className="aspect-[3/2] w-full rounded-lg bg-gray-50 object-cover lg:aspect-auto lg:h-[400px]"
              
              src="https://res.cloudinary.com/dcpte972l/image/upload/v1687610880/1162588_mcd3gi.jpg"
              alt="Hero Image"
            />

            <div className="absolute inset-0 flex items-center justify-center">
              <div className="max-w-lg mx-auto bg-stone-500 bg-opacity-25 p-6 rounded-lg">
                <div className="justify-center items-center">
                  <h1>Products</h1>
                  <p>Canva se image ko change krnahoga </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default Bannerproducts
