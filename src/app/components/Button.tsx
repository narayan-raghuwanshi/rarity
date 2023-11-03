import Link from 'next/link'
import React from 'react'

const Button = () => {
  return (
    <Link href="/form" className='text-black bg-[#ffffff] hover:bg-[#eeececed]/90 dark:hover:bg-[#eeececed]/90 font-semibold rounded-lg text-xs px-3 py-2 text-center sm:text-sm sm:px-5 sm:py-3'>Request a book -&gt;</Link>
  )
}

export default Button