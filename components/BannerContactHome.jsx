"use client"
import WhatsArrows from "./WhatsArrows"
import WhatsButton from "./WhatsButton"

function BannerContactHome() {
    return (
        <div className=''>
            <div className="divider bg-yellow-100 "></div>
            <div className=" flex justify-center ">



                <div className="pt-12  ">
                    <h1 className=" text-4xl text-slate-600 text-center	">Contactanos por Whatsapp para hacer tu pedido y saber más!</h1>
                    <div className='flex justify-center  '>
                       <WhatsArrows/>
                    </div>
                    <div class=" flex  justify-center"><WhatsButton/></div>
                    
                </div>
            </div>
        </div>
    )
}

export default BannerContactHome
