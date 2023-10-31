import { AdminContext } from "@/app/AdminContext";
import ApplicationService from "@/services/Application";
import { DatePicker, Image, Input, Modal, Select, Spin, TimePicker, message, notification } from "antd";
import { IconType, NotificationInstance } from "antd/es/notification/interface";
import dayjs,{Dayjs} from "dayjs";
import { Dispatch, FormEvent, ReactNode, SetStateAction, useContext, useState } from "react";


interface Data{
    [key:string]:any
}
interface ApplicationDetailsProps{
    application:Data
}

type TimeRangeValue = [start:Dayjs,stop:Dayjs]
export default function ApplicationDetails(props:ApplicationDetailsProps){
    const {overview} = useContext(AdminContext)
    const [rejectModalOpen,setRejectOpen] = useState(false)
    const [isLoading,setIsLoading] = useState(false)
    const [acceptModalOpen,setAcceptOpen] = useState(false)
    const [inviteModalOpen,setInviteOpen] = useState(false)
    const [supervisor,setSupervisor] = useState("")
    const [meetingLink,setMeetingLink] = useState("")
    const [meetingDate,setMeetingDate] = useState(dayjs().add(2,"days"))
    const [meetingStartTime,setMeetingStartTime] = useState(dayjs("9:00","HH:mm"))
    const [meetingStopTime,setMeetingStopTime] = useState(dayjs("10:00","HH:mm"))

    const [api, contextHolder] = notification.useNotification();


    const openNotification = (message:ReactNode,description:ReactNode,type:IconType) => {
      api[type]({
        message,
        description,
        duration: 10,
      });
    };

    const supervisors = overview
    ?overview.supervisors
    ?overview.supervisors.map((data:Data)=>(
      {value:data.email,label:`${data.firstName} ${data.lastName}`}
    ))
    :[]
    :[]
    const defaultOptions = [
      {value:"",label:"Default"},
      ...supervisors
    ]
    const handleSelect=(value:string)=>{
      setSupervisor(value)
    }
    const handleDatePick=(value:Dayjs | null)=>{
       if((value as Dayjs).diff(dayjs()) > 2){
        setMeetingDate(value as Dayjs)
       }else{
        message.warning("Please set a meeting date atleast 2 days from now ")
       }
       
    } 
    const handlePickTime=([stop,start]:TimeRangeValue )=>{
       setMeetingStartTime(start)
       setMeetingStopTime(stop)
    }
    const toggleModal=(setState:Dispatch<SetStateAction<boolean>>)=>{
      return ()=>{
        setState(prev=>!prev)
      }
    }
    const handleSendMeetingLink=async(e:FormEvent)=>{
      e.preventDefault()
      console.log(application.application_id)
      console.log({
        meetingDate,
        meetingLink,
        meetingStartTime,
        meetingStopTime
      })
      setIsLoading(true)
      const response = await ApplicationService.sendInvite({
        meetingDate,
        meetingLink,
        meetingStartTime,
        meetingStopTime
      })
      setIsLoading(false)
      console.log(response)
      if(response.status === "success"){
       setInviteOpen(false)
       openNotification("Invite successfully sent",response.message,'success')
      }else{
        openNotification(
          response.error_code || "Could not send invite",
        (response.error_message || "Sorry could not send invite due to some server errors",'success'),
        "error")
      }
    } 
    const handleAcceptDesigner=async(e:FormEvent)=>{
      e.preventDefault()
      setIsLoading(true)
      const response = await ApplicationService.accept(
        application.application_id,
        {supervisor} )
      setIsLoading(false)
      console.log(response)
      if(response.status === "success"){
       openNotification("Application Accepted",response.message,'success')
      }else{
        openNotification(
          response.error_code || "Application Acceptance Failed",
        (response.error_message || "sorry could not accept applications due to some server errors",'success'),
        "error")
      }
    }    
    const handleRejectDesigner=async()=>{
      console.log(application.application_id)
      setIsLoading(true)
      const response = await ApplicationService.reject(application.application_id,)
      console.log(response)
      setIsLoading(false)
      if(response.status === "success"){
       openNotification("Application Rejected",response.message,'success')
      }else{
        openNotification(
          response.error_code || "Application  Rejection Failed",
        (response.error_message || "sorry could not reject applications due to some server errors"),
        "error")
      }
    }
    const {application} = props
    return (
    <div className="relative min-h-[400px]">
      {contextHolder}
     <Modal maskClosable={false} footer={null} open={rejectModalOpen} onCancel={toggleModal(setRejectOpen)} centered>
        <div className="text-center">
          <p><i className="text-8xl bi bi-question-circle"></i></p>
          <p className="text-lg my-3 font-light">Are you sure you want to reject this application this process cannot be reversed</p>
          <div className="flex sticky top-0 w-full my-4 px-2 justify-center items-center gap-4">
            <button disabled={isLoading} 
            onClick={handleRejectDesigner} className="px-4 py-2 bg-primary text-sm font-medium">
              {isLoading
              ?<Spin/>
              :<span className="">Continue</span>  
            }
            </button>
            <button disabled={isLoading} 
            onClick={toggleModal(setRejectOpen)} className="disabled:cursor-not-allowed px-4 py-2 bg-black text-white text-sm font-medium">Cancel</button>
        </div>
        </div>
     </Modal> 
     <Modal maskClosable={false} title="Accept Designer" footer={null} open={acceptModalOpen} onCancel={toggleModal(setAcceptOpen)} centered>
        <form onSubmit={handleAcceptDesigner} className="my-2 border-t pt-6">
          <div className="my-2">
            <label htmlFor="" className="block text-sm font-medium">Assign Supervisor</label>
            <Select
            value={supervisor}
            style={{width:"100%"}}
            defaultValue={supervisor}
            onSelect={handleSelect}
            options={defaultOptions}
            />
          </div>
          <button disabled={isLoading} type="submit" className="w-full px-4 py-2 my-4 disabled:cursor-not-allowed rounded-md bg-primary font-medium">
           {isLoading
              ?<Spin/>
              :<span className="">Submit</span>  
            }
          </button>
        </form>
     </Modal> 
     <Modal maskClosable={false} title={"Send Interview Link"} footer={null} open={inviteModalOpen} onCancel={toggleModal(setInviteOpen)} centered>
       <form onSubmit={handleSendMeetingLink} className="my-2 border-t pt-6">
          <div className="my-2">
            <label htmlFor="" className="block text-sm font-medium">Meeting Link</label>
            <Input 
            required 
            minLength={3}
            type="url"
            // pattern=""
            value={meetingLink} 
            onChange={(e)=>setMeetingLink(e.target.value)} 
            placeholder="Provide a valid link"/>
          </div> 
          <div className="my-2">
            <label htmlFor="" className="block text-sm font-medium">Date</label>
            <DatePicker 
            value={meetingDate}
            style={{width:"100%"}} onChange={handleDatePick}/>
          </div> 
          <div className="my-4">
            <label htmlFor="" className="block text-sm font-medium">Time</label>
            <TimePicker.RangePicker 
            value={[meetingStopTime,meetingStartTime]}
            onOk={(values)=>{
              handlePickTime(values as TimeRangeValue)
            }} 
            onChange={(values)=>{
              handlePickTime(values as TimeRangeValue)
            }}
            minuteStep={15}
            format={["HH:mm","HH:mm"]}
            style={{width:"100%"}}/>
          </div>
          <br />
          <button disabled={isLoading} type="submit" className="w-full px-4 py-2 my-4 rounded-md bg-primary font-medium">
             {isLoading
              ?<Spin/>
              :<span className="">Submit</span>  
             }
          </button>
        </form>
     </Modal>
     
      <header className="flex sticky top-0 w-full px-2 justify-between items-center gap-4">
         <button onClick={toggleModal(setAcceptOpen)} className="px-4 py-2 bg-primary text-sm font-medium">Accept Designer</button>
         <button onClick={toggleModal(setRejectOpen)} className="px-4 py-2 bg-danger text-white text-sm font-medium">Reject Designer</button>
      </header>
       <div className="my-10">
         <div className="w-32 mx-auto my-4 h-32 border flex items-center justify-center rounded-full bg-gray-200">
          <Image
          src={application.photoURL}
          alt={`${application.firstName}-${application.firstName}-photoURL`}
          height={126}
          width={126}
          className="rounded-full object-cover"
          />
         </div>
         <div className="text-center">
            <p className="capitalize text-2xl font-medium">{application.firstName} {application.lastName}</p>
            <button onClick={toggleModal(setInviteOpen)} className="px-4 py-2 bg-gray-200 text-sm font-medium">Send Interview Invite</button>
            <button onClick={toggleModal(setInviteOpen)} className="px-4 py-2 bg-gray-200 text-sm font-medium">{application.status}</button>
         </div>
         <br />
        <div>
            <p className="text-sm font-medium border-b px-2 border-gray-200 my-4 uppercase">Personal Details</p>
            <div className="my-3 mx-2">
              <p className="text-xs text-gray-300 uppercase">Email Address</p>
              <p className="my-1 font-medium">{application.email}</p>
            </div>       
            <div className="my-3 mx-2">
              <p className="text-xs text-gray-300 uppercase">phone Number</p>
              <p className="my-1 font-medium">{application.phoneNumber}</p>
            </div> 
            <div className="my-3 mx-2">
              <p className="text-xs text-gray-300 uppercase">Resume Link</p>
              <p className="my-1 font-medium">{application.resumeLink}</p>
              <button className="p-2 my-2 bg-gray-200 text-sm font-medium">View Resume</button>
            </div> 
            <div className="my-3 mx-2">
              <p className="text-xs text-gray-300 uppercase">Telegram handle</p>
              <p className="my-1 font-medium">https://t.me/{application.telegramHandle}</p>
            </div>
        </div> 
        <div className="mt-10">
            <p className="text-sm font-medium border-b px-2 border-gray-200 my-4 uppercase">Work Details</p>
            <div className="my-3 mx-2">
              <p className="text-xs text-gray-300 uppercase">Working Days</p>
              <p className="my-1 font-medium">{application.workingDays.split(",").join(" , ")}</p>
            </div>       
            <div className="my-3 mx-2">
              <p className="text-xs text-gray-300 uppercase">Working  Hours</p>
              <p className="my-1 font-medium">{application.startTime} - {application.stopTime}</p>
            </div> 
        </div>
       </div>
     
    </div>
    )
  }