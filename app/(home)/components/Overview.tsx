"use client";

import { Stats, StatsProvider, useGetApplications } from "@/services";
import { useCallback, useEffect, useState } from "react";
import { ApplicationList } from "./ApplicationList";

export function Overview() {
  const [loading, setLoading] = useState(false);
  const [stats, setStats] = useState<Stats>({
    total_designer_applications: 0,
    total_designers: 0,
    total_orders: 0,
    total_users: 0,
  });

  const getStats = useCallback(async () => {
    setLoading(true);
    try {
      const res = await StatsProvider.getStats();
      if (res.data) {
        setStats(res.data);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    getStats();
  }, [getStats]);

  return (
    <header className="grid gap-x-1 grid-cols-4">
      <div className="bg-[#D9D9D9] text-center border-b-8 border-[#A8A8A8] py-2 p-6">
        <p className="text-[32px] font-black">{stats.total_orders}</p>
        <p>Total Orders</p>
      </div>
      <div className="bg-[#D9D9D9] text-center border-b-8 border-[#A8A8A8] py-2 p-6">
        <p className="text-[32px] font-black">{stats.total_designers}</p>
        <p>Total Designers</p>
      </div>
      <div className="bg-[#D9D9D9] text-center border-b-8 border-[#A8A8A8] py-2 p-6">
        <p className="text-[32px] font-black">{stats.total_users}</p>
        <p>Total Users</p>
      </div>
      <div className="bg-[#D9D9D9] text-center border-b-8 border-[#A8A8A8] py-2 p-6">
        <p className="text-[32px] font-black">
          {stats.total_designer_applications}
        </p>
        <p>Total Applications</p>
      </div>
    </header>
  );
}

export function DesignerApplicationOverview() {
  const { applications, loading } = useGetApplications();

  return <ApplicationList applications={applications} loading={loading} />;
}
