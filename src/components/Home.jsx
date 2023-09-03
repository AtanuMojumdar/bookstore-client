'use client'

import UserContext from "@/context/userContext";
import axios from "axios";
import { useContext } from "react";
import { useQuery } from "@tanstack/react-query";

const Home = () => {
  const user = useContext(UserContext);

  const {data,error} = useQuery({
    queryKey:['getUser'],
    queryFn: async()=>{
      const {data} = await axios.get('http://localhost:8080/getuser/',{withCredentials: true});
      return data;
    }
  })
  return (
    <>
    <div className="w-full h-80 bg-white my-6">
    </div>
    <h1 className='text-center text-3xl font-bold'>Home</h1>
    </>
  )
}

export default Home