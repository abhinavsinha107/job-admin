"use client";
import { useRecentClients } from "@/hooks/useApiHook";
import Link from "next/link";
import React from "react";

const RecentClient = () => {
  const { data } = useRecentClients() as any;
  const {
    clients = [
      {
        buyerEmail: "john.doe@example.com",
        totalPrice: 120.5,
        name: "John Doe",
        Phone: "+1234567890",
      },
      {
        buyerEmail: "jane.smith@example.com",
        totalPrice: 75.0,
        name: "Jane Smith",
        Phone: "+0987654321",
      },
      {
        buyerEmail: "mike.brown@example.com",
        totalPrice: 200.0,
        name: "Mike Brown",
        Phone: "+1122334455",
      },
    ],
  } = data;

  return (
    <>
      <div className="col-span-12 xl:col-span-12 lg:col-span-6">
        <div className="cashier-dashboard-topseller-area">
          <div className="pt-5 mb-5 bg-white rounded-lg cashier-balance-area p-7">
            <div className="cashier-dashboard-supplier-header flex flex-wrap items-center justify-between mb-6 m-0.5">
              <h5 className="text-[18px] text-bold font-bold maxSm:mb-2 text-heading">
                Recent Clients
              </h5>
              <Link href="/clients" className="common-blue-badge maxSm:mb-2">
                View All
              </Link>
            </div>
            {clients?.length ? (
              <>
                <div className="cashier-dashboard-supplier border border-solid border-grayBorder m-0.5 border-b-0 ">
                  <div className="cashier-dashboard-supplier-list h-10 flex justify-between items-center border-b-[1px] border-solid border-grayBorder">
                    <div className="cashier-dashboard-supplier-list-name pl-7">
                      <h5 className="text-[15px] font-semibold text-heading">
                        Name
                      </h5>
                    </div>
                    <div className="cashier-dashboard-supplier-list-amount border-l-[1px] border-solid border-grayBorder pl-7">
                      <h5 className="text-[15px] font-semibold text-heading">
                        Amount
                      </h5>
                    </div>
                  </div>

                  {clients?.length ? (
                    clients?.slice(0, 5)?.map((item: any) => (
                      <div key={item?._id}>
                        {item?.totalPrice === 0 ? (
                          <></>
                        ) : (
                          <>
                            <div
                              key={item._id}
                              className="cashier-dashboard-supplier-list h-20 flex justify-between items-center border-b-[1px] border-solid border-grayBorder"
                            >
                              <div className="cashier-dashboard-supplier-list-name pl-7">
                                <span className="text-[14px] font-normal capitalize text-bodyText block mb-1">
                                  {item.name}
                                </span>
                                <span className="text-[14px] font-normal text-bodyText block">
                                  {item.Phone}
                                </span>
                              </div>
                              <div className="cashier-dashboard-supplier-list-amount border-l-[1px] border-solid border-grayBorder pl-7">
                                <span className="text-[14px] font-normal text-bodyText">
                                  ${item.totalPrice}
                                </span>
                              </div>
                            </div>
                          </>
                        )}
                      </div>
                    ))
                  ) : (
                    <></>
                  )}
                </div>
              </>
            ) : (
              <>
                <p className="mt-5 text-center"> No Client Found </p>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default RecentClient;
