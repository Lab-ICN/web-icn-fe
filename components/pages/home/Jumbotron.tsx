import Image from "next/image";
import jumbotronBg from "@/assets/image/home/jumbotron-bg.png"
import { Button } from "@/components/button/Button";
export const Jumbotron = () => {
  return (
    <section id="jumbotron" className="z-10">
      <div className="relative">
        <Image src={jumbotronBg} alt="" className="w-full h-6/6 " />
        <div className="w-full h-[102vh] bg-secondary-blue opacity-30 absolute top-0" />
        <div className="absolute top-1/4 left-16">
          <h1 className="text-primary-blue font-semibold">Laboratorium </h1>
          <h1 className="text-primary-blue font-semibold">Jaringan Berbasis Informasi</h1>
          <p className="text-sm w-[36%] font-light mt-4 mb-5">Laboratorium Jaringan Berbasis Informasi merupakan salah satu laboratorium komputer yang memfokuskan diri pada bidang pengembangan jaringan berbasis informasi di Fakultas Ilmu Komputer Universitas Brawijaya (FILKOM UB). Laboratorium Jaringan Berbasis Informasi terletak di Gedung F FILKOM UB. </p>
          <div className="flex gap-3 ">
            <Button text="Hubungi Kami" variant="blue" classname="px-4 py-2 max-w-[10em] w-[10em] rounded-lg" />
            <Button text="Lihat Lebih" variant="white" classname="px-4 py-2 w-[10em] max-w-[10em] rounded-lg" />
          </div>
        </div>
      </div>
    </section >
  );
}