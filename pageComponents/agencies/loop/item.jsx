
import Image from 'next/image';

const AgenciesLoopItem = ({ agency }) => {
  return (
    <div className="flex items-center justify-center shrink-0 px-18 aspect-square border-(--ad-gray) border-2 shadow-(--ad-box-shadow) rounded-4xl relative">
      <div className="">
        <Image src={agency.image} width="220" height="220" alt="" />
        <div className="absolute inset-0 rounded-4xl agency-bg bg-black/20 z-1"></div>
      </div>
    </div>
  );
};

export default AgenciesLoopItem;