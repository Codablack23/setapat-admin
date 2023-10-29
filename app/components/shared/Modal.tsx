"use client";

interface Modal{
    theme?:string,
    children:React.ReactNode,
    isOpen:boolean,
    closeModal?:()=>any
}
export default function Modal({closeModal,isOpen,children,theme}:Modal){
  const bg = theme?theme ==="light"?"bg-white":"modal-dark":"modal-dark"
  return(
    <div className={`modal ${isOpen?"modal-shown":"modal-hidden"} left-0 fixed w-full h-full p-2 top-0 ${bg}`}>
        <header className="my-4 flex justify-end">
            <button onClick={closeModal} className="bg-gray-300 rounded-full flex items-center justify-center h-8 w-8">
                <i className="bi bi-x-lg"></i>
            </button>
        </header>
     {children}
    </div>
  )
}