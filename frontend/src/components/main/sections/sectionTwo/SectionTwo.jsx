import React from "react";

import { ChevronLeft, ChevronRight } from "lucide-react";

import harris from "../../../../assets/images/male2chef.png"
import hannah from "../../../../assets/images/female1chef.png"
import cake from "../../../../assets/images/chocolate-cake_slice2.jpg"
import donutsStack from "../../../../assets/images/delicious_donuts.png"
import roundedFilledDonuts from "../../../../assets/images/Fudge-Donuts2.jpg"

const donutsData = [
  {
    id: 1,
    title: "Rounded Filled Donuts",
    description:
      "A fudge milk-filled donut is a delectable treat that combines the classic appeal of a donut with the rich, creamy goodness of fudge milk. The donut, typically made from a soft, airy dough, is deep-fried or baked to achieve a golden, crispy exterior.",
    image: "../../../../assets/images/Fudge-Donuts2.jpg",
  },
  {
    id: 2,
    title: "Rounded Filled Donuts",
    description:
      "A fudge-rich-filled donut variant that enhances the classic appeal of a donut with its soft, airy goodness of sugar rush.",
    image: "../../../../assets/images/donuts-recheado.jpg",
  },
  {
    id: 3,
    title: "Rounded Filled Donuts",
    description:
      "A fudge milk-filled donut is a delectable treat that combines the classic appeal of a donut with the rich, creamy goodness of fudge milk. The donut, typically made from a soft, airy dough, is deep-fried or baked to achieve a golden, crispy exterior.",
    image: "../../../../assets/images/chocolate-donut.png",
  },
  {
    id: 4,
    title: "Rounded Filled Donuts",
    description:
      "A classic vanilla-filled donut with a sweet glaze for a perfect treat.",
    image: "../../../../assets/images/various-donuts.png",
  },
  {
    id: 5,
    title: "Rounded Filled Donuts",
    description:
      "A classic vanilla-filled donut with a sweet glaze for a perfect treat.",
    image: "../../../../assets/images/fudge-brownies.jpg",
  },
  {
    id: 6,
    title: "Rounded Filled Donuts",
    description:
      "A classic vanilla-filled donut with a sweet glaze for a perfect treat.",
    image: "../../../../assets/images/stack-chocolate-cookie.png",
  },
  {
    id: 7,
    title: "Rounded Filled Donuts",
    description:
      "A classic vanilla-filled donut with a sweet glaze for a perfect treat.",
    image: "../../../../assets/images/churros2.jpg",
  },
  {
    id: 8,
    title: "Rounded Filled Donuts",
    description:
      "A classic vanilla-filled donut with a sweet glaze for a perfect treat.",
    image: "../../../../assets/images/cupcake.jpg",
  },
];

console.log(donutsData)

export default function SectionTwo() {
  return(
    <section>
      <div>
        <h2 className="text-base text-white uppercase ml-2 pb-2">
          Trending Topics
        </h2>

        <div className="p-2 flex gap-6 bg-[#D9D9D9] w-auto h-24">
          {Array.from({ length: 6 }).map((_, i) => (
            <React.Fragment key={i}>
              <img 
                src={ cake }  
                alt="Chocolate cake slice" 
                className="w-16 h-20 rounded-full ml-4" 
              />

              <img 
                src={ donutsStack } 
                alt="Delicious donuts stack" 
                className="w-16 h-20 rounded-full ml-4" 
              />
            </React.Fragment>
          ))}
            
        </div>
      </div>

      <div className="flex gap-2 justify-center pt-4 flex-wrap">
        {Array.from({ length: 6 }).map((_, i) => (
          <React.Fragment key={i}>
            <div className="max-w-xs rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 bg-white ml-8 mt-8">
              <img
                src={ roundedFilledDonuts }
                alt="Rounded Filled Donuts"
                className="w-full h-40 object-cover"
              />

              <div className="p-4">
                <h3 className="font-bold text-lg text-black uppercase">
                  Rounded Filled Donuts
                </h3>

                <p className="text-sm text-black mt-2">
                  A fudge milk-filled donut is a delectable treat that combines the classic appeal of a donut with the rich, creamy goodness of fudge milk.
                </p>

                <button 
                  type="button" 
                  className="w-full bg-gradient-to-r from-orange to-red text-white font-semibold py-2 mt-4 rounded-3xl shadow-md hover:shadow-yellowOrange transition"
                  onClick={() => console.log()}
                >
                  ORDER NOW
                </button>
              </div>
            </div>
          </React.Fragment>
        ))}
      </div> 
      
      <div className="flex-col">
        <div className="flex gap-12 justify-center pt-24">
          <button 
            type="button"
            onClick={() => console.log()}
          >
            <ChevronLeft className="text-blue mt-8 w-14 h-14 hover:text-sky-600" />
          </button>

          <MaleChefCard />
          <FemaleChefCard />

          <button 
            type="button"
            onClick={() => console.log()}
          >
            <ChevronRight className="text-blue mt-8 w-14 h-14 hover:text-sky-600" />
          </button>
        </div>

        <div className="flex gap-2 justify-center mt-12">
          <div className="p-2 rounded-full bg-sky-200" />
          <div className="p-2 rounded-full bg-blue" />
          <div className="p-2 rounded-full bg-sky-200" />
          <div className="p-2 rounded-full bg-sky-200" />
        </div>
      </div>
    </section>
  );
}

export function MaleChefCard() {
  return (
    <div className="max-w-xs bg-white rounded-3xl shadow-lg overflow-hidden">
      <div className="bg-blue px-6 py-10 text-center rounded-b-3xl">
        <div className="relative w-24 h-24 mx-auto rounded-full border-4 border-white overflow-hidden">
          <img
            src={harris}
            alt="David K. S. Harris"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="flex justify-center mt-2">
          {Array(5).fill("⭐").map((star, index) => (
            <span key={index} className="text-yellow text-lg">
              {star}
            </span>
          ))}
        </div>
      </div>

      <div className="p-6 text-center">
        <h3 className="text-lg font-bold text-black">
          DAVID K. S. HARRIS
        </h3>

        <p className="text-black text-sm mt-2">
          Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
          consectetur, adipisci velit long established fact that a reader will
          be distracted by the readable content of a page when looking at its
          layout.
        </p>

        <button 
          type="button"
          className="mt-4 px-6 py-2 bg-blue text-white rounded-full font-semibold hover:bg-sky-600 transition"
          onClick={() => console.log()}
        >
          View more
        </button>
      </div>
    </div>
  );
}

export function FemaleChefCard() {
  return (
    <div className="max-w-xs bg-white rounded-3xl shadow-lg overflow-hidden">
      <div className="bg-pink px-6 py-10 text-center rounded-b-3xl">
        <div className="relative w-24 h-24 mx-auto rounded-full border-4 border-white overflow-hidden">
          <img
            src={hannah}
            alt="HANNAH MARVIN J."
            className="w-full h-full object-cover"
          />
        </div>

        <div className="flex justify-center mt-2">
          {Array(5).fill("⭐").map((star, index) => (
            <span key={index} className="text-yellow text-lg">
              {star}
            </span>
          ))}
        </div>
      </div>

      <div className="p-6 text-center">
        <h3 className="text-lg font-bold text-black">
          HANNAH MARVIN J.
        </h3>

        <p className="text-black text-sm mt-2">
          Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
          consectetur, adipisci velit long established fact that a reader will
          be distracted by the readable content of a page when looking at its
          layout.
        </p>

        <button 
          type="button"
          className="mt-4 px-6 py-2 bg-pink text-white rounded-full font-semibold hover:bg-[#DB2777] transition"
          onClick={() => console.log()}
        >
          View more
        </button>
      </div>
    </div>
  );
}
