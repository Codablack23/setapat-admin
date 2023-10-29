import MediaLayout from "../components/MediaLayout";
import SearchBar from "../components/media/SearchBar";
import Icon from "./components/Icon";

export default function Home() {
  return (
   <MediaLayout active={2}>
     <SearchBar
     title="icons"
     />
     <div className="my-2 grid grid-cols-5 gap-2">
       {new Array(10).fill("").map((icon,i)=>(
        <Icon
        key={`icon-${i}`}
        />
       ))}
     </div>
     <div className="flex items-center justify-between w-full my-4">
      <p>20 Icons (All Icons on SVG)</p>
      <button className="py-2 px-6 rounded-md bg-dark text-white">Download All</button>
     </div>
     <br /><br /><br />
     <div className="mt-20">
      <header className="mt-16 py-3 rounded-t-lg px-3 bg-dark uppercase text-white text-xl">New Icons</header>
      <div className="my-2 grid grid-cols-5 gap-2">
       {new Array(7).fill("").map((icon,i)=>(
        <Icon
        key={`icon-${i}`}
        />
       ))}
     </div>
     <div className="flex justify-between items-center w-full my-2">
      <p>7 New Icons (All Icons on SVG)</p>
      <button className="py-2 px-6 rounded-md bg-dark text-white">Download All</button>
     </div>
     </div>
   </MediaLayout>
  )
}