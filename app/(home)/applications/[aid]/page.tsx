"use client";

import { SetapatLoader } from "@/components";
import ProfileIcon from "@/icons/profile-icon";
import TimeIcon from "@/icons/time";
import { ApplicationsProvider, DesignerApplication } from "@/services";
import { ConfigProvider, Image, Spin } from "antd";
import { DateTime } from "luxon";
import { useParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

export default function Page() {
  const { aid } = useParams();
  const [application, setApplication] = useState<DesignerApplication | null>(
    null,
  );
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<null | string>(null);

  const days = ["mon", "tues", "wed", "thurs", "fri", "sat", "sun"];

  const getApplication = useCallback(async () => {
    setLoading(true);
    setErrorMessage(null);
    try {
      const res = await ApplicationsProvider.getApplicationDetails(aid);
      if (!res.data?.application) {
        throw new Error(
          res.message || "An error occurred could not fetch applications",
        );
      }
      setApplication(res.data.application);
    } catch (error) {
      const err =
        (error as Error).message ||
        "An error occurred could not fetch applications";
      setErrorMessage(err);
    } finally {
      setLoading(false);
    }
  }, [aid]);

  useEffect(() => {
    getApplication();
  }, [getApplication]);

  if (loading) {
    return <SetapatLoader />;
  }

  if (!application) return null;

  const createdAt = new Date(application.created_at);
  const submittedAt = DateTime.fromJSDate(createdAt).toFormat(
    "LLL dd, yyyy hh:mma",
  );

  const rawStartTime = application.opens_at;
  const rawStopTime = application.closes_at;

  const tools = application.tools;
  const specs = application.designer_specifications;

  return (
    <div className="p-10 max-w-[700px] mx-auto">
      <div className="md:flex items-center justify-between w-full">
        <div className="bg-gray-200 h-32 flex items-center justify-center p-1 w-32 border border-black rounded-full shrink-0 mr-4">
          <div className="border border-black h-[110px] w-[110px] rounded-full flex items-center">
            <ProfileIcon height={110} width={110} />
          </div>
        </div>

        <div className="flex-1 w-full flex flex-col gap-4">
          <div className="w-full flex items-center justify-between">
            <p className="text-2xl font-semibold">
              {application?.firstname + " " + application?.lastname}
            </p>
          </div>

          <div className="flex items-center justify-between w-full gap-4">
            <div className="flex items-center gap-1">
              <p className="text-xs font-light">Submission Time</p>
              <p className="text-xs font-bold">{submittedAt}</p>
            </div>
          </div>
        </div>
      </div>

      <section className="flex justify-between items-start my-6 w-full">
        <div className="flex flex-col gap-4 pl-2">
          <div className="flex items-center gap-2 text-sm">
            <p className="text-gray-800">Rank</p>
            <div className="bg-[#A8A8A8] text-white text-left px-4 w-[230px] h-[32px] capitalize rounded-md flex items-center justify-start">
              {application.rank.toLowerCase()} Designer
            </div>
            <Image
              src={"/icons/verified.svg"}
              alt="verified icon"
              width={24}
              height={24}
            />
          </div>
          <div className="mt-2 text-left">
            <div className="flex items-center gap-2 mb-1">
              <p className="text-[#A8A8A8] font-bold text-sm">
                Design Specification
              </p>
            </div>
            <p className="capitalize text-base font-light mt-1 w-[250px] text-[#333333]">
              {specs.length > 0
                ? specs.join(", ") + "."
                : "No specifications added."}
            </p>
          </div>
          <div className="mt-2 text-left">
            <div className="flex items-center gap-2 mb-1">
              <p className="text-[#A8A8A8] font-bold text-sm">Design Tools</p>
            </div>
            <p className="capitalize text-base font-light mt-1 w-[250px] text-[#333333]">
              {tools?.length > 0 ? tools.join(", ") + "." : "No tools added."}
            </p>
          </div>
        </div>
      </section>

      <section className="my-8">
        <header className="bg-dark uppercase rounded-t-md text-white p-2 text-lg">
          Availability Status
        </header>
        <div className="my-4">
          <div className="md:flex items-center my-2 gap-3">
            <p>Days:</p>
            <div className="flex gap-2 items-center">
              <p> {application.working_days.join(", ")}</p>
            </div>
          </div>
          <div className="my-4 md:flex items-center gap-3">
            <p>Time: </p>
            <div className="flex items-center gap-2 flex-1">
              <div className="flex rounded-md py-0.5 items-center px-2 gap-2 transition-all">
                {/* Start Time Container */}
                <div
                  className={`flex items-center gap-2 border border-black rounded-md px-2  transition-all relative ${
                    rawStartTime === "00:00" && rawStopTime === "23:59"
                      ? "bg-black text-white"
                      : "bg-transparent text-black"
                  }`}
                  onClick={(e) => {
                    const input = e.currentTarget.querySelector("input");
                    if (input) input.showPicker();
                  }}
                >
                  <input
                    type="time"
                    value={rawStartTime}
                    readOnly
                    style={
                      rawStartTime === "00:00" && rawStopTime === "23:59"
                        ? { colorScheme: "dark" }
                        : undefined
                    }
                    className="text-sm font-bold bg-transparent outline-none cursor-pointer [&::-webkit-calendar-picker-indicator]:opacity-0 [&::-webkit-calendar-picker-indicator]:absolute [&::-webkit-calendar-picker-indicator]:inset-0 [&::-webkit-calendar-picker-indicator]:w-full [&::-webkit-calendar-picker-indicator]:h-full [&::-webkit-calendar-picker-indicator]:cursor-pointer z-10"
                  />
                  <TimeIcon
                    width="24"
                    height="24"
                    fill={
                      rawStartTime === "00:00" && rawStopTime === "23:59"
                        ? "#ffffff"
                        : "#000000"
                    }
                  />
                </div>

                <span>—</span>

                {/* End Time Container */}
                <div
                  className={`flex items-center gap-2 border border-black rounded-md px-2  transition-all relative ${
                    rawStartTime === "00:00" && rawStopTime === "23:59"
                      ? "bg-black text-white"
                      : "bg-transparent text-black"
                  }`}
                  onClick={(e) => {
                    const input = e.currentTarget.querySelector("input");
                    if (input) input.showPicker();
                  }}
                >
                  <input
                    type="time"
                    value={rawStopTime}
                    style={
                      rawStartTime === "00:00" && rawStopTime === "23:59"
                        ? { colorScheme: "dark" }
                        : undefined
                    }
                    className="text-sm font-bold bg-transparent outline-none cursor-pointer [&::-webkit-calendar-picker-indicator]:opacity-0 [&::-webkit-calendar-picker-indicator]:absolute [&::-webkit-calendar-picker-indicator]:inset-0 [&::-webkit-calendar-picker-indicator]:w-full [&::-webkit-calendar-picker-indicator]:h-full [&::-webkit-calendar-picker-indicator]:cursor-pointer z-10"
                  />
                  <TimeIcon
                    width="24"
                    height="24"
                    fill={
                      rawStartTime === "00:00" && rawStopTime === "23:59"
                        ? "#ffffff"
                        : "#000000"
                    }
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className=" space-y-1">
        <div className="bg-[#f0f0f0] grid grid-cols-2 px-3.5 py-2.5">
          <div>
            <p className="text-xl text-dark font-bold">
              {application.firstname}
            </p>
            <p className="text-[A8A8A8] font-light">First Name</p>
          </div>
          <div>
            <p className="text-xl text-dark font-bold">
              {application.lastname}
            </p>
            <p className="text-[A8A8A8] font-light">Last Name</p>
          </div>
        </div>
        <div className="bg-[#f0f0f0] px-3.5 py-2.5">
          <div>
            <p className="text-xl text-dark font-bold lowercase">
              {application.email}
            </p>
            <p className="text-[A8A8A8] font-light">Email Address</p>
          </div>
        </div>
        <div className="bg-[#f0f0f0] px-3.5 py-2.5">
          <div>
            <p className="text-xl text-dark font-bold lowercase">
              {application.telegram_handle}
            </p>
            <p className="text-[A8A8A8] font-light">Telegram Username </p>
          </div>
        </div>
        <div className="bg-[#f0f0f0] px-3.5 py-2.5">
          <div>
            <p className="text-xl text-dark font-bold lowercase">
              {application.phone_number || <span className="">-</span>}
            </p>
            <p className="text-[A8A8A8] font-light">WhatsApp/Call Contact </p>
          </div>
        </div>
      </div>

      <button className="mt-3 py-2 rounded-md w-full bg-[#FFCC00] text-lg">
        Accept Application
      </button>

      <button className="w-full my-3 cursor-pointer inline-block text-center p-2 border border-black rounded-md text-lg">
        Send Message
      </button>
      <button className="w-full cursor-pointer bg-dark inline-block text-center p-2 text-white rounded-md text-lg">
        Reject Application
      </button>
    </div>
  );
}
