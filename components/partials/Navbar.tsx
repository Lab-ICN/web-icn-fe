import Image from "next/image";
import { Button } from "../button/Button";

const Navbar = () => {
  return (
    <nav className="flex items-center h-[12vh] bg-white">
      <div className="w-3/12">
        <Image src="/logo.svg" alt="ICN" width={64} height={64} className="ml-16" />
      </div>
      <div className="flex w-9/12 gap-20">
        <a href="" className="my-auto hover:text-primary-blue duration-150">Beranda</a>
        <a href="" className="my-auto hover:text-primary-blue duration-150">Profil</a>
        <a href="" className="my-auto hover:text-primary-blue duration-150">Tri Dharma Perguruan Tinggi</a>
        <a href="" className="my-auto hover:text-primary-blue duration-150">Kegiatan Lab</a>
        <a href="" className="my-auto hover:text-primary-blue duration-150">Layanan</a>
        <Button text="Narahubung" variant="blue" classname="px-5 py-3 rounded" />
      </div>
    </nav>
  );
}

export default Navbar;