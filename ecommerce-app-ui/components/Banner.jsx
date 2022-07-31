import Image from 'next/image'
import bannerImg from "../public/images/banner-image.jpg"
import { Button } from './elements/Button'

export const Banner = () => {
    return (
        <div className="flex">
            <div className="banner__image-container sm:w-1/2 w-full">
                <Image alt="banner image" src={bannerImg} />
            </div>
            <div className="banner__description-container ml-2 text-black my-auto flex flex-col sm:w-1/2 w-full">
                <div className='flex flex-col w-2/3'>
                    <h1 className='text-xl pb-3'>Introducing New Styles</h1>
                    <p className='pb-3'>High-performing</p>
                    <Button>Shop Now</Button>
                </div>
            </div>
        </div>
    )
}