import PageHeader from "components/PageHeader";
import { LiaSignInAltSolid } from "react-icons/lia";

const JobsDirectory = () => {
  return (
    <div className="text-center space-y-6 max-w-[1014px] mx-auto pt-40 relative">
      <PageHeader
        page="jobs"
        heading="Directory"
      />

      <div className="flex items-center justify-center border-b border-white max-w-md mx-auto py-2 mb-40 z-2 relative">
        <input
          type="email"
          placeholder="title, name, location, etc."
          className="bg-transparent outline-none w-full text-[19px] text-white placeholder-white font-wix pb-6"
        />
        <button className="ml-2 text-white text-[37px] pb-6">
          <LiaSignInAltSolid />
        </button>
      </div>
    </div>
  );
};

export default JobsDirectory;