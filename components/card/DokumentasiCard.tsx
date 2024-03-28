import { StaticImageData } from "next/image";

export const DokumentasiCard = ({ image }: { image: StaticImageData }) => {
  return (
    <div className="rounded-xl relative max-w-360 max-h">
      <img src={image.src} alt="" className="w-360 h-360 object-cover rounded-xl" />
      {/* <div className="bg-blur-grey w-360 h-360 absolute top-0 opacity-50 rounded-xl" /> */}
    </div>
  );
}