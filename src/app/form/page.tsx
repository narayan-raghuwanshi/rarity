"use client";
import Link from 'next/link'
import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { z } from "zod"
import { useRouter } from 'next/navigation';

const phoneRegex = new RegExp(
  /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/
);

const requestSchema = z.object({
  name: z.string(),
  bookName: z.string(),
  author: z.string(),
  email: z.string().email(),
  phone: z.string().regex(phoneRegex, 'Please enter a valid number.'),
});

const Form = () => {
  const [name, setName] = useState("");
  const [bookName, setBookName] = useState("");
  const [author, setAuthor] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("+91");
  const router = useRouter();
  const handleRequest = async () => {
    const body = {
      name: name,
      bookName: bookName,
      author: author,
      email: email,
      phone: phone
    }
    const validation = requestSchema.safeParse(body);
    if (validation.success) {
      const response = await fetch("http://localhost:3000/api/request", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
      })
      if (response.status === 200) {
        router.push('/thankyou');
      }
    } else {
      alert("Enter valid details!");
    }
  }
  return (
    <div className="flex justify-between items-center w-screen bg-white mt-11 sm:mt-24 md:mt-36 flex-col min-h-screen">
      <div className="container mx-auto px-4 lg:px-20">
        <div className="w-full p-8 my-4 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 mr-auto rounded-2xl shadow-2xl">
          <h1 className="font-bold uppercase text-5xl flex">Allow us to serve.</h1>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
            <input
              className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-gray-300"
              type="text"
              placeholder="Your Name"
              onChange={(e) => {
                setName(e.target.value)
              }} />
            <input
              className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-gray-300"
              type="text"
              placeholder="Book Name"
              onChange={(e) => {
                setBookName(e.target.value)
              }} />
            <input
              className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-gray-300"
              type="text"
              placeholder="Book's Author"
              onChange={(e) => {
                setAuthor(e.target.value)
              }} />
            <input
              className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-gray-300"
              type="email"
              placeholder="Email"
              onChange={(e) => {
                setEmail(e.target.value)
              }} />
            <input
              className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-gray-300"
              type="text"
              placeholder="Phone"
              value={phone}
              onChange={(e) => {
                setPhone(e.target.value)
              }} />
          </div>
          <div className="my-5 w-1/2 lg:w-1/4">
            <button
              className="uppercase text-sm font-bold bg-gray-900 hover:bg-gray-800 text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline"
              onClick={handleRequest}
            >Send Request</button>
          </div>
        </div>
        <div
          className="w-full lg:-mt-96 lg:w-2/6 px-8 py-12 ml-auto bg-gray-900 rounded-2xl">
          <div className="flex flex-col text-white">
            <h1 className="font-bold uppercase text-4xl my-4">We will contact soon.</h1>
            <div className="flex my-4 w-2/3 lg:w-1/2 flex-col">
              <h2 className="text-2xl">Contact us:</h2>
              <p className="text-gray-400">abc@gmail.com</p>
            </div>
            <div className="flex my-4">
              <Link href="https://www.facebook.com/ENLIGHTENEERING/" target="_blank" rel="noreferrer" className="h-8 w-8 mx-1 pt-1">
                <FontAwesomeIcon icon={faInstagram} className='text-3xl' />
              </Link>
              <Link href="https://www.linkedin.com/company/enlighteneering-inc-" target="_blank" rel="noreferrer" className="h-8 w-8 ml-3 pt-1">
                <FontAwesomeIcon icon={faLinkedinIn} className='text-3xl' />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <p className="text-gray-900 text-xs sm:text-sm mb-3 mt-5">©️ copyright Rarity 2023. All Rights Reserved</p>
    </div>
  )
}
export default Form
