import Link from "next/link";

/**
 * @param {{ page: string, heading: string, subPage?: {url: string, text: string} }} props
 */
const PageHeader = ({ page, subPage, heading }) => {
  return (
    <div>
      <div
        className="spline-container inset-0 m-auto z-1"
        dangerouslySetInnerHTML={{ __html: '<spline-viewer url="https://prod.spline.design/8Kk8n4FoXe4tjJBu/scene.splinecode"></spline-viewer>' }}
      ></div>
      <div className="relative z-2">
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

        <h1 className="text-[197px] leading-60 font-extrabold mb-40">{heading}</h1>
      </div>
    </div>
  );
};

export default PageHeader;