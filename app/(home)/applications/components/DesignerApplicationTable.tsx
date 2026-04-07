"use client";
// import useGetApplications from "@/lib/hooks/applications/useGetApplications";
import { Modal, Spin, Table } from "antd"


export default function DesignerApplicationTable(){
    // const {
    //     loading,
    //     applications,
    //     APPLICATION_COLUMNS,
    //     deleteModalShown,
    //     deleteSupervisorAccount,
    //     closeModal,
    //     loadingDelete
    // } = useGetApplications()

    // console.log({applications})

    return (
        <div>
            {/* <Modal open={deleteModalShown} footer={null} centered closable={false}>
                <div className="text-center">
                    <p className="text-3xl font-bold">Confirm Delete</p>
                    <p className="text-lg my-2">Are you sure you want to delete this supervisor account this process can not reversed</p>
                    <div className="flex justify-center gap-5 my-2">
                        <button onClick={closeModal} className="bg-dark text-white text-lg px-6 font-semibold py-1 rounded-md">Cancel</button>
                        <button disabled={loadingDelete} onClick={deleteSupervisorAccount} className="bg-theme text-lg px-6 py-1 rounded-md font-semibold text-dark">
                            {
                                loadingDelete
                                ?<Spin/>
                                :<span>Continue</span>
                            }
                        </button>
                    </div>
                </div>
            </Modal>
            <Table columns={APPLICATION_COLUMNS} dataSource={applications} loading={loading}/> */}
        </div>
    )
}