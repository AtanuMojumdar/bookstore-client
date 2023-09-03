'use client'
import { signOut } from "firebase/auth";
import {auth} from '@/utils/firebase.js'
import { useRouter } from 'next/navigation'
import { signoutFn } from "@/utils/auth/signoutFn";
import { useQuery } from "@tanstack/react-query";
import { toast } from 'react-toastify';
import axios from "axios";

const Profile = () => {
  const router = useRouter();

  const {data} = useQuery({
    queryKey:['getUser'],
    queryFn: async()=>{
      const {data} = await axios.get('http://localhost:8080/getuser/',{withCredentials: true});
      return data;
    }
  })


  //GSignOut
  const GoogleSignOut=async(e)=>{
     await signOut(auth)
     await signout(e);
  }
  
  async function signout(e){
    const result = await signoutFn();

    if(!result.success){
      toast.error(result.msg, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    }
    else{
      router.push('/login')
    }
  }
  
  return (
    <>
    <h1 className='text-center text-3xl font-bold mt-12'>Profile</h1>
    {data && <div className="text-base mt-2 text-gray-800 text-center">
      <p>{data.user.name}</p>
      <p>{data.user.email}</p>
    </div>}
    <button className='absolute bg-gray-800 hover:bg-gray-950 text-white py-2 px-4 rounded-full bottom-6 right-12' onClick={GoogleSignOut}>Signout</button>
    </>
  )
}

export default Profile