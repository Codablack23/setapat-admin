"use client";
import { ReactNode, useEffect } from "react";
import SideBar from "./Sidebar";
import StyledComponentsRegistry from "@/lib/AntdRegistry";
import Navbar from "../Navbar";
import { useAuthContext } from "@/context";
import { useRouter } from "next/navigation";
import { SetapatLoader } from "@/components";
interface MediaLayoutProps {
  children: ReactNode;
}
export default function MainLayout({ children }: MediaLayoutProps) {
  const { loading, user } = useAuthContext();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.replace("/login"); // smoother than assign
    }
  }, [loading, user, router]);

  if (loading) {
    return (
      <>
      <Navbar />
      <SetapatLoader
        loadingText={<p className="text-center">Loading Dashboard...</p>}
      />
      </>
    );
  }
  if (!user) {
    return (
      <>
      <Navbar />
      <SetapatLoader
        loadingText={<p className="text-center">Loading Dashboard...</p>}
      />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <SideBar />
      <main className="ml-[360px]">
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </main>
    </>
  );
}
