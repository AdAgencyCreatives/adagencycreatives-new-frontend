import Image from 'next/image';

const PublicationLoopItem = ({ publication }) => {
  return (
    <div className="rounded-2xl outline outline-16 outline-white shadow-(--ad-box-shadow) transition relative mx-[16px]">
      <Image src={publication.image} width="257" height="257" alt="" className="rounded-2xl bg-black w-full" />
    </div>
  );
};

export default PublicationLoopItem;