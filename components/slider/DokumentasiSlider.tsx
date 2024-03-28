"use client"

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from 'swiper/modules';
import { dokumentasiKegiatanData } from "@/data/home";
import { IoIosArrowDropleft } from "react-icons/io";
import { IoIosArrowDropright } from "react-icons/io";


import 'swiper/css';
import 'swiper/css/autoplay';
import { DokumentasiCard } from "../card/DokumentasiCard";

export const DokumentasiSlider = ({ data }: { data: typeof dokumentasiKegiatanData }) => {
  return (
    <>
      <Swiper
        slidesPerView={3}
        autoplay
        modules={[Autoplay]}>
        {data.map(item => (
          <SwiperSlide key={item.id} className="max-w-[400px]">
            <DokumentasiCard image={item.image} />
          </SwiperSlide>
        ))}
      </Swiper>
      <button className="relative top-5 -left-32 text-5xl">
        <IoIosArrowDropleft />
      </button>
      <button className="relative top-5 -left-32 text-5xl">
        <IoIosArrowDropright />
      </button>
    </>
  )
}