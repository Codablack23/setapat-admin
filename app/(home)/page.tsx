"use client";
import Link from "next/link";
import { DesignerApplicationOverview, Overview } from "./components/Overview";

export default function Home() {
  return (
    <div className="p-10 max-w-[900px] mx-auto">
      <header className="pb-4">
        <p className="font-bold text-2xl">
          Hi Admin, let’s see some statistics
        </p>
      </header>
      <Overview />
      <div className="mt-20">
        <header className="flex items-center text-white px-3.5 py-1.5 rounded-t-lg bg-black uppercase">
          RECENT APPLICATIONS
        </header>
        <DesignerApplicationOverview />
        <footer className="text-center text-[#737171] mt-10">
          <Link href={"/applications"}>
            See <b className="text-dark">All Applications</b>
          </Link>
        </footer>
      </div>
    </div>
  );
}
