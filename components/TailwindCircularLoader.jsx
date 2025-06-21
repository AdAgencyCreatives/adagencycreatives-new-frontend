import Image from "next/image";

export default function TailwindCircularLoader({ className='', iconClassName='' }) {
  return (
    <div className={`flex justify-center items-center bg-black/80 ${className}`}>
      <Image src="/aac-logo-header.png" width="100" height="100" className={`animate-[spin_5s_linear_infinite] aspect-square max-sm:w-[4.8rem] w-[6.4rem] md:w-[7.806rem] xl:w-[8.538rem] 2xl:w-[9rem] 3xl:w-[12rem] 4xl:w-[16rem] ${iconClassName}`} alt="" />
    </div>
  );
}
