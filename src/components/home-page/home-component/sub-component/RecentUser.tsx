"use client";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import userIcon from "../../../../../public/assets/img/user/user-1.png";
import CustomDateFormatter from "@/hooks/CustomDateFormatter ";
const RecentUser = () => {
  const [recentUsers, setrecentUsers] = useState([
    {
      name: "John Doe",
      photo: null,
      date: "2025-01-01T10:00:00Z",
    },
    {
      name: "Jane Smith",
      photo: null,
      date: "2025-01-02T15:30:00Z",
    },
    {
      name: "Alex Johnson",
      photo: null,
      date: "2025-01-03T12:45:00Z",
    },
  ]);
  useEffect(() => {
    // axios
    //   .get(`${process.env.BASE_URL}user/recent-user`)
    //   .then((res) => {
    //     setrecentUsers(res.data);
    //   })
    //   .catch((e) => console.log(e));
  }, []);

  return (
    <>
      <div className="col-span-12 xl:col-span-12 lg:col-span-6 maxLg:hidden">
        <div className="cashier-dashboard-user-area">
          <div className="pt-5 mb-5 bg-white rounded-lg cashier-dashboard-user-wrapper p-7">
            <div className="cashier-dashboard-user mb-6 m-0.5">
              <h5 className="text-[18px] text-heading font-bold">
                Recent Users
              </h5>
            </div>
            <div className="cashier-dashboard-user">
              {recentUsers.length ? (
                recentUsers.map((item: any, index: number) => (
                  <div
                    key={index}
                    className="flex flex-wrap items-center justify-between mb-5 cashier-dashboard-user-list"
                  >
                    <div className="flex flex-wrap items-center cashier-dashboard-user-list-left">
                      <div className="cashier-dashboard-user-list-left-img min-w-[60px] mr-4">
                        <Link href="">
                          <Image
                            width={50}
                            height={50}
                            style={{ width: "100%", height: "auto" }}
                            src={item?.photo ? item.photo : userIcon}
                            alt="user not found"
                          />
                        </Link>
                      </div>
                      <div className="cashier-dashboard-user-list-left-text">
                        <h5 className="text-[16px] text-heading font-semibold mb-1">
                          <Link className="capitalize" href="">
                            {" "}
                            {item.name}{" "}
                          </Link>
                        </h5>

                        <span className="text-[12px] text-themeBlue font-normal block">
                          <CustomDateFormatter inputDate={item.date} />
                        </span>
                      </div>
                    </div>
                    <div className="cashier-dashboard-user-list-right">
                      <span className="h-5 px-1.5 border border-solid border-themeGreenDark text-[12px] leading-18 text-themeGreenDark inline-block">
                        Active
                      </span>
                    </div>
                  </div>
                ))
              ) : (
                <>
                  <p className="mt-5 text-center"> No User Found </p>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RecentUser;
