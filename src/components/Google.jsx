"use client"
import Image from 'next/image'
import google from '../../public/google-logo.png'
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import {auth} from '@/utils/firebase.js'
import { useRouter } from 'next/navigation'
import { googleAuthFn } from '@/utils/auth/googleAuthFn';
const Google = () => {
  const googleProvider = new GoogleAuthProvider();
  const router = useRouter();

  //Google Auth
  const googleLogin = async()=>{
    try{
      const {user,operationType} = await signInWithPopup(auth,googleProvider)
      const result = await googleAuthFn({user,operationType});
      if(!result.success){
        console.log(result.msg)
      }
      else{
        router.push('/');
      }
    }
    catch(err){
      console.log(err.message)
    }
  }
  return (
    <div id='google' onClick={googleLogin} className='bg-white rounded-full cursor-pointer px-4 flex items-center justify-left w-[90%] mt-6 h-12'>
        <div className='xl:w-[77%] max-max-google:w-[65%] lg:w-[85%] md:w-[75%] w-[70%] max-xs:w-[85%] max-xxs:w-[100%]  flex justify-between'>
        <div className='w-6 h-6'>
        <Image className='object-contain' src={google} alt='google-logo'/>
        </div>
        <p className='font-medium text-base max-max-google:hidden max-min-google:block text-gray-600'>Sign up with Google</p>
        <p className='font-medium text-base hidden max-max-google:block max-min-google:hidden text-gray-600'>Sign up</p>
        </div>
    </div>
  )
}

export default Google