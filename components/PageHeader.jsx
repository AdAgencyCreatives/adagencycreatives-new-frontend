import Link from "next/link";

/**
 * @param {{ page: string, heading: string, subPage?: {url: string, text: string} }} props
 */
const PageHeader = ({ page, subPage, heading }) => {
  return (
    <div>
      <div
        className="spline-container w-[50%] h-[50%] inset-0 m-auto z-0"
        dangerouslySetInnerHTML={{ __html: '<spline-viewer url="https://prod.spline.design/8Kk8n4FoXe4tjJBu/scene.splinecode"></spline-viewer>' }}
      ></div>
      <div className="relative z-1">
        <div className="text-[22px] text-left">
          {subPage ? (
            <Link href={subPage?.url ?? '#'} className="cursor-pointer">
              <span className="text-yellow-400 font-bold">{page} </span>
              <span className="underline">{subPage.text}</span>
            </Link>
          ) : (
            <span className="text-yellow-400 font-bold">{page}</span>
          )}
        </div>

        <h1 className="text-5xl md:text-9xl 2xl:text-[182px] 3xl:text-[242px] 4xl:text-[323.4px] font-bold">{heading}</h1>
      </div>
    </div>
  );
};

export default PageHeader;