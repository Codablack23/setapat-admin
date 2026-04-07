import { DesignerApplication } from "@/services";
import { ConfigProvider, Skeleton, Spin } from "antd";
import { DateTime } from "luxon";
import Link from "next/link";

export function ApplicationList({
  applications,
  loading,
}: {
  applications: DesignerApplication[];
  loading: boolean;
}) {
  if (loading) {
    return (
      <div className="flex flex-col h-[250px] items-center justify-center">
        <div className="bg-white shadow-lg h-16 flex items-center justify-center w-16 rounded-full border border-[#F0F0F0]/50 mx-auto">
          <ConfigProvider
            theme={{
              components: {
                Spin: {
                  colorPrimary: "#FFCC00",
                },
              },
            }}
          >
            <Spin size="large" />
          </ConfigProvider>
        </div>
      </div>
    );
  }

  if (applications.length === 0) {
    return (
      <div className="flex h-[250px] items-center justify-center">
        <div className="flex-1 p-4 mx-auto">
          <p className="text-[76px] text-[#A8A8A8] font-thin leading-[100%]">
            No Applications
          </p>
        </div>
      </div>
    );
  }

  return (
    <ul className="space-y-1 mt-1">
      {applications.map((item) => {
        const createdAt = new Date(item.created_at);
        const submittedAt = DateTime.fromJSDate(createdAt).toFormat(
          "LLL dd, yyyy hh:mma",
        );

        return (
          <li
            key={item.id}
            className="bg-[#F0F0F0] p-4 flex justify-between items-center"
          >
            <div>
              <p className="font-bold text-lg">
                {item.firstname} {item.lastname}
              </p>
              <p className="font-light">{submittedAt}</p>
            </div>
            <span className="inline-flex items-center text-xs border bg-black h-8 text-white px-4 rounded-xl">
              {item.status}
            </span>
            <Link
              href={`/applications/${item.id}`}
              className="inline-flex items-center border border-black h-8 bg-white px-10 rounded-xl"
            >
              View
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
