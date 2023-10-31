import { Skeleton } from "antd";

export function ApplicationsLoader(){
    const loadersCount =new Array(4)
        .fill("loader")
        .map((item,i)=>`application-${item}-${i}`)
    return (
      <div>
       <div className="my-4">
       <Skeleton active paragraph={{rows:1}}/>
       </div>
      <div className="grid grid-cols-5 gap-4">
        <div className="col-span-2">
        {loadersCount.map(item=>(
            <div className="my-4" key={item}>
            <Skeleton.Button active block style={{height:"100px"}}/>
            </div>
        ))} 
        </div> 
        <div className="col-span-3">
          <div className="my-4">
            <Skeleton.Button active block style={{height:"500px"}}/>
          </div>
        
        </div>
      </div>
      </div>
    )
  }