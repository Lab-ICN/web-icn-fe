import ebaLogo from "@/assets/image/home/logo/eba-logo.png"
import arenapacLogo from "@/assets/image/home/logo/arenapac-logo.png"
import telkomselLogo from "@/assets/image/home/logo/telkom-logo.png"
import erasmusLogo from "@/assets/image/home/logo/erasmus-logo.png"
import idrenLogo from "@/assets/image/home/logo/idren-logo.png"
import redhatLogo from "@/assets/image/home/logo/redhat-logo.png"
import ai3Logo from "@/assets/image/home/logo/ai3-logo.png"
import indosatLogo from "@/assets/image/home/logo/indosat-logo.png"
import keioLogo from "@/assets/image/home/logo/keio-logo.png"
import jayantaraLogo from "@/assets/image/home/logo/jayantara-logo.png"
import kedairekaLogo from "@/assets/image/home/logo/kedaireka-logo.png"
import soiasiaLogo from "@/assets/image/home/logo/soiasia-logo.png"
import awsLogo from "@/assets/image/home/logo/aws-logo.png"
export const Partnership = () => {
  return (
    <>
      <h1 className="text-primary-blue font-bold text-center">Bekerjasama Dengan </h1>
      <div className="mt-5 flex justify-center flex-col">
        <div className="flex justify-center items-center gap-12">
          <img src={ebaLogo.src} alt="EBA" className="w-40" />
          <img src={arenapacLogo.src} alt="ARENA-PAC" className="w-52" />
          <img src={telkomselLogo.src} alt="Telkomsel" className="w-52" />
          <img src={erasmusLogo.src} alt="" className="max-h-32" />
        </div>
        <div className="flex justify-center items-center gap-16">
          <img src={idrenLogo.src} alt="IDREN" className="w-40" />
          <img src={redhatLogo.src} alt="Red Hat" className="w-52" />
          <img src={ai3Logo.src} alt="AI3" className="w-40" />
          <img src={indosatLogo.src} alt="Indosat" className="w-52" />
        </div>
        <div className="flex justify-center items-center gap-16 -mt-6">
          <img src={keioLogo.src} alt="Keio University" className="w-64" />
          <img src={jayantaraLogo.src} alt="Mitra Inovasi Jayantara" className="w-60" />
          <img src={kedairekaLogo.src} alt="Kedaireka" className="w-60" />
        </div>
        <div className="flex justify-center items-center gap-16 -mt-6">
          <img src={soiasiaLogo.src} alt="Soi Asia" className="w-60" />
          <img src={awsLogo.src} alt="AWS Academy" className="w-96" />
        </div>
      </div>
    </>
  );
}