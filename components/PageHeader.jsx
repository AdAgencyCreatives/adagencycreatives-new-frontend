import Link from "next/link";

/**
 * @param {{ page: string, heading: string, subPage?: {url: string, text: string} }} props
 */
const PageHeader = ({ page, subPage, heading }) => {
  return (
    <>
      <div 
        className="absolute w-full inset-0 m-auto z-0 max-md:w-[50%] max-md:aspect-square max-md:rounded-full max-md:overflow-hidden"
        dangerouslySetInnerHTML={{ __html: '<spline-viewer url="https://prod.spline.design/8Kk8n4FoXe4tjJBu/scene.splinecode" class="w-full h-full 3xl:scale-[1.4] 4xl:scale-[2]"></spline-viewer>' }}
      ></div>
      <div className="relative z-1">
        <div className="text-sm md:text-base 2xl:text-[32px] 3xl:text-[40px] 4xl:text-6xl text-left ms-11 sm:ms-16 lg:ms-46 xl:ms-56 2xl:ms-14 3xl:ms-20 4xl:ms-32 mb-[16px] md:mb-[18px] 3xl:mb-[24px] 4xl:mb-[32px]">
          {subPage ? (
            <Link href={subPage?.url ?? '#'} className="cursor-pointer">
              <span className="text-yellow-400 font-bold">{page} </span>
              <span className="underline">{subPage.text}</span>
            </Link>
          ) : (
            <span className="text-yellow-400 font-bold">{page}</span>
          )}
        </div>

        <h1 className="text-5xl md:text-9xl 2xl:text-[182px] 3xl:text-[242px] 4xl:text-[323.4px] font-bold font-inter leading-[58.59px] md:leading-[225px] 3xl:leading-[300px] 4xl:leading-[400px]">{heading}</h1>
      </div>
    </>
  );
};

export default PageHeader;