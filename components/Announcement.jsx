
import Image from 'next/image'
import logo from '@/public/campeonsDelSur.svg'
function Announcement() {
    return (
        <div /* className='relative' */>
            <div className="bg-primary px-4 py-3 text-white">
            <div className="flex flex-row place-content-center">
      <Image src={logo} width="200" height="200" objectFit="center"  />
      </div>
                <p className="text-center text-sm font-medium">
                Pronto estaremos llegando como campeones a tu mesa!
                    <a href="#" className="inline-block underline"></a>
                </p>
            </div>
        </div>
    )
}

export default Announcement
