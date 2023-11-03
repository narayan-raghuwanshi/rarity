import ButtonDark from "./components/ButtonDark";
import Testimonials from "./components/Testimonials";
import Image from 'next/image'
export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className=" max-w-4xl text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl px-5 mt-12 sm:mt-16">
        Embracing book reading is now essential, as this platform caters to all your  <span className="text-blue-700">literary needs.</span>.
      </h1>
      <div className='pointer-events-none absolute inset-x-0 mt-52 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80'>
        <div style={{
          clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
        }} className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" />
      </div>
      <div className='mx-auto max-w-sm px-6 lg:px-8'>
        <div className='mt-16 flow-root sm:mt-18'>
          <div className='rounded-xl bg-gray-900/5 p-1 lg:rounded-2xl lg:p-2 my-6 sm:my-14'>
            <Image
              src="/landing-page-header.jpg"
              alt="header image"
              width={1536}
              height={768}
              quality={100}
              className='rounded-md shadow-xl'>
            </Image>
          </div>
        </div>
      </div>
      <ButtonDark />
      <Testimonials />
      <ButtonDark/>
      <br /><br /><br /><br />
    </div>
  )
}
