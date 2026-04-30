"use client";

import { SetapatLoader } from "@/components";
import { ApplicationsProvider, DesignerApplication } from "@/services";
import { useParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { ApplicationContainer } from "./ApplicationContainer";

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

  return <ApplicationContainer application={application} />;
}
