export const Dokumentasi = () => {
  return (
    <section id="tri-dharma">
      <div className="flex justify-end">
        <div className="w-11/12 h-[80vh] bg-primary-orange rounded-tl-4xl ">
          <div className="ml-20">
            <h1 className=" pt-16 text-shadow-xl font-semibold">Dokumentasi Kegiatan</h1>
            <h2 className="-mt-2">Oleh Anggota Laboratorium</h2>
          </div>
          <div className="flex gap-10 mt-12 ml-16">
            {/* {triDharmaData.map(item => (
            <TriDharmaCard key={item.id} title={item.title} image={item.image} />
          ))} */}
          </div>
        </div>
      </div>
    </section>
  );
}