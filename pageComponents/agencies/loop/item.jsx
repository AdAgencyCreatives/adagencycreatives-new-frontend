
import Image from 'next/image';

const AgenciesLoopItem = ({ agency }) => {
  return (
    <div className="flex items-center justify-center shrink-0 px-4 md:px-14 3xl:px-28 4xl:px-28 aspect-square border-(--ad-gray) border-2 shadow-(--ad-box-shadow) rounded-2xl md:rounded-4xl relative">
      <div className="">
        <Image src={agency.image} width="200" height="200" alt="" className="w-[65px] md:w-[173px] 3xl:w-[230px] 4xl:w-[300px]" />
        <div className="absolute inset-0 rounded-4xl agency-bg bg-black/20 z-1"></div>
      </div>
    </div>
  );
};

export default AgenciesLoopItem;