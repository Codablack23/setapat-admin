"use client";
import { useGetApplications } from "@/services";

import SearchIcon from "@/icons/search";
import { ApplicationList } from "../components/ApplicationList";
import { useMemo } from "react";
import Link from "next/link";

function Pagination({
  total,
  totalPages,
  hasNextPage,
  hasPrevPage,
  page,
  onNext,
  onPrev,
}: {
  total: number;
  limit: number;
  page: number;
  onNext: () => void;
  onPrev: () => void;
  totalPages: number;
  hasNextPage: boolean;
  hasPrevPage: boolean;
}) {
  return (
    <footer className="flex items-center justify-between mt-10 text-sm text-[#737171]">
      {/* Prev */}
      <button
        onClick={onPrev}
        disabled={!hasPrevPage}
        className="font-semibold text-dark disabled:opacity-40 disabled:cursor-not-allowed"
      >
        Prev
      </button>

      {/* Center Info */}
      <div className="text-center">
        <p className="font-medium text-dark">
          Page {page} of {totalPages}
        </p>
        <p className="text-xs text-[#9a9a9a]">Total: {total} items</p>
      </div>

      {/* Next */}
      <button
        onClick={onNext}
        disabled={!hasNextPage}
        className="font-semibold text-dark disabled:opacity-40 disabled:cursor-not-allowed"
      >
        Next
      </button>
    </footer>
  );
}

const statuses = ["PENDING", "ACCEPTED", "REJECTED"];

export default function Page() {
  const {
    applications,
    loading,
    page,
    status,
    limit,
    total,
    onNext,
    onPrev,
    hasNextPage,
    hasPrevPage,
    totalPages,
  } = useGetApplications();

  const applicationStatus = useMemo(() => status || "PENDING", [status]);

  return (
    <div className="p-10 max-w-[900px] mx-auto">
      <header className="flex gap-x-1">
        {statuses.map((item) => {
          if (applicationStatus == item) {
            return (
              <Link
                key={`/applications?status=${item}`}
                href={`/applications?status=${item}`}
                className="bg-[#D9D9D9] cursor-pointer flex-1 text-center border-b-8 border-theme h-[69px] flex items-center justify-center"
              >
                <p className="text-xl">{item}</p>
              </Link>
            );
          }
          return (
            <Link
              key={`/applications?status=${item}`}
              href={`/applications?status=${item}`}
              className="bg-[#D9D9D9] cursor-pointer text-[#A8A8A8] flex-1 text-center border-b-8 border-[#A8A8A8] h-[69px] flex items-center justify-center"
            >
              <p className="text-xl">{item}</p>
            </Link>
          );
        })}
      </header>
      <div className="">
        <header className="bg-[#F0F0F0] my-3.5 h-[56px] flex items-center px-3.5">
          <input
            type="text"
            className="flex-1 text-lg bg-transparent outline-0 outline-none placeholder:text-[#A8A8A8]"
            placeholder="Search application"
          />
          <SearchIcon />
        </header>
        <ApplicationList applications={applications} loading={loading} />
        <Pagination
          total={total}
          limit={limit}
          page={page}
          onNext={onNext}
          onPrev={onPrev}
          hasNextPage={hasNextPage}
          hasPrevPage={hasPrevPage}
          totalPages={totalPages}
        />
      </div>
    </div>
  );
}
