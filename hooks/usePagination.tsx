"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useMemo } from "react";

export const usePagination = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const page = parseInt(searchParams.get("page") || "1", 10);
  const limit = parseInt(searchParams.get("limit") || "10", 10);

  const query = useMemo(() => ({ page, limit }), [page, limit]);

  const setPagination = (newPage: number, newLimit?: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", String(newPage));
    if (newLimit !== undefined) params.set("limit", String(newLimit));
    router.push(`?${params.toString()}`);
  };

  const setPage = (newPage: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", String(newPage));
    router.push(`?${params.toString()}`);
  };

  const setLimit = (newLimit: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("limit", String(newLimit));
    // Optionally reset page to 1 when limit changes
    params.set("page", "1");
    router.push(`?${params.toString()}`);
  };

  const paginationProps = {
    current: page,
    pageSize: limit,
    onChange: setPagination,
    showSizeChanger: true,
  };

  const onPrev = () => {
    if (page - 1) {
      setPage(page - 1);
    }
  };

  const onNext = () => {
    setPage(page + 1);
  };

  return {
    page,
    limit,
    query, // For API usage
    paginationProps, // For AntD
    setPagination, // page + optional limit
    setPage, // only page
    setLimit, // only limit
    onNext,
    onPrev,
  };
};
