import { ReactNode } from "react";
import SetapatLogo from "../icons/setapat logo";

export function SetapatLoader({ loadingText }: { loadingText?: ReactNode }) {
  return (
    <div className="h-screen bg-gray-100 w-full z-[1000] flex items-center justify-center ">
      <div>
        <div className="flex-1 mb-3 rounded-full relative flex items-center justify-center text-center h-[90px] w-[90px] mx-auto">
          <SetapatLogo width={70} height={70} />
          <div className="w-full h-full absolute border-[3px] rounded-full border-black/40"></div>
          <div className="w-full h-full absolute animate-spin border-[3px] rounded-full border-l-theme border-t-theme"></div>
        </div>
        {loadingText && loadingText}
      </div>
    </div>
  );
}
