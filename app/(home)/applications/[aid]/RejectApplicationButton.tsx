import { Loader2Icon } from "lucide-react";
import { useState } from "react";
import ConfirmationModal from "../../components/shared/ConfirmationModal";
import { ApplicationsProvider, DesignerApplication } from "@/services";
import { message } from "antd";

export function RejectApplicationButton({
  application,
}: {
  application: DesignerApplication;
}) {
  const [modalShown, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleRejectApplication = async () => {
    setLoading(true);
    try {
      const res = await ApplicationsProvider.rejectApplication(application.id);
      if (res.status != "success") {
        throw new Error(res.message || "Failed to reject application");
      }
      message.success("Application rejected successfully");
    } catch (error) {
      const errMessage =
        (error as Error).message ?? "Failed to reject application";
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
          onContinue={handleRejectApplication}
          title={"Reject Application"}
          description={
            <>
              Are you sure you want to reject {application.firstname}{" "}
              {application.lastname} application? This action cannot be
              reversed.
            </>
          }
        />
      )}
      <button
        disabled={loading}
        onClick={() => setShowModal(true)}
        className="w-full flex items-center disabled:opacity-60 justify-center gap-x-2 cursor-pointer bg-dark  text-center p-2 text-white rounded-md text-lg"
      >
        Reject Application
        {loading && <Loader2Icon className="animate-spin" />}
      </button>
    </>
  );
}
