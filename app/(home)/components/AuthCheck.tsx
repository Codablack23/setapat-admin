"use client"
import { ReactNode, useEffect } from "react";
import AuthLoader from "./AuthLoader";
import { useAuthContext } from "@/context";
import { useRouter } from "next/navigation";

interface Props {
  children: ReactNode;
}

export default function AuthCheck({ children }: Props) {
  const { loading, user } = useAuthContext();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.replace("/login"); // smoother than assign
    }
  }, [loading, user, router]);

  if (loading) return (
    <>
    <AuthLoader />
    </>
  );
  if (!user) return <AuthLoader />; // keep loader while redirecting

  return <>{children}</>;
}