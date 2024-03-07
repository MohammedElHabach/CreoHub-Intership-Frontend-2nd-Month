"use client"
import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { ScrollTrigger } from 'gsap/all';
import gsap, { Power3 } from "gsap";
import useAnimation from "@/components/useAnimation";
const page = () => {
  
  useAnimation()


  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};

    if (formData.name.trim() === "") {
      newErrors.name = "Please enter your name";
    }  if (formData.email.trim() === "") {
      newErrors.email = "Please enter your email";
    }  if (formData.message.trim() === "") {
      newErrors.message = "Please enter your message";
    }

    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) {
      return;
    }

    console.log("Form submitted:", formData);

    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <>
      <Navbar />
      <section id="contact" className="fadeup">
        <div className="xl:container mx-auto px-12 mt-10">
          <div className="text-center ">
            <h1 className='contactusElement text-3xl font-bold relative after:content-[""] after:absolute after:bg-pink after:h-0.5 after:-bottom-3 after:w-20 after:left-[38%] sm:after:left-[44%] md:after:left-[45%] lg:after:left-[46%] xl:after:left-[47.5%]'>
              Contact Us
            </h1>
            <form onSubmit={handleSubmit} className={` ${errors.name || errors.email || errors.message ? 'space-y-5':'space-y-10 '} mt-10`}>
              <input
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleInputChange}
                className="p-3 mx-auto block bg-slate-800 rounded-md outline-none"
                type="text"
              />
              {errors.name && <p className="text-red-500">{errors.name}</p>}

              <input
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleInputChange}
                type="email"
                className="p-3  mx-auto block bg-slate-800 rounded-md outline-none"
              />
              {errors.email && <p className="text-red-500">{errors.email}</p>}

              <textarea
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleInputChange}
                cols="23"
                className="p-3 mx-auto block bg-slate-800 rounded-md outline-none"
                rows="4"
              ></textarea>
              {errors.message && (
                <p className="text-red-500">{errors.message}</p>
              )}

              <button
                type="submit"
                className="bg-pink block text-lg mx-auto px-7 py-2 rounded-md text-white font-semibold"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default page;
