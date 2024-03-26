import Image from "next/image";
import MainLayout from "@/layout/MainLayout";
import jumbotronBg from "../assets/image/jumbotron-bg.png"
import profilBg from "../assets/image/profil-bg.png"
import { Button } from "@/components/button/Button";
export default function Home() {
  return (
    <MainLayout>
      <section id="jumbotron">
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
      <section id="profil" className="flex justify-center mt-16">
        <div className="flex gap-20 justify-center items-center w-10/12">
          <Image src={profilBg} alt="Profil" className="w-6/12" />
          <div>
            <h1 className="text-primary-blue font-semibold mb-2">Profil Laboratorium</h1>
            <p className="font-light w-10/12">Laboratorium Jaringan Berbasis Informasi pada saat ini berfokus pada 4 topik penelitian, yaitu Jaringan Sensor dan Nirkabel, Sistem Terdistribusi dan Komputasi Awan, Kriptografi dan Keamanan Informasi, serta Teknologi Infrastruktur.</p>
            <Button variant="blue" text="Selengkapnya" classname="px-10 py-3 mt-10 rounded-lg"></Button>
          </div>
        </div>

      </section>
    </MainLayout >
  );
}
