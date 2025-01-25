import { useQuery } from "@tanstack/react-query";
import React from "react";
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { IoIosPeople } from "react-icons/io";
import { IoFastFood } from "react-icons/io5";
import { MdOutlineLocalShipping } from "react-icons/md";
import useAuth from "../../Firebase/useAuth";
import useAxiosSecure from "../../Pages/Shared/Custom/useAxiosSecure";

function AdminHome() {
    const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data: adminData = {} } = useQuery({
    queryKey: ["admin-stats"],
    queryFn: async () => {
      const res = await axiosSecure.get("/admin-stats");
      return res.data;
    },
  });


  return (
    <div>
      <h1 className="text-3xl font-semibold text-purple-500">
        <span>Welcome to ,</span>{" "}
        {user?.displayName ? user?.displayName : "Back"}
      </h1>

      <div className="stats shadow md:flex gap-x-5 justify-center items-center">
  <div className="stat">
    <div className="stat-figure text-secondary">
    <FaMoneyBillTrendUp  className="text-3xl"/>
    </div>
    <div className="stat-title">Total Revenue </div>
    <div className="stat-value">{adminData?.totalRevenue} $</div>
    {/* <div className="stat-desc">Jan 1st - Feb 1st</div> */}
  </div>

  <div className="stat">
    <div className="stat-figure text-secondary">
    <IoIosPeople className='text-3xl ' />
    </div>
    <div className="stat-title">Total Customer </div>
    <div className="stat-value">{adminData?.totalUser}</div>
    <div className="stat-desc">↗︎ 400 (22%)</div>
  </div>

  <div className="stat">
    <div className="stat-figure text-secondary">
    <MdOutlineLocalShipping className="text-3xl" />
    </div>
    <div className="stat-title">Total Order</div>
    <div className="stat-value">{adminData?.totalOrder}</div>
    <div className="stat-desc">↘︎ 90 (14%)</div>
  </div>
  <div className="stat">
    <div className="stat-figure text-secondary">
    <IoFastFood className="text-3xl" />
    </div>
    <div className="stat-title">Total Menu</div>
    <div className="stat-value">{adminData?.totalMenu}</div>
    
  </div>
</div>
    </div>
  );
}

export default AdminHome;
