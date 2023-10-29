import MediaLayout from "../components/MediaLayout";
import SearchBar from "../components/media/SearchBar";
import Font from "./components/Font";

export default function Home() {
  return (
   <MediaLayout active={1}>
    <SearchBar
     title="fonts"
     />
       <div className="my-2 grid grid-cols-3 gap-2">
       {new Array(6).fill("").map((icon,i)=>(
        <Font
        key={`icon-${i}`}
        />
       ))}
     </div>
     <div className="flex items-center justify-between w-full my-4">
      <p>6 fonts</p>
      <button className="py-2 px-6 rounded-md bg-dark text-white">Download All</button>
     </div>
     <br /><br /><br />
     <div className="mt-20">
      <header className="mt-16 py-3 px-3 bg-dark uppercase rounded-t-lg text-white text-xl">New Fonts</header>
      <div className="my-2 grid grid-cols-3 gap-2">
       {new Array(2).fill("").map((icon,i)=>(
        <Font
        key={`icon-${i}`}
        />
       ))}
     </div>
     <div className="flex justify-between items-center w-full my-2">
      <p>2 New fonts</p>
      <button className="py-2 px-6 rounded-md bg-dark text-white">Download All</button>
     </div>
     </div>
   </MediaLayout>
  )
}
