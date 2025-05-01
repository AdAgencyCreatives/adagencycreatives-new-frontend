
import Image from 'next/image';

const CreativeLoopItem = ({ creative }) => {
  return (
    <div className="relative p-2 md:px-4 md:py-6 4xl:px-8 4xl:py-20 rounded-2xl md:rounded-4xl border-white border-2 shadow-(--ad-box-shadow) text-center flex flex-col justify-between items-center gap-10">
      <div className="relative w-[124px] h-[124px] md:w-[256px] md:h-[256px] 4xl:w-[416px] flex items-center px-4">
        <Image src={creative.image} width="256" height="162" alt={creative.title} className="image-mask mx-auto" />
      </div>
      <div className="w-[37px] h-[37px] md:w-[68px] md:h-[68px] absolute top-0 right-0 left-0 bottom-0 flex justify-center mx-auto my-auto">
          <Image src="/aac-logo-yellow.png" width="67" height="67" alt={creative.title} className="hover:rotate-45 transition-transform duration-3000" />
      </div>
      <div>
        <div className="font-alta text-base md:text-[30px] 3xl:text-[38px] 4xl:text-[50px] hover:text-yellow-400">{creative.agency}</div>
        <div className="text-white font-semibold text-[10px] md:text-[20px] 3xl:text-[20px] 4xl:text-[25.21px] hover:text-yellow-400 lowercase">{creative.title}</div>
        <div className="my-3 border-b-2 w-[60%] mx-auto" />
        <div className="font-alta font-bold text-[10px] md:text-[16px] 3xl:text-[18px] 4xl:text-[22.97px] hover:text-yellow-400">{creative.location}</div>
      </div>
    </div>
  );
};

export default CreativeLoopItem;