"use client";
import { useCallback, useEffect, useState } from "react";
import { DesignerApplication } from "../types";
import { ApplicationsProvider } from "../service";
import { usePagination, useParamFilter } from "@/hooks";

export function useGetApplications() {
  const { page, limit, setPage, setLimit, paginationProps, onNext, onPrev } =
    usePagination();
  const [status, setStatus] = useParamFilter("status", 0);
  const [total, setTotal] = useState(0);
  const [hasNextPage, setHasNextPage] = useState(false);
  const [hasPrevPage, setHasPrevPage] = useState(false);
  const [totalPages, setTotalPages] = useState(1);
  const [applications, setApplications] = useState<DesignerApplication[]>([]);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<null | string>(null);

  const getApplications = useCallback(async () => {
    setLoading(true);
    setErrorMessage(null);
    try {
      const res = await ApplicationsProvider.getApplications({
        page,
        limit,
        status,
      });
      if (!res.data?.applications) {
        throw new Error(
          res.message || "An error occurred could not fetch applications",
        );
      }
      if (res.data.pagination) {
        setTotal(res.data.pagination.total);
        setTotalPages(res.data.pagination.total_pages);
        setHasNextPage(Boolean(res.data.pagination.next_page));
        setHasPrevPage(Boolean(res.data.pagination.prev_page));
      }
      setApplications(res.data.applications);
    } catch (error) {
      const err =
        (error as Error).message ||
        "An error occurred could not fetch applications";
      setErrorMessage(err);
    } finally {
      setLoading(false);
    }
  }, [page, status, limit]);

  useEffect(() => {
    getApplications();
  }, [getApplications]);

  return {
    applications,
    loading,
    errorMessage,
    getApplications,
    paginationProps,
    status,
    setStatus,
    setPage,
    setLimit,
    total,
    totalPages,
    hasNextPage,
    hasPrevPage,
    onNext,
    onPrev,
    page,
    limit,
  };
}
