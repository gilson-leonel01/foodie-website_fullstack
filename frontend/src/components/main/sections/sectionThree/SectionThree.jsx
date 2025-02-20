import { Plus } from "lucide-react";

export default function SectionThree() {
  return(
    <section className="flex flex-col justify-center mt-24">
      <h2 className="text-white text-lg font-bold p-2 text-center">
        What is lorem yamel um lorem ipsum  text of industry?
        <br />
        Lorem stur porued is simply dummy text of industry in the 1960s release
      </h2>

      <div className="flex gap-2 p-2 items-center">
        <p className="text-orange text-base text-center">
          Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type andpe and scrambled It was, d scrambled It was popularised in the 1960s with the release of Letraset sheets containing.he 1500s, when an unknown printer took a galley of type.
        </p>

        <div className="flex flex-col gap-8 items-center">
          <div className="flex gap-2">
            <div className="w-px bg-yellowOrange mx-6 h-auto"></div>
            <p className="text-white">
              What is lorem ipsum lorem ipsum is simply dummy text of industry?
            </p>
          </div>
          
          <div className="flex gap-2">
            <div className="w-px bg-yellowOrange mx-6 h-auto"></div>
            <p className="text-white">
              What is lorem ipsum lorem ipsum is simply dummy text of industry?
            </p>
          </div>
          
          <div className="flex gap-2">
            <div className="w-px bg-yellowOrange mx-6 h-auto"></div>
            <p className="text-white">
              What is lorem ipsum lorem ipsum is simply dummy text of industry?
            </p>
          </div>
        </div>
      </div>
      
      <div className="flex flex-col gap-8 items-center">
        <h4 className="text-white text-2xl font-bold font-serif uppercase">
          Faqs
        </h4>

        <div className="p-4 mr-8 ml-8 w-[550px] bg-[#828282] bg-opacity-15 rounded-2xl flex justify-between">
          <p className="text-white ml-2">
            Do you have the nutrition information for your recipes?
          </p>  

          <button
            type="button"
            onClick={() => console.log()}
          >
            <Plus className="text-white mr-2 hover:text-gray" /> 
          </button>     
        </div>  

        <div className="p-4 mr-8 ml-8 w-[550px] bg-[#828282] bg-opacity-15 rounded-2xl flex justify-between">
          <p className="text-white ml-2">
            Do you have the nutrition information for your recipes?
          </p>  

          <button
            type="button"
            onClick={() => console.log()}
          >
            <Plus className="text-white mr-2 hover:text-gray" /> 
          </button>     
        </div> 

        <div className="p-4 mr-8 ml-8 w-[550px] bg-[#828282] bg-opacity-15 rounded-2xl flex justify-between">
          <p className="text-white ml-2">
            How should I adjust the recipe for high altitude?
          </p>  

          <button
            type="button"
            onClick={() => console.log()}
          >
            <Plus className="text-white mr-2 hover:text-gray" /> 
          </button>     
        </div> 
      </div>
    </section>
  );
}
