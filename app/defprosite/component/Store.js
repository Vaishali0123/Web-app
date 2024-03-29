import React, { useEffect, useState } from "react";
import Image from "next/image";
import box from "../../assets/Images/Box.png";
import Link from "next/link";

function Store(props) {
  const [productt, setProductt] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // Add loading state
  const [add, setAdd] = useState(true);

  useEffect(() => {
    if (props.product) {
      // Simulate a delay (you can replace this with your data fetching logic)
      setTimeout(() => {
        setProductt(props.product);
        setIsLoading(false); // Set loading state to false when data is available
      }, 2000); // Simulate a 2-second delay
    }
  }, [props.product]);
  return (
    <>
      <div className="select-none">
        <div className="text-[21px] font-semibold text-center my-2 py-2">
          Store
        </div>
        <div className="flex justify-center items-center px-3">
          <div className="md:grid md:grid-cols-4 md:gap-6 pn:max-md:flex pn:max-sm:space-y-5 pn:max-sm:flex-col sm:max-md:flex-wrap justify-center items-center px-3">
            {/* <div className="flex flex-col bg-white py-2 w-[100%] h-[70%] justify-evenly items-center space-y-2">
              <div className="flex flex-col pn:max-md:bg-slate-100 mx-8 rounded-2xl justify-center items-center">
                <div className="flex justify-center items-center h-[60%] w-[60%] py-10">
                  <Image
                    src={box}
                    className="md:h-[60%] h-90%] w-90%] md:w-[60%] object-contain"
                  />
                </div>
                <div className=" text-black md:text-[24px] text-[18px] font-semibold">
                  No Products Yet
                </div>
                <div className=" text-black text-[14px] font-medium ">
                  Once you add Products, they will appear here!
                </div>
                <div className=" w-[240px] my-2 h-[40px] flex justify-center items-center bg-black text-white rounded-2xl hover:scale-105 hover:bg-[#3e3e3e] duration-100 text-[14px] ">
                  Add Product
                </div>
              </div>
            </div> */}
            <div className="flex gap-2 w-screen items-center justify-center">
              <div className="flex flex-col justify-center border-[2px] border-[#f9f9f9] h-[410px] rounded-xl max-w-[400px] sm:max-w-[320px] p-4 ">
                <div className="bg-[#f9f9f9] flex justify-center items-center rounded-lg py-3">
                  <div className="h-[170px] w-[200px] flex justify-center items-center ">
                    <img
                      src={
                        "https://m.media-amazon.com/images/I/81qXUHh48wL._UX695_.jpg"
                      }
                      alt="img"
                      className="w-[170px] h-[170px] "
                    />
                  </div>
                </div>
                <div className="flex flex-col space-y-1 my-2 text-lg font-medium">
                  <div className="text-base font-semibold h-[20px] overflow-hidden ">
                    Reebok Mens 2...
                  </div>
                  <div className="text-[#737373] text-[14px]">
                    sold by Reebok
                  </div>
                  <div className="text-[17px] font-semibold">
                    ₹ 882
                    <span className="text-base p-2 font-medium text-[#5585FF]">
                      -42%
                    </span>
                  </div>
                  <div className="font-semibold">
                    M.R.P:
                    <del className="font-medium p-2 text-[#FF0000]">₹ 1217</del>
                  </div>
                </div>
                {add ? (
                  <button
                    onClick={() => {
                      setAdd(!add);
                    }}
                    className="text-white bg-black rounded-2xl flex justify-center items-center space-x-2 h-12 w-full"
                  >
                    Add to cart
                  </button>
                ) : (
                  <Link
                    href={"../../main/library/Cart"}
                    className="text-black ring-1 ring-black bg-white rounded-2xl flex justify-center items-center space-x-2 h-12 w-full"
                  >
                    View
                  </Link>
                )}
              </div>

              <div className="flex flex-col justify-center border-[2px] border-[#f9f9f9] h-[410px] rounded-xl max-w-[400px] sm:max-w-[320px] p-4 ">
                <div className="bg-[#f9f9f9] flex justify-center items-center rounded-lg py-3">
                  <div className="h-[170px] w-[200px] flex justify-center items-center ">
                    <img
                      src={
                        "https://m.media-amazon.com/images/I/71l9T0FBHYL._UX695_.jpg"
                      }
                      alt="img"
                      className="w-[170px] h-[170px] "
                    />
                  </div>
                </div>
                <div className="flex flex-col space-y-1 my-2 text-lg font-medium">
                  <div className="text-base font-semibold h-[20px] overflow-hidden ">
                    Puma Mens Ultimate Ease
                  </div>
                  <div className="text-[#737373] text-[14px]">sold by puma</div>
                  <div className="text-[17px] font-semibold">
                    ₹ 882
                    <span className="text-base p-2 font-medium text-[#5585FF]">
                      -42%
                    </span>
                  </div>
                  <div className="font-semibold">
                    M.R.P:
                    <del className="font-medium p-2 text-[#FF0000]">₹ 1217</del>
                  </div>
                </div>
                <button className="text-white bg-black rounded-2xl flex justify-center items-center space-x-2 h-12 w-full">
                  Add to cart
                </button>
              </div>
              <div className="flex flex-col justify-center border-[2px] border-[#f9f9f9] h-[410px] rounded-xl max-w-[400px] sm:max-w-[320px] p-4 ">
                <div className="bg-[#f9f9f9] flex justify-center items-center rounded-lg py-3">
                  <div className="h-[170px] w-[200px] flex justify-center items-center ">
                    <img
                      src={
                        "https://m.media-amazon.com/images/I/81d-CUOgCVL._AC_UL320_.jpg"
                      }
                      alt="img"
                      className="w-[170px] h-[170px] "
                    />
                  </div>
                </div>
                <div className="flex flex-col space-y-1 my-2 text-lg font-medium">
                  <div className="text-base font-semibold h-[20px] overflow-hidden ">
                    Reebok Mens...
                  </div>
                  <div className="text-[#737373] text-[14px]">
                    sold by Reebok
                  </div>
                  <div className="text-[17px] font-semibold">
                    ₹ 882
                    <span className="text-base p-2 font-medium text-[#5585FF]">
                      -42%
                    </span>
                  </div>
                  <div className="font-semibold">
                    M.R.P:
                    <del className="font-medium p-2 text-[#FF0000]">₹ 1217</del>
                  </div>
                </div>
                <button className="text-white bg-black rounded-2xl flex justify-center items-center space-x-2 h-12 w-full">
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Store;
