import MainLayout from "../components/MainLayout";
import AvailabiltyStatus from "./components/Availabilty";
import DesignerStatus from "./components/DesignerStatus";
import ProfileHeader from "./components/ProfileHeader";


export default function Page(){
    return(
      <MainLayout>
        <div>
            <ProfileHeader/>
            <DesignerStatus/>
            <AvailabiltyStatus/>
        </div>
      </MainLayout>
    )
}