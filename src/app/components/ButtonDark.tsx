import Link from 'next/link'
import React from 'react'

const ButtonDark = () => {
  return (
    <Link href="/form" className='text-white bg-[#000000] hover:bg-[#0c0c0cec]/90 dark:hover:bg-[#0c0c0cec]/90 font-semibold rounded-lg text-xs px-3 py-2 text-center sm:text-sm sm:px-5 sm:py-3'>Request a book -&gt;</Link>
  )
}

export default ButtonDark