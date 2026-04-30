import { Loader2Icon } from "lucide-react";
import { ReactNode } from "react";

interface ConfirmationModalProps {
  onCancel: () => void;
  onContinue: () => void;
  showCancelButton?: boolean;
  loading?: boolean;
  title: ReactNode;
  description: ReactNode;
  continueButton?: ReactNode;
}

export default function ConfirmationModal(props: ConfirmationModalProps) {
  const { showCancelButton = true } = props;
  return (
    <div className="flex px-[14px] items-center justify-center w-full h-full bg-white top-0 left-0 fixed z-[10000]">
      <div className="flex-1 max-w-[500px] mx-auto">
        <div className="bg-dark text-white rounded-lg px-16 py-9 text-center">
          <div className="sm:text-3xl font-bold min-w-[200px] inline-block border-b pb-4 border-[#707070]">
            {props.title}
          </div>
          <div className="text-sm sm:text-xl my-2 mb-5">
            {props.description}
          </div>
          {showCancelButton && (
            <button
              onClick={props.onCancel}
              className="bg-white w-10/12 mx-auto h-12 flex items-center justify-center sm:text-xl text-black rounded-[7px]"
            >
              Cancel
            </button>
          )}
        </div>
        <div className="mt-7">
          {props.continueButton ?? (
            <button
              disabled={props.loading}
              onClick={props.onContinue}
              className="h-12 disabled:opacity-50 sm:h-14 gap-x-4 rounded-md bg-primary w-full flex items-center justify-center"
            >
              <span>Continue</span>
              {props.loading && <Loader2Icon className="animate-spin" />}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
