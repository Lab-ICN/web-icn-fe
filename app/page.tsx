
import MainLayout from "@/layout/MainLayout";
import { ProfileLaboratorium } from "@/components/pages/home/ProfileLaboratorium";
import { Jumbotron } from "@/components/pages/home/Jumbotron";
import { TriDharma } from "@/components/pages/home/TriDharma";
import { Dokumentasi } from "@/components/pages/home/Dokumentasi";
import Layanan from "@/components/pages/home/Layanan";
import { Partnership } from "@/components/pages/home/Partnership";
export default function Home() {
  return (
    <MainLayout>
      <Jumbotron />
      <div className="mt-16" />
      <ProfileLaboratorium />
      <div className="mt-16" />
      <TriDharma />
      <div className="mt-16" />
      <Dokumentasi />
      <div className="mt-16" />
      <Layanan />
      <div className="mt-16" />
      <Partnership />
    </MainLayout >
  );
}
