import Image from 'next/image';

const ResourceLoopItem = ({ resource }) => {
  return (
    <div className="rounded-xl md:rounded-2xl outline outline-4 md:outline-8 2xl:outline-16 outline-white shadow-(--ad-box-shadow) transition relative bg-black mx-[4px] md:mx-[16px]">
      <Image src={resource.image} width="257" height="257" alt="" className="rounded-2xl bg-black w-full invisible" />
      <div className="absolute bottom-2 left-2 md:bottom-4 md:left-4">
        <Image src="/aac-logo-white.avif" width="48" height="48" alt="" className="w-[12px] h-[12px] md:w-[48px] md:h-[48px] 3xl:w-[55px] 3xl:h-[55px] 4xl:w-[73px] 4xl:h-[73px]" />
        <p className="text-white lowercase text-[10px] md:text-[22px] 3xl:text-3xl 4xl:text-[38px]">{resource.title}</p>
      </div>
    </div>
  );
};

export default ResourceLoopItem;