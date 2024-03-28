import bukuTamu from "@/assets/icons/buku-tamu.svg"
import pendaftaran from "@/assets/icons/pendaftaran.svg"
import { BsBoxSeam } from "react-icons/bs";

const Layanan = () => {
  return (
    <>
      <h1 className="text-center text-primary-blue font-semibold">Layanan</h1>
      <div className="flex justify-evenly mt-10">
        <div className="flex justify-center items-center flex-col flex-1">
          <div className="bg-[#EFEAFF] w-20 h-20 rounded-xl flex justify-center items-center">
            <img src={bukuTamu.src} alt="" className="w-10 h-10 " />
          </div>
          <h3 className="mt-3 font-bold">Buku Tamu</h3>
        </div>
        <div className="flex justify-center items-center flex-col flex-1">
          <div className="bg-[#ECFFDA] w-20 h-20 rounded-xl flex justify-center items-center">
            <BsBoxSeam className="w-10 h-10 text-primary-green" />
          </div>
          <h3 className="mt-3 font-bold">Peminjaman & Pengembalian</h3>
        </div>
        <div className="flex justify-center items-center flex-col flex-1">
          <div className="bg-[#FFE5DA] w-20 h-20 rounded-xl flex justify-center items-center">
            <img src={pendaftaran.src} alt="" className="w-10 h-10" />
          </div>
          <h3 className="mt-3 font-bold">Pendaftaran Program PKL & Skripsi</h3>
        </div>
      </div>
    </>
  );
}

export default Layanan;