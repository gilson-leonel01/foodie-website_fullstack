import { ArrowLeft, ArrowRight } from "lucide-react";

import img from "../../../../assets/images/Glazed-Donuts1.jpg";

export default function SectionOne() {
  return(
    <section className="flex flex-col justify-center">
      <div className="text-3xl text-center font-serif font-bold flex flex-col gap-2">
        <h2 className="text-red">Are you hungry?</h2>

        <h3 className="text-yellowOrange">Or looking for something to eat?</h3>

        <p className="text-green text-xs">
          Countless food-shaped charms to satisfy your sweet tooth, satisfy your <span className="block indent-80">craving now!!!</span>
        </p>
      </div>

      <div className="flex justify-center gap-32 p-20">
        <div className="flex flex-col gap-8">
          <h3 className="font-serif font-bold text-2xl text-yellowOrange">
            Donuts
          </h3>

          <p className="text-lg text-white max-w-xs tracking-widest space-y-4">
            Deliciously indulgent, donuts are a beloved part of culinary culture, ranging from classic glazed varieties to inventive flavors. Often fried or baked to golden perfection, a donut is a delectable treat that combines its classic appeal with the rich, creamy goodness of fudge milk. Typically made from soft, airy dough, donuts are deep-fried or baked to achieve a golden, crispy exterior.
          </p>

          <a href="/" className="text-red text-base hover:text-[#C20505]">Learn more</a>
        </div>

        <div className="relative flex items-center justify-center">
          <button 
            type="button" 
            onClick={() => console.log()}
          >
            <div className="absolute right-0 text-white w-10 h-10 z-10 mr-60 p-2 rounded-full bg-red hover:bg-[#C20505]">
              <ArrowLeft />
            </div>            
          </button>

          <img 
            src={ img } 
            alt="Glazed Donuts" 
            className="w-64 h-96 -rotate-12 rounded-2xl"
          />

          <button 
            type="button" 
            onClick={() => console.log()}
          >
            <div className="absolute left-0 text-white w-10 h-10 ml-60 p-2 rounded-full bg-red hover:bg-[#C20505]">
              <ArrowRight />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
}
