import BackHeader from "@/app/components/shared/BackHeader";
import ImageTabs from "./ImageTabs";
import ImageCarousel from "./ImageCarousel";
export default function Page (){
    const tabitems = [
        {
            title:<p className="uppercase">image <br /> Upload</p>,
            key:"1",
            Body:<ImageCarousel/>
        }, 
        {
            title:<p className="uppercase">Preference <br /> Upload</p>,
            key:"2",
            Body:<ImageCarousel/>
        }, 
        {
            title:<p className="uppercase">Design <br /> Sample Upload</p>,
            key:"3",
            Body:<ImageCarousel/>
        },
    ]
  return(
    <div>
        <BackHeader
        title="view image uploads"
        />
        <ImageTabs
        active="1"
        items={tabitems}
        />

    </div>
  )
}