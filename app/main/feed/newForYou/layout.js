import Image from "next/image";
import Empty from "../../../assets/Images/community.png";

export default function NewforyouLayout({ children }) {
  return (
    <>
      {/* <div className=" w-[100%] h-screen dark:bg-[#000] bg-white flex pn:max-md:justify-center"> */}
      {/* <div className="h-screen overflow-auto scrollbar-hide pt-24 select-none md:min-w-[390px] md:w-[360px] flex flex-col items-center pn:max-sm:pb-36 md:pt-14 md:border-r-2 border-[#f7f7f7] dark:border-[#171717] self-end "></div> */}
      {/* Header */}
      {/* <div className="pn:max-md:hidden w-[100%]">{children}</div> */}
      {/* // Empty */}
      {/* <div className="w-[100%] pn:max-md:hidden flex p-2 bg-white dark:bg-[#171717] text-[#3e3e3e] flex-col justify-center items-center">
        <div className="flex bg-[#f9f9f9] p-4 py-8 rounded-2xl justify-center flex-col items-center">
          <Image src={Empty} alt="empty" />
          <div className="text-[20px] font-bold">
            Open Community To see Posts
          </div>
          <div className="font-medium">No messages in your inbox</div>
        </div>
      </div> */}

      {/*      
    </div> */}
      {/*if no data*/}
      <div className="w-[100%] h-screen bg-white dark:bg-[#171717] flex pn:max-md:justify-center ">
        <div className=" pn:max-md:h-[96vh] h-screen overflow-auto scrollbar-hide space-y-2 dark:bg-[#171717] py-12 pn:max-sm:pt-20 select-none md:min-w-[390px] md:w-[360px] flex flex-col items-center pb-20 md:pt-10 md:border-r-2 border-[#f7f7f7] dark:border-[#171717]   self-end ">
          {/* post 1*/}
          <div className="bg-slate-50 pn:max-sm:p-3 p-4 pn:max-md:rounded-2xl dark:bg-[#242424]">
            <div className="w-[100%] rounded-2xl flex flex-col items-center ">
              <div className="h-[55px] px-2 w-[100%] flex flex-row items-center ">
                <div className="w-[15%] flex object-scale-down items-center h-[100%] ">
                  <div className="h-[45px] w-[45px] rounded-2xl bg-slate-200 animate-pulse "></div>
                </div>
                {/* Community name */}
                <div className="flex flex-col w-[60%] justify-center px-2 items-start">
                  <div className="flex flex-col space-y-1 items-center">
                    <div className="text-black text-[13px] w-[100px] h-[20px] bg-slate-200 rounded-lg animate-pulse"></div>
                    <div className="text-black text-[13px] w-[100px] h-[10px] bg-slate-200 rounded-lg animate-pulse"></div>
                  </div>
                </div>

                {/* Animation of join nd bell */}

                <div className="cursor-pointer bg-slate-200 rounded-2xl animate-pulse flex h-[35px] w-[25%]  justify-center items-center "></div>
              </div>
            </div>

            {/* POst */}

            <div className="h-[200px] rounded-2xl bg-slate-200 animate-pulse w-[360px] flex justify-center items-center "></div>
            <div className="h-[55px] px-2 py-1 w-[100%] flex flex-col">
              <div className="text-[14px] text-black w-[120px] h-[20px] bg-slate-200 rounded-lg animate-pulse my-1"></div>
              <div className="flex flex-row justify-start w-[100%]">
                <div className="h-[20px] w-[20px] rounded-lg z-30 bg-slate-200 animate-pulse"></div>
                <div className="h-[20px] w-[20px] rounded-lg z-20 -ml-[10px] bg-slate-300 animate-pulse"></div>
                <div className="h-[20px] w-[20px] rounded-lg z-10 -ml-[10px] bg-slate-400 animate-pulse"></div>
                <div className="h-[20px] w-[20px] rounded-lg z-0 -ml-[10px] bg-slate-500 animate-pulse"></div>
              </div>
            </div>
          </div>
           {/* post 1*/}
           <div className="bg-slate-50 pn:max-sm:p-3 p-4 pn:max-md:rounded-2xl dark:bg-[#242424]">
            <div className="w-[100%] rounded-2xl flex flex-col items-center ">
              <div className="h-[55px] px-2 w-[100%] flex flex-row items-center ">
                <div className="w-[15%] flex object-scale-down items-center h-[100%] ">
                  <div className="h-[45px] w-[45px] rounded-2xl bg-slate-200 animate-pulse "></div>
                </div>
                {/* Community name */}
                <div className="flex flex-col w-[60%] justify-center px-2 items-start">
                  <div className="flex flex-col space-y-1 items-center">
                    <div className="text-black text-[13px] w-[100px] h-[20px] bg-slate-200 rounded-lg animate-pulse"></div>
                    <div className="text-black text-[13px] w-[100px] h-[10px] bg-slate-200 rounded-lg animate-pulse"></div>
                  </div>
                </div>

                {/* Animation of join nd bell */}

                <div className="cursor-pointer bg-slate-200 rounded-2xl animate-pulse flex h-[35px] w-[25%]  justify-center items-center "></div>
              </div>
            </div>

            {/* POst */}

            <div className="h-[200px] rounded-2xl bg-slate-200 animate-pulse w-[360px] flex justify-center items-center "></div>
            <div className="h-[55px] px-2 py-1 w-[100%] flex flex-col">
              <div className="text-[14px] text-black w-[120px] h-[20px] bg-slate-200 rounded-lg animate-pulse my-1"></div>
              <div className="flex flex-row justify-start w-[100%]">
                <div className="h-[20px] w-[20px] rounded-lg z-30 bg-slate-200 animate-pulse"></div>
                <div className="h-[20px] w-[20px] rounded-lg z-20 -ml-[10px] bg-slate-300 animate-pulse"></div>
                <div className="h-[20px] w-[20px] rounded-lg z-10 -ml-[10px] bg-slate-400 animate-pulse"></div>
                <div className="h-[20px] w-[20px] rounded-lg z-0 -ml-[10px] bg-slate-500 animate-pulse"></div>
              </div>
            </div>
          </div>
           {/* post 2*/}
           <div className="bg-slate-50 pn:max-sm:p-3 p-4 pn:max-md:rounded-2xl dark:bg-[#242424]">
            <div className="w-[100%] rounded-2xl flex flex-col items-center ">
              <div className="h-[55px] px-2 w-[100%] flex flex-row items-center ">
                <div className="w-[15%] flex object-scale-down items-center h-[100%] ">
                  <div className="h-[45px] w-[45px] rounded-2xl bg-slate-200 animate-pulse "></div>
                </div>
                {/* Community name */}
                <div className="flex flex-col w-[60%] justify-center px-2 items-start">
                  <div className="flex flex-col space-y-1 items-center">
                    <div className="text-black text-[13px] w-[100px] h-[20px] bg-slate-200 rounded-lg animate-pulse"></div>
                    <div className="text-black text-[13px] w-[100px] h-[10px] bg-slate-200 rounded-lg animate-pulse"></div>
                  </div>
                </div>

                {/* Animation of join nd bell */}

                <div className="cursor-pointer bg-slate-200 rounded-2xl animate-pulse flex h-[35px] w-[25%]  justify-center items-center "></div>
              </div>
            </div>

            {/* POst */}

            <div className="h-[200px] rounded-2xl bg-slate-200 animate-pulse w-[360px] flex justify-center items-center "></div>
            <div className="h-[55px] px-2 py-1 w-[100%] flex flex-col">
              <div className="text-[14px] text-black w-[120px] h-[20px] bg-slate-200 rounded-lg animate-pulse my-1"></div>
              <div className="flex flex-row justify-start w-[100%]">
                <div className="h-[20px] w-[20px] rounded-lg z-30 bg-slate-200 animate-pulse"></div>
                <div className="h-[20px] w-[20px] rounded-lg z-20 -ml-[10px] bg-slate-300 animate-pulse"></div>
                <div className="h-[20px] w-[20px] rounded-lg z-10 -ml-[10px] bg-slate-400 animate-pulse"></div>
                <div className="h-[20px] w-[20px] rounded-lg z-0 -ml-[10px] bg-slate-500 animate-pulse"></div>
              </div>
            </div>
          </div>


           {/* post 3*/}
           <div className="bg-slate-50 pn:max-sm:p-3 p-4 pn:max-md:rounded-2xl dark:bg-[#242424]">
            <div className="w-[100%] rounded-2xl flex flex-col items-center ">
              <div className="h-[55px] px-2 w-[100%] flex flex-row items-center ">
                <div className="w-[15%] flex object-scale-down items-center h-[100%] ">
                  <div className="h-[45px] w-[45px] rounded-2xl bg-slate-200 animate-pulse "></div>
                </div>
                {/* Community name */}
                <div className="flex flex-col w-[60%] justify-center px-2 items-start">
                  <div className="flex flex-col space-y-1 items-center">
                    <div className="text-black text-[13px] w-[100px] h-[20px] bg-slate-200 rounded-lg animate-pulse"></div>
                    <div className="text-black text-[13px] w-[100px] h-[10px] bg-slate-200 rounded-lg animate-pulse"></div>
                  </div>
                </div>

                {/* Animation of join nd bell */}

                <div className="cursor-pointer bg-slate-200 rounded-2xl animate-pulse flex h-[35px] w-[25%]  justify-center items-center "></div>
              </div>
            </div>

            {/* POst */}

            <div className="h-[200px] rounded-2xl bg-slate-200 animate-pulse w-[360px] flex justify-center items-center "></div>
            <div className="h-[55px] px-2 py-1 w-[100%] flex flex-col">
              <div className="text-[14px] text-black w-[120px] h-[20px] bg-slate-200 rounded-lg animate-pulse my-1"></div>
              <div className="flex flex-row justify-start w-[100%]">
                <div className="h-[20px] w-[20px] rounded-lg z-30 bg-slate-200 animate-pulse"></div>
                <div className="h-[20px] w-[20px] rounded-lg z-20 -ml-[10px] bg-slate-300 animate-pulse"></div>
                <div className="h-[20px] w-[20px] rounded-lg z-10 -ml-[10px] bg-slate-400 animate-pulse"></div>
                <div className="h-[20px] w-[20px] rounded-lg z-0 -ml-[10px] bg-slate-500 animate-pulse"></div>
              </div>
            </div>
          </div>
         

          {/* POst */}
        </div>
        <div className="w-[100%] pn:max-md:hidden flex p-2 bg-white dark:bg-[#171717] text-[#3e3e3e] flex-col justify-center items-center">
          <div className="flex bg-[#f9f9f9]  dark:bg-[#1d1d1d] dark:text-[#fff] p-4 py-8 rounded-2xl justify-center flex-col items-center">
            <Image src={Empty} alt="empty" />
            <div className="text-[20px] font-bold">
              Open Community To see Posts
            </div>
            <div className="font-medium">No messages in your inbox</div>
          </div>
        </div>
      </div>
    </>
  );
}
