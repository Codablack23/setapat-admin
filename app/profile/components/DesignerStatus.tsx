export default function DesignerStatus(){
    return (
        <section className="grid grid-cols-2 gap-10 my-6">
           <div>
            <div className="flex gap-3 items-center">
              <p>Rank</p>
              <span className="inline-block text-sm bg-gray-300 text-white p-2 rounded-md px-6">Entry Level Designer</span>
              <span className="inline-flex h-6 w-6 rounded-full text-white items-center justify-center bg-dark"><i className="bi bi-check text-2xl"></i></span>
            </div>
            <div className="my-2">
                <p className="my-2 text-gray-400 font-bold text-sm">Design Specifications</p>
                <p>Flyer, Poster, Letterhead, Invoice, Business Card, Cover Art, Product Label.</p>
            </div>
           </div>
           <div className="flex flex-col items-end">
             <p className="inline-block text-right mb-2 text-sm bg-gray-300 text-white p-2 rounded-md w-8/12">Design Range <span className="bg-white p-1 px-4 rounded-md ml-2 text-black">1</span></p>
             <p className="inline-block text-right mb-2 text-sm bg-gray-300 text-white p-2 rounded-md w-8/12">303 Design Created</p>
             <p className="inline-block text-right mb-2 text-sm bg-gray-300 text-white p-2 rounded-md w-8/12">1 Design Withdrawal</p>
             <p className="inline-block text-right mb-2 text-sm bg-danger text-white p-2 rounded-md w-8/12">1 Design Red Flag</p>
           </div>

        </section>
    )
}