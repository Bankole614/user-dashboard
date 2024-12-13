import { staff } from "./constants/dashboard-consts"
import { BsSend } from "react-icons/bs"


const QuickTransfer = () => {
  return (
    <div className="">
      <h2 className="text-neutral-600  text-lg font-semibold mb-2">Quick Transfer</h2>
      <div className=" flex flex-col p-5 gap-4 justify-between h-72 bg-white rounded-2xl">
        <div className="flex  gap-8 overflow-x-auto no-scrollbar justify-between">
          {
            staff.map((staff) => (
              <div key={staff.id} className="flex flex-col">
                <div className="flex flex-col gap-2 items-center">
                  <div className="h-20 w-20 rounded-full border">
                    <img src={staff.img} alt="" className="rounded-full" />
                  </div>
                  <div className="flex flex-col items-center">
                    <p className="text-sm">{staff.name}</p>
                    <p className="text-slate-400">{staff.post}</p>
                  </div>
                </div>
              </div>
            ))
          }
          
        </div>
        <div className="flex justify-between gap-2 items-center ">
          <p className="text-slate-400 text-sm">Write Amount</p>
          <div className="flex">
            <input type="text" className="bg-slate-200 text-sm outline-none rounded-full xl:w-32 lg:w-24 w-full p-2 placeholder-slate-400" placeholder="525.00" />
            <button className="text-white bg-blue-700 px-4 rounded-full text-sm flex items-center gap-1.5 -ml-7">Send <BsSend /></button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default QuickTransfer