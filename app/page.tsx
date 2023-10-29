import MainHeader from "./components/Header";
import MainLayout from "./components/MainLayout";
import Order from "./components/Order";
import SearchBar from "./components/media/SearchBar";

export default function Home() {
  return (
  <MainLayout>
    <div>
      <p className="my-2 font-semibold text-2xl">Hi Joe Lets mix some good design elements</p>
      <div className="flex items-center justify-between my-4">
        <div className="flex items-center gap-4">
          <p className="text-lg">Rank</p>
          <span className="inline-block py-2 text-sm font-semibold px-4 bg-black rounded-md text-white">Entry Level Developer</span>
        </div>
        <div className="flex items-center gap-6">
        <span className="inline-block py-2 px-4 bg-black font-semibold rounded-md text-sm text-white">301 Designs created</span>
        </div>
      </div>
      <MainHeader active={1}/>
      <div className="my-2">
      <SearchBar title="with order number"/>
       <div className="my-2 max-h-[400px] overflow-y-auto">
        <Order
        status ={"in Progress"}
        />
       </div>
      </div>
      <div className="bg-gray-100 p-2 flex items-center justify-between">
        <div className="text-center">
          <p className="text-xl font-semibold">1</p>
          <p className="text-sm">Total Designs</p>
        </div> 
        <div className="text-center">
          <p className="text-xl font-semibold">N2,500</p>
          <p className="text-sm">Total Payment</p>
        </div>
       </div>
    </div>
  </MainLayout>
  )
}
