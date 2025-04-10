import { LiaSignInAltSolid } from "react-icons/lia";

export default function creatives () {
  return (
    <div className="z-10 text-center space-y-6 max-w-[721px] mx-auto pt-40 relative overflow-hidden">
      <div className="spline-container spline-container-right" dangerouslySetInnerHTML={{ __html: '<spline-viewer url="https://prod.spline.design/8Kk8n4FoXe4tjJBu/scene.splinecode"></spline-viewer>' }}></div>
      <div className="text-[22px] text-left">
        <span className="text-yellow-400 font-bold">creatives</span>{' '}
        <button className="underline">register</button>
      </div>

      <h1 className="text-[197px] leading-60 font-extrabold mb-40">Sign In</h1>

      <div className="flex items-center justify-center border-b border-white max-w-sm mx-auto py-2 mb-40">
        <input
          type="email"
          placeholder="type your e-mail first"
          className="bg-transparent outline-none w-full text-[19px] text-white placeholder-white font-wix pb-6"
        />
        <button className="ml-2 text-white text-[37px] pb-6">
          <LiaSignInAltSolid />
        </button>
      </div>
    </div>
  );
}