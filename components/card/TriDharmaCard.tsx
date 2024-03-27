import { StaticImageData } from "next/image";

type TriDharmaProps = {
  title: string,
  image: StaticImageData
}

export const TriDharmaCard = ({ title, image }: TriDharmaProps) => {
  return (
    <div className="rounded-lg bg-white px-3 pt-3 pb-5 w-max">
      <img src={image.src} alt={image.src} className="rounded-lg w-72 h-80 object-cover" />
      <p className="text-center mt-3 font-semibold">{title}</p>
    </div>
  );
}