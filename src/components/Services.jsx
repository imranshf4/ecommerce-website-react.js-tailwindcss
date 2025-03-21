import React from 'react'
import qualityIcon from '../assets/home/icon/trophy 1.png';
import shippingIcon from '../assets/home/icon/shipping.png';
import guaranteeIcon from '../assets/home/icon/guarantee.png';
import customerSupportIcon from '../assets/home/icon/customer-support.png';
const Services = () => {
  return (
    <div className='section-container bg-secondary'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
            <div className='flex gap-4 flex-row'>
                <img src={qualityIcon} alt="qualityIcon" />
                <div>
                    <h3 className='font-bold capitalize'>High Quality</h3>
                    <p className='text-sm text-gray-500'>carfted from top materials</p>
                </div>
            </div>

            <div className='flex gap-4 flex-row'>
                <img src={guaranteeIcon} alt="qualityIcon" />
                <div>
                    <h3 className='font-bold capitalize'>Warranty protection</h3>
                    <p className='text-sm text-gray-500'>Over 2 years</p>
                </div>
            </div>

            <div className='flex gap-4 flex-row'>
                <img src={shippingIcon} alt="qualityIcon" />
                <div>
                    <h3 className='font-bold capitalize'>Free Shipping</h3>
                    <p className='text-sm text-gray-500'>Order over 150$</p>
                </div>
            </div>

            <div className='flex gap-4 flex-row'>
                <img src={customerSupportIcon} alt="qualityIcon" />
                <div>
                    <h3 className='font-bold capitalize'>24 / 7  support</h3>
                    <p className='text-sm text-gray-500'>Dedicated support</p>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Services