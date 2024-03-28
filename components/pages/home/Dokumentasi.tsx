import { DokumentasiSlider } from "@/components/slider/DokumentasiSlider";
import { dokumentasiKegiatanData } from "@/data/home";
import 'swiper/css';
import 'swiper/css/autoplay';

export const Dokumentasi = () => {

  return (
    <section id="tri-dharma">
      <div className="flex justify-end overflow-hidden">
        <div className="w-11/12 h-[85vh] bg-primary-orange rounded-tl-4xl relative">
          <div className="ml-20">
            <h1 className="pt-16 text-shadow-xl font-semibold">Dokumentasi Kegiatan</h1>
            <h2 className="-mt-2">Oleh Anggota Laboratorium</h2>
          </div>
          <div className="w-full mt-12 ml-40">
            <DokumentasiSlider data={dokumentasiKegiatanData} />
          </div>
        </div>
      </div>
    </section>
  );
}