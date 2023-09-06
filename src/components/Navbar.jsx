'use client'
import Link from "next/link"
import { useQuery } from "@tanstack/react-query";
import axios from "axios";


const Navbar = () => {
  const {data} = useQuery({
    queryKey:['getUser'],
    queryFn: async()=>{
      const {data} = await axios.get('http://localhost:8080/getuser/',{withCredentials: true});
      return data;
    }
  })
  return (
    <div className='flex justify-between px-10 w-full mx-auto mt-6'>
    <Link href='/' className='font-medium text-gray-900'>BookStore</Link>
    {data && <div className="flex gap-16">
    <Link href='/' className='underline decoration-[#403E3E] font-medium text-gray-900'>Categories</Link>
      <Link href='/' className='underline decoration-[#403E3E] font-medium text-gray-900'>Best Seller</Link>
    <Link href='/' className='underline decoration-[#403E3E] font-medium text-gray-900'>Featured Authors</Link>
    <Link href='/' className='underline decoration-[#403E3E] font-medium text-gray-900'>Wishlist</Link>
    </div>}
    {data && <div className="flex gap-2">
      <Link href='/profile' className='underline decoration-[#403E3E] font-medium text-gray-900'>Profile</Link></div>}
    {!data && <div className="flex gap-8"> <Link href='/login' className='underline decoration-[#403E3E] font-medium text-gray-900'>Login</Link>
    <Link href='/signup' className='underline decoration-[#403E3E] font-medium text-gray-900'>Signup</Link> </div>}
    </div>
  )
}

export default Navbar