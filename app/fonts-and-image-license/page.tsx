import BackHeader from "../components/shared/BackHeader"

export default function Page(){
    return(
         <div className="main-container">
           <BackHeader
           title="About Setapat"
           />
            <div className="my-4">
               <header className="flex items-center gap-16 mb-2">
                  <div className="flex-1"><p className="font-medium my-2">Our Fonts and Image License</p></div>
                  <div className="flex-[2]">
                    <hr className="bg-gray-400" />
                  </div>
                </header>
                
                <p>
                Setapat <br />
                Font and Image License Notification <br /><br />
                Dear User,<br />
                We would like to inform you that at Setapat, we take great pride in the designs we create for our products and services. We strive to provide you with high-quality visual content, including fonts and images, that enhance your experience and meet your needs.
                We believe in the importance of open-source initiatives and customization to foster creativity and collaboration within the design community. Therefore, we would like to clarify the license terms under which we provide fonts and images to our users:
                </p>
               <div className="my-5">
                <p className="text-lg font-medium capitalize">Open source Fonts</p>
                <p className="my-1">The fonts we utilize for our designs are sourced from open-source repositories. These fonts are typically licensed under various open-source licenses, such as SIL Open Font License (OFL), Apache License, or GNU General Public License (GPL). These licenses allow you to use, modify, and distribute the fonts for personal and commercial projects, subject to certain conditions mentioned in the respective license agreement. Please refer to the specific font&apos;s license file or documentation for more information on its usage terms.</p>
               </div>          
               <div className="my-5">
                <p className="text-lg font-medium capitalize">Customized Fonts</p>
                <p className="my-1">While we utilize open-source fonts, we also employ customization techniques to tailor them to our specific design requirements. The customization may include adjustments to spacing, ligatures, glyphs, or other design elements. However, please note that any modifications or customizations made to the original open-source fonts are the exclusive property of Setapat. We kindly request that you do not redistribute or use these customized fonts for any other purpose without explicit permission from Setapat.</p>
               </div>          
               <div className="my-5">
                <p className="text-lg font-medium capitalize">Open source Images</p>
                <p className="my-1">Similarly, the images we use in our designs are sourced from open-source repositories, public domain platforms, or under Creative Commons licenses. These licenses may vary from image to image and may have specific requirements for attribution, non-commercial usage, or modifications. We encourage you to review the license associated with each image to ensure compliance with its terms. You may find the relevant license details in the accompanying metadata or on the platform where the image is sourced.</p>
               </div>          
               <div className="my-5">
                <p className="text-lg font-medium capitalize">Customized Fonts</p>
                <p className="my-1">To maintain the uniqueness and visual identity of our designs, we may apply modifications or customization to the original open-source or Creative Commons licensed images. These modifications may include cropping, color adjustments, overlays, or other creative techniques. However, similar to customized fonts, any modifications made to the original images by Setapat remain the exclusive property of our company. Redistribution or use of these customized images without explicit permission from Setapat is strictly prohibited</p>
                <p className="my-1">We appreciate your understanding and compliance with these license terms. If you have any questions regarding the fonts or images we use, their licenses, or the customization process, please do not hesitate to contact us.
                   Thank you for choosing Setapat for your design needs. We look forward to serving you with exceptional and customized visual content.</p>
               </div>          
            </div>
         </div>
    )
}