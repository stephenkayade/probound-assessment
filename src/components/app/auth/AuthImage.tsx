import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const AuthImage = () => {

    return (
        <>
            <Swiper
                spaceBetween={50}
                slidesPerView={1}
                autoplay
                className='h-full px-4'
                // navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                modules={[Autoplay, Pagination, Navigation]}
            >
                <SwiperSlide className='w-[100%] h-full rounded-xl full-bg relative' style={{ backgroundImage: `url("../../../images/assets/bg@auth.webp")` }}>
                    <div className="w-[100%] px-[2rem] absolute left-0 bottom-[5rem] space-y-[1.2rem] text-white">
                        <h1 className="font-sora-bold text-[40px] leading-[58px] tracking-[-2px]">Makes Custom Outreach</h1>
                        <div className="">
                            <p className="font-sora text-xl">
                                Probound is revolutionizing the way outbound sales are done. Powered by AI for boundless customer reach.
                            </p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='w-[100%] h-full rounded-xl full-bg relative' style={{ backgroundImage: `url("../../../images/assets/bg@auth-2.webp")` }}>
                    <div className="w-[100%] px-[2rem] absolute left-0 bottom-[5rem] space-y-[1.2rem] text-white">
                        <h1 className="font-sora-bold text-[40px] leading-[58px] tracking-[-2px]">Generate Leads</h1>
                        <div className="">
                            <p className="font-sora text-xl">
                                Probound is revolutionizing the way outbound sales are done. Powered by AI for boundless customer reach.
                            </p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='w-[100%] h-full rounded-xl full-bg relative' style={{ backgroundImage: `url("../../../images/assets/bg@auth-3.webp")` }}>
                    <div className="w-[100%] px-[2rem] absolute left-0 bottom-[5rem] space-y-[1.2rem] text-white">
                        <h1 className="font-sora-bold text-[40px] leading-[58px] tracking-[-2px]">Book Demos</h1>
                        <div className="">
                            <p className="font-sora text-xl">
                                Probound is revolutionizing the way outbound sales are done. Powered by AI for boundless customer reach.                            </p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='w-[100%] h-full rounded-xl full-bg relative' style={{ backgroundImage: `url("../../../images/assets/bg@auth.webp")` }}>
                    <div className="w-[100%] px-[2rem] absolute left-0 bottom-[5rem] space-y-[1.2rem] text-white">
                        <h1 className="font-sora-bold text-[40px] leading-[58px] tracking-[-2px]">Makes Custom Outreach</h1>
                        <div className="">
                            <p className="font-sora text-xl">
                                Probound is revolutionizing the way outbound sales are done. Powered by AI for boundless customer reach.
                            </p>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    )
}

export default AuthImage