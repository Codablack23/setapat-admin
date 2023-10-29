import Navbar from "../Navbar"
import BackHeader from "../components/shared/BackHeader"

// 
// 
// 

// 
// 

export default function Page(){
    return(
         <div className="main-container">
           <BackHeader
           title="Privacy Policy"
           />
            <div className="my-4">
                <header className="flex items-center gap-16 mb-2">
                  <div className="flex-1"><p className="mb-8 font-medium">Our Privacy Policy</p></div>
                  <div className="flex-[2]">
                    <hr className="bg-gray-400" />
                  </div>
                </header>
               <div>
               <p className="text-lg font-medium">Introduction //</p>
                <p className="my-3">At Setapat, we are committed to protecting the privacy of our customers and users of our design services. This Privacy Policy outlines how we collect, use, and disclose personal information that we receive from our customers or users of our website or services. By using our website or services, you acknowledge that you have read, understood, and agreed to the terms of this Privacy Policy.</p>
               </div> 

               <div className="my-6">
               <p className="text-lg font-medium">Information Collection:</p>
                <p className="my-1">We may collect personal information from you when you use our services, register an account with us, or interact with our website. This may include your name, email address, phone number, billing and shipping address, and other contact information. <br />
                We also collect design contents like logos, fonts, images, docs, audio, video solely for the purpose getting a design brief for projects. <br />
                We may also collect non-personal information, such as your IP address, browser type, device type, and usage data, which may be collected automatically through cookies or other tracking technologies.
                </p>
               </div>

              <div  className="my-6">
               <p className="text-lg font-medium">Use of Information:</p>
                <p className="my-1">We use the personal information we collect to provide our design services to you, to communicate with you about our services, to process your orders, to fulfill your requests, and to improve our services. 
                 <br/> We use the deliverables of our design services on our websites as samples of work done, however there is an option for users to prevents us from doing so by clicking on the “Mark as Confidential” on the Order Page (One-Off Plan) for highly sensitive and confidential files.
                  <br/> We may also use your personal information to send you marketing communications about our services, promotions, and events. You may opt-out of receiving marketing communications at any time by following the instructions provided in the communication.
                </p>
             
               </div>
              <div  className="my-6">
               <p className="text-lg font-medium">Disclosure of Information:</p>
                 <p className="my-1">
                  We do not sell or rent your personal information to third parties. However, we may share your personal information with our service providers who help us provide our services, such as payment processors, shipping providers, and customer support services.
                  <br /> We may also disclose your personal information if we are required to do so by law or in response to a court order or subpoena, or if we believe that such disclosure is necessary to protect our rights or the rights of others, to investigate fraud or other illegal activities, or to prevent harm.
                </p>
               </div> 
               <div  className="my-6">
               <p className="text-lg font-medium">Data Security:</p>
                 <p className="my-1">
                    We take reasonable measures to protect your personal information from unauthorized access, use, or disclosure. We use industry-standard encryption to protect your data during transmission, and we store your data in secure servers.
                    <br /> However, no method of transmission over the internet or electronic storage is completely secure, and we cannot guarantee absolute security of your data. If you have any concerns about the security of your data, please contact us at setapatsystems@gmail.com
                 </p>
               </div> 
               <div  className="my-6">
               <p className="text-lg font-medium">Changes to the Privacy Policy:</p>
                 <p className="my-1">
                   We may update this Privacy Policy from time to time by posting a new version on our website. We encourage you to review this Privacy Policy periodically to stay informed about our information practices.
                </p>
               </div>
             <div  className="my-6">
               <p className="text-lg font-medium">Contact Us:</p>
                 <p className="my-1">
                 If you have any questions or concerns about this Privacy Policy, please contact us at setapatsystems@gmail.com
                </p>
               </div>
            </div>
         </div>
    )
}