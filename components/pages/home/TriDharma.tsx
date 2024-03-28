import { TriDharmaCard } from "@/components/card/TriDharmaCard";
import { triDharmaData } from "@/data/home";

export const TriDharma = () => {

  return (
    <section id="tri-dharma">
      <div className="w-11/12 h-[80vh] bg-primary-blue rounded-tr-4xl ">
        <h1 className="ml-16 pt-16 text-white text-shadow-xl font-semibold">Tri Dharma Perguruan Tinggi</h1>
        <div className="flex gap-10 mt-12 ml-16">
          {triDharmaData.map(item => (
            <TriDharmaCard key={item.id} title={item.title} image={item.image} />
          ))}
        </div>
      </div>
    </section>
  );
}