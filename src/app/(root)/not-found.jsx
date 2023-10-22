import Link from 'next/link'
export default function NotFound() {
  return (
    <div className='w-fit mx-auto mt-36 flex items-center flex-col'>
      <h2 className='text-xl font-semibold'>Not Found | 404</h2>
      <p className='font-medium mt-1'>Could not find requested resource</p>
      <Link className='mt-4 underline' href="/">Return Home</Link>
      <p>or</p>
    </div>
  )
}