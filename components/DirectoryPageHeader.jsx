import Link from "next/link";

/**
 * @param {{ page: string, heading: string, subPage?: {url: string, text: string}, className?: string, children }} props
 */
const DirectoryPageHeader = ({ page, subPage, heading, className='', children }) => {
  return (
    <section className={`relative flex flex-col justify-center text-center page-header mx-auto w-full max-sm:w-[85%] max-sm:aspect-square ${className}`}>
      {page && (
        <div className="relative z-1 text-[0.875rem] md:text-[2rem] 3xl:text-[2.5rem] 4xl:text-[3.75rem] font-bold text-left page">
          {subPage ? (
            <Link href={subPage?.url ?? '#'} className="cursor-pointer">
              <span className="text-primary font-bold">{page} </span>
              <span className="underline">{subPage.text}</span>
            </Link>
          ) : (
            <span className="text-primary font-bold">{page}</span>
          )}
        </div>
      )}
      <div className="relative z-1 top-0 w-fit top-0 left-[50%] -translate-x-[50%] translate-y-0">
        <h1 className="font-bold leading-[1.33em] max-sm:text-[2.957rem] text-[8.075rem] md:text-[9.85rem] xl:text-[10.772rem] 2xl:text-[11.356rem] 3xl:text-[15.141rem] 4xl:text-[20.188rem]">{heading}</h1>
      </div>
      <div 
        className="z-0 absolute w-full m-auto w-full aspect-square rounded-full overflow-hidden"
        dangerouslySetInnerHTML={{ __html: '<spline-viewer url="https://prod.spline.design/8Kk8n4FoXe4tjJBu/scene.splinecode" class="w-full h-full 3xl:scale-[1.4] 4xl:scale-[2]"></spline-viewer>' }}
      ></div>
      {children}
    </section>
  );
};

export default DirectoryPageHeader;