import PageHeader from "components/PageHeader";
import CreativeLoopItem from "./loop/item";
import Link from "next/link";
import { featuredCreatives } from "constants/creatives";
import Image from 'next/image';

const CreativesDashboard = () => {
  return (
    <section className="max-w-[1600px] mx-auto px-10 pt-40">
      <div className="grid grid-cols-4 gap-10">
        <div className="rounded-4xl border-(--ad-gray) border-2 shadow-(--ad-box-shadow) px-4 py-10 text-center">
          <div className="relative">
            <Image src="/creatives/creative1.avif" alt="" width="314" height="235" className="image-mask" />
            <Image src="/aac-logo.png" width="67" height="67" alt="" className="absolute right-4 bottom-4 hover:rotate-45 transition-transform duration-3000" />
          </div>
          <div className="font-alta font-bold">
            <h1 className="text-3xl hover:text-yellow-400">ANZO VALLANTE</h1>
            <p className="uppercase text-md hover:text-yellow-400">pro member</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreativesDashboard;