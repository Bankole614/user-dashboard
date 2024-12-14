import { service, serviceList } from "./constants/service-consts"


const Services = () => {

  const colorClass = (id: number): string => {
    switch (id) {
      case 1:
        return "text-green-400 bg-green-100";
        case 2:
        return "text-pink-400 bg-pink-100";
      default:
        return "text-blue-400 bg-blue-100";
    }
  };

  const color = (id: number): string => {
    switch (id) {
      case 1:
        return "text-green-400 bg-green-100";
      case 2:
        return "text-pink-400 bg-pink-100";
      case 3:
        return "text-yellow-400 bg-yellow-100";
      case 4:
        return "text-blue-400 bg-blue-100";
      case 5:
        return "text-pink-400 bg-pink-100";
      default:
        return "text-blue-400 bg-blue-100";
    }
  };


  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between w-full gap-8 overflow-x-auto no-scrollbar">
        {
          service.map((item) => (
            <div key={item.id} className="flex items-center justify-center w-full gap-3 sm:gap-6 py-4 xl:px-8 px-2 bg-white rounded-2xl">
              <div>
                <p  className={`p-4 rounded-full ${colorClass(item.id)} `} >{<item.icon size={20} />}</p>
              </div>
              <div className="min-w-36">
                <p className="font-semibold text-lg">{item.title}</p>
                <p className="text-slate-400  text-sm">{item.description}</p>
              </div>
            </div>
          ))
        }
      </div>
      <div className="flex flex-col">
        <h2 className="text-neutral-600 text-lg font-semibold">Bank Service List</h2>
        <div className="flex flex-col gap-4">
      {
        serviceList.map((item) => (
          <div key={item.id} className="bg-white flex items-center justify-between p-4 rounded-2xl">
            <div className="flex items-center gap-4">
              <div className={`p-3 rounded-xl ${color(item.id)} `}>
                {<item.icon size={24} />}
              </div>
              <div>
                <p className="">{item.title}</p>
                <p className="text-slate-400 text-sm">It is long established</p>
              </div>
            </div>
            <div className="">
              <p>Lorem Ipsum</p>
              <p className="text-slate-400 text-sm">Many Publishing</p>
            </div>
            <div className="hidden lg:block">
              <p>Lorem Ipsum</p>
              <p className="text-slate-400 text-sm">Many Publishing</p>
            </div>
            <div className="hidden xl:block">
              <p>Lorem Ipsum</p>
              <p className="text-slate-400 text-sm">Many Publishing</p>
            </div>
          </div>
        ))
      }
    </div>
      </div>
    </div>
  )
}

export default Services