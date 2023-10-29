import Navbar from "../Navbar"
import BackHeader from "../components/shared/BackHeader"

export default function Page(){
    return(
         <div className="main-container">
           <BackHeader
           title="About Setapat"
           />
            <div className="my-4">
               <div>
               <header className="flex items-center gap-16 mb-2">
                  <div className="flex-1"><p className="text-lg font-medium">History //</p></div>
                  <div className="flex-[2]">
                    <hr className="bg-gray-400" />
                  </div>
                </header>
               
                <p className="my-3">Setapat (Apartment Setup) So originally setapat is from the concept of &quot;apartment setup&quot;  apartment which refers to your workspace, your canvas, your confined, whitespace, the perimeter in which design has to be done. So we leverage on the principles of design to set up the elements required for a particular design in that space. This is the simple history of setapat
                   Apartment Setup = Setapat</p>
                <p className="my-3">Setapat is a creative design company that provides a wide range of designs, strategy, setup and more.
                Founded officially in 2021, they specialise in offering digital design services to freelancers, startups, SMEs, Enterprise, NGOs and education.
                It carries out production, prints, installations construction, documentation, storage, maintenance of its designs, offers technical support and training as its extended services to simplify its design processes.
                </p>
               </div> 
               <div className="my-6">
               <header className="flex items-center gap-16 mb-2">
                  <div className="flex-1"><p className="text-lg font-medium">Purpose //</p></div>
                  <div className="flex-[2]">
                    <hr className="bg-gray-400" />
                  </div>
                </header>
                <p className="my-1"><span className="font-bold">Our Why;</span> Quality, affordability, accessibility, and reliability</p>
             
               </div>
              <div  className="my-6">
               <header className="flex items-center gap-16 mb-2">
                  <div className="flex-1"><p className="text-lg font-medium">Vision //</p></div>
                  <div className="flex-[2]">
                    <hr className="bg-gray-400" />
                  </div>
                </header>

                <p className="my-1">To help people and businesses throughout the world design better, faster, and accomplish more.</p>
               </div>
              <div  className="my-6">
               <p className="text-lg font-medium">Mission //</p>
                <p className="my-1">We strive to offer our customers the best available packages, the lowest possible prices at the quickest possible time.</p>
             
               </div>
             <div>
               <header className="flex items-center gap-16 mb-2">
                  <div className="flex-1"><p className="text-lg font-medium">Core Values</p></div>
                  <div className="flex-[2]">
                    <hr className="bg-gray-400" />
                  </div>
                </header>
               
                <div className="my-1">
                    <p>1. Quality</p>
                    <p>2. Originality</p>
                    <p>3. Innovation</p>
                    <p>4. Patriotism</p>
                    <p>5. Trust</p>
                    <p>6. Respect</p>
                </div>
             
               </div>
            </div>
         </div>
    )
}