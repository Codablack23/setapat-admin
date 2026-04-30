"use client";
import { ApplicationsProvider, DesignerApplication, Rank } from "@/services";
import { message } from "antd";
import { Loader2Icon } from "lucide-react";
import { useState } from "react";
import ConfirmationModal from "../../components/shared/ConfirmationModal";

export function AcceptApplicationButton({
  application,
}: {
  application: DesignerApplication;
}) {
  const [modalShown, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleAcceptApplication = async () => {
    setLoading(true);
    try {
      const res = await ApplicationsProvider.acceptApplication(application.id, {
        rank: application.rank,
      });
      if (res.status != "success") {
        throw new Error(res.message || "Failed to accept application");
      }
      message.success("Application accepted successfully");
    } catch (error) {
      const errMessage =
        (error as Error).message ?? "Failed to accept application";
      message.error(errMessage);
    } finally {
      setLoading(false);
    }
  };

  if (application.status !== "PENDING") {
    return null;
  }

  return (
    <>
      {modalShown && (
        <ConfirmationModal
          onCancel={() => setShowModal(false)}
          onContinue={handleAcceptApplication}
          title={"Accept Application"}
          loading={loading}
          description={
            <div>
              Are you sure you want to accept {application.firstname}{" "}
              {application.lastname} application? This action cannot be
              reversed.
            </div>
          }
        />
      )}
      <button
        disabled={loading}
        onClick={() => setShowModal(true)}
        className="mt-3 flex items-center disabled:opacity-60 justify-center gap-x-2 py-2 rounded-md w-full bg-[#FFCC00] text-lg"
      >
        Accept Application
        {loading && <Loader2Icon className="animate-spin" />}
      </button>
    </>
  );
}
