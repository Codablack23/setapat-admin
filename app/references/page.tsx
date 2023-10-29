import Link from "next/link";
import MediaLayout from "../components/MediaLayout";
import SearchBar from "../components/media/SearchBar";

const imageLinks = [
  "https://www.freepik.com",
  "https://www.pexels.com",
  "https://www.unsplash.com"
]
const removeBgLinks = [
  "https://www.erase.bg/upload",
  "https://www.remove.bg/upload",
]

export default function Home() {
  return (
   <MediaLayout active={3}>
    <SearchBar
     title="references"
     />
     <div className="my-2">
       <header className="mt-4 py-3 px-3 bg-dark uppercase rounded-t-lg text-white text-xl mb-5">images</header>
       {imageLinks.map(link=>(
        <div className="flex w-full items-center my-2 justify-between" key={link}>
        <Link href={link}>
          <p className="underline">{link}</p>
        </Link>  
        <Link href={link}>
          <button className="bg-dark py-1 px-16 rounded-md text-white">Visit</button>
        </Link>
       </div>
       ))}
     </div>  
     <br /><br />
     <div className="my-2">
       <header className="mt-4 py-3 px-3 bg-dark uppercase rounded-t-lg text-white text-xl mb-5">image background removal</header>
       {removeBgLinks.map(link=>(
        <div className="flex w-full items-center my-2 justify-between" key={link}>
        <Link href={link}>
          <p className="underline">{link}</p>
        </Link>  
        <Link href={link}>
          <button className="bg-dark py-1 px-16 rounded-md text-white">Visit</button>
        </Link>
       </div>
       ))}
     </div>  
     <br /><br />
     <div className="my-2">
       <header className="mt-4 py-3 px-3 bg-danger uppercase rounded-t-lg text-white text-xl mb-5">Warining</header>
        <div className="my-2 mb-4">
         <p className="text-xl text-grey-800 font-bold mb-3">FOR IMAGES</p>
         <p className="text-grey-800 text-lg font-light">Do not use resources outside our references for designs as they do not come under our open source license agreement.</p>
       </div> 
       <div className="my-2">
         <p className="text-xl text-grey-800 font-bold mb-3">FOR IMAGES BACKGROUND REMOVAL</p>
         <p className="text-grey-800 text-lg font-light mb-4">You can use Photoshop, Microsoft PPT, and others you dim fit to remove background. Image background removal is licensed to limit usage. </p>
         <p className="text-grey-800 text-lg font-light mb-4">We will provide access to Image background removal  accounts when necessary to help cater to multiple usage. </p>
       </div>
     </div>
   </MediaLayout>
  )
}
