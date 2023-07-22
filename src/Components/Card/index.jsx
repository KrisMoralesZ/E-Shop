import React from "react";

const Card = () => {
  return (
    <div className="bg-white cursor-pointer w-56 h-60 rounded-lg">
      <figure className="relative mb-2 w-full h-4/5">
        <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5">Electronics</span>
        <img className="w-full h-full object-cover rounded-lg" src="https://images.pexels.com/photos/17587567/pexels-photo-17587567/free-photo-of-blanco-y-negro-ciudad-persona-calle.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        <div className="absolute top-0 right-0 justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1">
          +
        </div>
        <p className="flex justify-between">
          <span className="text-sm font-light">Headphones</span>
          <span className="text-lg font-medium">$300</span>
        </p>
      </figure>
    </div>
  )
}

export default Card