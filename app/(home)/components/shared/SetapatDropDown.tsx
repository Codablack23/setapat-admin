/** @format */

import ChevronDown from "@/icons/chevron-down";
import { ReactNode, useState } from "react";

/** @format */
interface Data {
  [key: string]: any;
}

export interface SetapatOption {
  value: string;
  label: string;
  disabled?: boolean;
}

interface DropDownProps {
  value: string;
  className?: string;
  label?: ReactNode;
  readonly?: boolean;
  containerClass?: string;
  optionsClassName?: string;
  onSelect: (value: any, option?: Data) => void;
  options: SetapatOption[];
}

export function SetapatDropDown(props: DropDownProps) {
  const { options } = props;

  const [open, setOpen] = useState(false);
  const currentOption = options.find(
    (option) => option.value.toLowerCase() === props.value?.toLowerCase(),
  );

  function toggleDropDown() {
    setOpen(!open);
  }
  function selectOption(option: SetapatOption) {
    return () => {
      props.onSelect(option.value, option);
      setOpen(false);
    };
  }

  function getHeaderContent() {
    if (props.readonly)
      return (
        <header
          className={`${props.className} main-transition border opacity-60 flex justify-between rounded-md cursor-not-allowed w-full px-[14px] h-[36px] lg:h-[51px] items-center border-black`}
        >
          <p className="text-xs text-[#a8a8a8] font-bold capitalize lg:text-base">
            {props.value}
          </p>
          <button
            type="button"
            className={`${
              open && "rotate-180"
            } h-6 w-6 sm:h-9 sm:w-9 flex items-center justify-center`}
          >
            <ChevronDown
              fillColor="#a8a8a8"
              height={7}
              width={12}
              className="sm:hidden"
            />
            <ChevronDown
              fillColor="#a8a8a8"
              className="hidden sm:inline-block"
            />
          </button>
        </header>
      );
    return (
      <>
        <header
          onClick={toggleDropDown}
          className={`${props.className} main-transition cursor-pointer border flex justify-between rounded-md w-full px-[14px] min-h-[36px] lg:min-h-[51px] items-center border-black`}
        >
          <div className="text-sm lg:text-base font-normal lg:font-bold">
            {currentOption
              ? currentOption.label
              : (props.label ?? <p>Select Category </p>)}
          </div>
          <button
            type="button"
            className={`${
              open && "rotate-180"
            } h-6 w-6 sm:h-9 sm:w-9 flex items-center justify-center`}
          >
            <ChevronDown height={7} width={12} className="sm:hidden" />
            <ChevronDown className="hidden sm:inline-block" />
          </button>
        </header>
      </>
    );
  }

  return (
    <div className={`relative ${props.containerClass}`}>
      {getHeaderContent()}
      {open ? (
        <ul className="bg-[#F0F0F0] absolute z-10 left-0 w-full card my-1">
          {options.map((option, i) => {
            return (
              <li
                onClick={selectOption(option)}
                className={`lg:font-bold font-normal text-sm lg:text-base ${
                  option.disabled
                    ? "opacity-30 cursor-not-allowed"
                    : "cursor-pointer"
                } ${props.optionsClassName} ${
                  i !== options.length - 1 ? "border-b " : ""
                } hover:text-white hover:bg-[#A8A8A8] border-[#A8A8A8] h-[36px] lg:h-[51px] px-3 lg:px-[14px] flex items-center`}
                key={option.value}
              >
                <p className="text-[14px] lg:text-[16px]">{option.label}</p>
              </li>
            );
          })}
        </ul>
      ) : null}
    </div>
  );
}
