import Image from 'next/image';

const SpotlightLoopItem = ({ spotlight }) => {
  return (
    <div className="rounded-2xl outline outline-16 outline-white shadow-(--ad-box-shadow) transition relative mx-[16px]">
      <Image src={spotlight.image} width="257" height="257" alt="" className="rounded-2xl bg-black w-full invisible" />
      <div className="absolute inset-0 flex items-center justify-center">
        <Image src="/favicon-white.png" width="36" height="36" alt="" />
      </div>
      <div className="absolute bottom-4 left-4">
        <p className="text-white uppercase font-alta font-bold">{spotlight.name}</p>
        <p className="text-white lowercase">{spotlight.title}</p>
      </div>
    </div>
  );
};

export default SpotlightLoopItem;