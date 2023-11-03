import React from 'react'
import Button from './components/Button'
import Link from 'next/link'
const Navbar = () => {
    return (
        <div className="mx-auto px-3 bg-gray-900 pb-3 pt-4">
            <nav>
                <div className="container mx-auto flex flex-wrap items-center justify-between max-w-6xl">
                    <Link href="/" className="flex">
                        <span className="font-bold text-xl sm:text-3xl text-white">rarity.</span>
                    </Link>
                    <div className='flex justify-between items-center gap-3 sm:gap-5'>
                        <Link href="/" className='text-gray-100 font-semibold text-xs sm:text-lg hover:text-gray-300'>
                            Home</Link>
                        <Button />
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar