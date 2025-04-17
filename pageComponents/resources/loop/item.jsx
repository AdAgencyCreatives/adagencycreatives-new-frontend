import Image from 'next/image';

const ResourceLoopItem = ({ resource }) => {
  return (
    <div className="rounded-2xl outline outline-16 outline-white shadow-(--ad-box-shadow) transition relative bg-black mx-[16px]">
      <Image src={resource.image} width="257" height="257" alt="" className="rounded-2xl bg-black w-full invisible" />
      <div className="absolute bottom-4 left-4">
        <Image src="/aac-logo-white.avif" width="48" height="48" alt="" />
        <p className="text-white lowercase">{resource.title}</p>
      </div>
    </div>
  );
};

export default ResourceLoopItem;