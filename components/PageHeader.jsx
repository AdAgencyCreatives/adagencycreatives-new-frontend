import Link from "next/link";

/**
 * @param {{ page: string, heading: string, subPage?: {url: string, text: string} }} props
 */
const PageHeader = ({ page, subPage, heading }) => {
  return (
    <>
      <div 
        className="absolute w-full zoom-35 zoom-60 zoom-70 zoom-80 zoom-90 inset-0 m-auto z-0 max-sm:w-[70%] max-md:w-[50%] max-md:aspect-square max-md:rounded-full max-md:overflow-hidden"
        dangerouslySetInnerHTML={{ __html: '<spline-viewer url="https://prod.spline.design/8Kk8n4FoXe4tjJBu/scene.splinecode" class="w-full h-full 3xl:scale-[1.4] 4xl:scale-[2]"></spline-viewer>' }}
      ></div>
      {page && (
        <div className="text-[0.875rem] md:text-[2rem] 3xl:text-[2.5rem] 4xl:text-[3.75rem] font-bold text-left page">
          {subPage ? (
            <Link href={subPage?.url ?? '#'} className="cursor-pointer">
              <span className="text-brand-yellow font-bold">{page} </span>
              <span className="underline">{subPage.text}</span>
            </Link>
          ) : (
            <span className="text-brand-yellow font-bold">{page}</span>
          )}
        </div>
      )}
      <div className="relative z-1 top-0 w-fit top-0 left-[50%] -translate-x-[50%] translate-y-0">
        <h1 className="main-heading font-bold">{heading}</h1>
      </div>
    </>
  );
};

export default PageHeader;