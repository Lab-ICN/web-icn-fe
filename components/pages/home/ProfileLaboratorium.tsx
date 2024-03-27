import { Button } from "@/components/button/Button";
import Image from "next/image";
import profilBg from "@/assets/image/profil-bg.svg"

export const ProfileLaboratorium = () => {
  return (
    <section id="profil" className="flex justify-center">
      <div className="flex gap-20 justify-center items-center w-10/12">
        <Image src={profilBg} alt="Profil" className="w-6/12" />
        <div>
          <h1 className="text-primary-blue font-semibold mb-2">Profil Laboratorium</h1>
          <p className="font-light w-10/12">Laboratorium Jaringan Berbasis Informasi pada saat ini berfokus pada 4 topik penelitian, yaitu Jaringan Sensor dan Nirkabel, Sistem Terdistribusi dan Komputasi Awan, Kriptografi dan Keamanan Informasi, serta Teknologi Infrastruktur.</p>
          <Button variant="blue" text="Selengkapnya" classname="px-10 py-3 mt-10 rounded-lg"></Button>
        </div>
      </div>
    </section>
  );
}