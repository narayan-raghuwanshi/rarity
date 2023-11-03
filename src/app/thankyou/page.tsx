import React from 'react'
import ButtonDark from '../components/ButtonDark'

const Thankyou = () => {
    return (
        <div className="flex items-center flex-col min-h-screen justify-between">
            <div className="mx-auto mt-60 max-w-md overflow-hidden rounded-xl text-gray-900 shadow-md">
                <div className="flex flex-col items-center px-4 pt-7">
                    <h2 className="mb-2 text-3xl font-bold sm:text-4xl">Thank you!</h2>
                    <p className="mb-8 font-medium text-gray-500">Request sent scessfully.</p>
                </div>
            </div>
            <ButtonDark/>
            <p className="text-gray-900 text-xs sm:text-sm mb-3">©️ copyright Rarity 2023. All Rights Reserved</p>
        </div>
    )
}

export default Thankyou