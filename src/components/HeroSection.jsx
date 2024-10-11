
import BottomTilted from './BottomTilted';


const HeroSection = () => {


    return (
        <>
            <div className='flex flex-col justify-center rounded-tl-xl items-center gap-0 bg-yellow-200'>
                <div className="md:w-[80vw] w-[100vw] sm:w-[90vw] min-h-[60vh] bg-gradient-to-t from-yellow-500 via-yellow-200 to-yellow-500 rounded-tl-xl rounded-br-none shadow-lg p-5">
                    <section className="flex md:flex-row flex-col justify-between items-center ">
                        <img
                            src="/Alabay Assets/albamain1.png"
                            alt="Alabay Dog"
                            className="w-[400px] sm:w-[300px] md:w-[300px] lg:w-[400px] h-auto object-cover rounded-full relative top-36"
                        />

                        <div className='md:h-0 h-[7vh]'></div>
                        <div className='md:w-1/2 w-full p-6'>
                            <h1 className="text-4xl font-bold text-orange-500 text-right">History Of</h1>
                            <h1 className="titan text-7xl text-white text-right">ALABAY</h1>
                            <p className="mt-2 text-gray-700 font-semibold text-xl text-right">
                                The Central Asian Shepherd Dog, also known as Alabay, has been a guardian of livestock and property for centuries. Originating from Central Asia, these dogs are renowned for their courage, strength, and loyalty.</p>
                        </div>
                    </section>
                </div>
                <BottomTilted />
            </div>
        </>
    )
}

export default HeroSection