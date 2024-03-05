import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "@/components/Footer";

const ourTeam = () => {
  return (
    <>
      <Navbar />
      <section className="mb-60">
        <div className="xl:container mx-auto px-12 mt-10">
          <div className="grid grid-cols-2 gap-x-10 gap-y-32 lg:gap-y-40 xl:gap-y-64 sm:grid-cols-4">
                <div className="relative">
                    <div className=" border-2 border-pink rounded-[50%] w-3/4 p-3 ">
                        <img
                        src="/rp1.png"
                        alt="image"
                        className=" mx-auto rounded-full "
                        />
                    </div>
                    
                    <div>
                        <div className="h-[130px] w-[2px] bg-pink ml-[38%]"> </div>
                       
                        <div className=" teamInfo absolute left-20 sm:left-16 md:left-24 lg:left-28 xl:left-32 2xl:left-40 text-sm md:text-base lg:text-lg">
                            <p>amr al aseel</p>
                            <p className="font-bold lg:whitespace-nowrap">Senior Accountant</p>
                        </div>

                        <div className="ml-[34.4%] bg-pink w-[20px] h-[20px] rounded-[50%] "></div>
                       
                    </div>
                    
                </div>

                {/* <div className="relative">
                    <div className=" border-2 border-pink rounded-[50%] w-3/4 p-3 ">
                        <img
                        src="/rp1.png"
                        alt="image"
                        className=" mx-auto rounded-full "
                        />
                    </div>
                    <div className="  border-pink border-r h-[60%] w-[38%]">
                        <div className="absolute teamInfo left-20 sm:left-16 md:left-24 lg:left-28 xl:left-32 2xl:left-40 text-sm md:text-base lg:text-lg">
                            <p>amr al aseel</p>
                            <p className=" font-bold lg:whitespace-nowrap">Senior Accountant</p>
                        </div>
                    </div>
                    <div className="ml-[35.5%] bg-pink w-[5%] h-[6.5%] rounded-[50%] "></div>
                </div>

                <div className="relative">
                    <div className=" border-2 border-blue-500 rounded-[50%] w-3/4 p-3 ">
                        <img
                        src="/rp1.png"
                        alt="image"
                        className=" mx-auto rounded-full "
                        />
                    </div>
                    <div className="  border-blue-500 border-r h-[60%] w-[38%]">
                        <div className="absolute teamInfo left-20 sm:left-16 md:left-24 lg:left-28 xl:left-32 2xl:left-40 text-sm md:text-base lg:text-lg">
                            <p>amr al aseel</p>
                            <p className=" font-bold lg:whitespace-nowrap">Senior Accountant</p>
                        </div>
                    </div>
                    <div className="ml-[35.5%] bg-blue-500 w-[5%] h-[6.5%] rounded-[50%] "></div>
                </div>

                <div className="relative">
                    <div className=" border-2 border-pink rounded-[50%] w-3/4 p-3 ">
                        <img
                        src="/rp1.png"
                        alt="image"
                        className=" mx-auto rounded-full "
                        />
                    </div>
                    <div className="  border-pink border-r h-[60%] w-[38%]">
                        <div className="absolute teamInfo left-20 sm:left-16 md:left-24 lg:left-28 xl:left-32 2xl:left-40 text-sm md:text-base lg:text-lg">
                            <p>amr al aseel</p>
                            <p className=" font-bold lg:whitespace-nowrap">Senior Accountant</p>
                        </div>
                    </div>
                    <div className="ml-[35.5%] bg-pink w-[5%] h-[6.5%] rounded-[50%] "></div>
                </div>

                <div className="relative">
                    <div className=" border-2 border-blue-500 rounded-[50%] w-3/4 p-3 ">
                        <img
                        src="/rp1.png"
                        alt="image"
                        className=" mx-auto rounded-full "
                        />
                    </div>
                    <div className="  border-blue-500 border-r h-[60%] w-[38%]">
                        <div className="absolute teamInfo left-20 sm:left-16 md:left-24 lg:left-28 xl:left-32 2xl:left-40 text-sm md:text-base lg:text-lg">
                            <p>amr al aseel</p>
                            <p className=" font-bold lg:whitespace-nowrap">Senior Accountant</p>
                        </div>
                    </div>
                    <div className="ml-[35.5%] bg-blue-500 w-[5%] h-[6.5%] rounded-[50%] "></div>
                </div>

                <div className="relative">
                    <div className=" border-2 border-blue-500 rounded-[50%] w-3/4 p-3 ">
                        <img
                        src="/rp1.png"
                        alt="image"
                        className=" mx-auto rounded-full "
                        />
                    </div>
                    <div className="  border-blue-500 border-r h-[60%] w-[38%]">
                        <div className="absolute teamInfo left-20 sm:left-16 md:left-24 lg:left-28 xl:left-32 2xl:left-40 text-sm md:text-base lg:text-lg">
                            <p>amr al aseel</p>
                            <p className=" font-bold lg:whitespace-nowrap">Senior Accountant</p>
                        </div>
                    </div>
                    <div className="ml-[35.5%] bg-blue-500 w-[5%] h-[6.5%] rounded-[50%] "></div>
                </div>

                <div className="relative">
                    <div className=" border-2 border-pink rounded-[50%] w-3/4 p-3 ">
                        <img
                        src="/rp1.png"
                        alt="image"
                        className=" mx-auto rounded-full "
                        />
                    </div>
                    <div className="  border-pink border-r h-[60%] w-[38%]">
                        <div className="absolute teamInfo left-20 sm:left-16 md:left-24 lg:left-28 xl:left-32 2xl:left-40 text-sm md:text-base lg:text-lg">
                            <p>amr al aseel</p>
                            <p className=" font-bold lg:whitespace-nowrap">Senior Accountant</p>
                        </div>
                    </div>
                    <div className="ml-[35.5%] bg-pink w-[5%] h-[6.5%] rounded-[50%] "></div>
                </div>

                <div className="relative">
                    <div className=" border-2 border-pink rounded-[50%] w-3/4 p-3 ">
                        <img
                        src="/rp1.png"
                        alt="image"
                        className=" mx-auto rounded-full "
                        />
                    </div>
                    <div className="  border-pink border-r h-[60%] w-[38%]">
                        <div className="absolute teamInfo left-20 sm:left-16 md:left-24 lg:left-28 xl:left-32 2xl:left-40 text-sm md:text-base lg:text-lg">
                            <p>amr al aseel</p>
                            <p className=" font-bold lg:whitespace-nowrap">Senior Accountant</p>
                        </div>
                    </div>
                    <div className="ml-[35.5%] bg-pink w-[5%] h-[6.5%] rounded-[50%] "></div>
                </div> */}


                
          </div>
        </div>
      </section>
      <Footer/>
    </>
  );
};

export default ourTeam;
