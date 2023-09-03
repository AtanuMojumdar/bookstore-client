'use client'
import book from '../../../../public/book.png'
import Image from 'next/image'
import Link from 'next/link'
import Google from '@/components/Google'
import { useState } from 'react'
import { signupFn } from '@/utils/auth/signupFn'
import {useRouter} from 'next/navigation';
import { toast } from 'react-toastify';


const Signup = () => {
  const router = useRouter()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  async function signup(e){
    let data = {
      name,
      email,
      password
    }
    const result = await signupFn(data)
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
      router.push('/');
    }
  }
  return (
    <>
      <div className='grid md:grid-cols-2 grid-cols-1 gap-0 h-[100vh] px-2'>
        <div className='px-4 py-4 h-[100%] md:block hidden'> 
          <Image src={book} className=' h-[95vh] w-[82%]' alt="Picture of the author" />
        </div>

        <div className="w-full">
          <div className='md:w-[50%] flex flex-col gap-2 justify-center items-center '>
        <h1 className='text-left text-[#282828] text-4xl font-bold mt-14'>Get Started</h1>
        <p className='md:text-base text-sm'>Already have an account? <span className='underline text-[#AA6B48]'><Link href='/login'>Sign In</Link></span></p>
          </div>


          <div className='mt-14 pl-10'>
            <div className='flex flex-col gap-14'>
            <div className='flex md:block flex-col mx-auto items-left md:w-full w-[90%]'>
            <label className='block  mb-1 text-[0.8rem] text-[#403E3E]' htmlFor="name">Name</label>
            <input value={name} onChange={(e)=> setName(e.target.value)} id='name' type="text" className='md:w-[50%] w-[80%] text-[#282828]  text-base px-1 font-medium' />
            </div>

            <div className='flex md:block flex-col mx-auto items-left md:w-full w-[90%]'>
            <label className='block  mb-1 text-[0.8rem] text-[#403E3E]' htmlFor="email">Email</label>
            <input value={email} onChange={(e)=> setEmail(e.target.value)} id='email' type="email" className='md:w-[50%] w-[80%] text-[#282828]  text-base px-1 font-medium' />
            </div>

            <div className='flex md:block flex-col mx-auto items-left md:w-full w-[90%]'>
            <label className='block mb-1 text-[0.8rem] text-[#403E3E]' htmlFor="password">Password</label>
            <input value={password} onChange={(e)=> setPassword(e.target.value)} id='password' type="password" className='md:w-[50%] w-[80%] text-[#282828]  text-base px-1' />
            </div>

            </div>
            <div className='md:w-[50%] w-[80%] mt-11 flex justify-center'>
            <button onClick={signup} className='text-white shadow-lg text-lg font-semibold rounded w-[80%] text-center bg-[#AA6B48] h-[3rem] md:h-[4rem]'>
              Sign Up
            </button>
            </div>
            <div className='md:w-[50%] w-[80%] flex justify-center'>
            <div className='flex w-[80%] items-center justify-between mt-6'>
              <hr className=' w-[45%] border-[#372617]' />
              <span className='text-sm'>or</span>
              <hr className=' w-[45%] border-[#372617]'  />
            </div>
            </div>

            <div className='md:w-[50%] w-[80%] justify-center flex'>

            <Google/>
            </div>
            
          </div>
        </div>

      </div>
    </>
  )
}

export default Signup