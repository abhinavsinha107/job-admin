"use client";
import CustomDateFormatter from "@/hooks/CustomDateFormatter ";
import useSellSummaries from "@/hooks/useSellSummaries";
import React from "react";

const RecentSoldProduct = () => {
  const { data, loading, error } = useSellSummaries() as any;
  const {
    recentProduct = [
      {
        orderDate: "12/30/24 3:45 PM",
        price: 20,
        totalCard: 3,
        productName: "Product A",
        categoryName: "Category A",
      },
      {
        orderDate: "12/29/24 11:15 AM",
        price: 15,
        totalCard: 2,
        productName: "Product B",
        categoryName: "Category B",
      },
    ],
  } = data;

  if (loading) {
    return <div>Loading...</div>;
  }

  // if (error) {
  //   return <div>Error: {error}</div>;
  // }

  return (
    <>
      <div className="col-span-12">
        <div className="cashier-dashboard-transaction-area">
          <div className="pt-5 mb-5 bg-white rounded-lg cashier-dashboard-transaction-wrapper p-7">
            <div className="cashier-dashboard-supplier-header flex flex-wrap items-center justify-between mb-6 m-0.5">
              <h5 className="text-[18px] text-bold font-bold maxSm:mb-2 text-heading">
                Recent Sold Products
              </h5>
            </div>
            {recentProduct?.length ? (
              <>
                <div className="cashier-dashboard-transaction">
                  <div className="cashier-dashboard-transaction-row-heading">
                    <div className="cashier-dashboard-transaction-dateR">
                      <h5>Date</h5>
                    </div>
                    <div className="cashier-dashboard-transaction-referenceR">
                      <h5>Product</h5>
                    </div>
                    <div className="cashier-dashboard-transaction-customerR">
                      <h5>Category</h5>
                    </div>
                    <div className="cashier-dashboard-transaction-duedateR">
                      <h5>Quantity</h5>
                    </div>
                    <div className="cashier-dashboard-transaction-modeR">
                      <h5>Price</h5>
                    </div>
                  </div>
                  {recentProduct?.length ? (
                    recentProduct?.map((sell: any, index: number) => (
                      <div
                        key={index}
                        className="cashier-dashboard-transaction-row"
                      >
                        <div className="cashier-dashboard-transaction-dateR">
                          <span>
                            {" "}
                            <CustomDateFormatter
                              inputDate={sell.orderDate}
                            />{" "}
                          </span>
                        </div>
                        <div className="cashier-dashboard-transaction-referenceR">
                          <span>{sell.productName}</span>
                        </div>
                        <div className="cashier-dashboard-transaction-customerR">
                          <span>{sell.categoryName}</span>
                        </div>
                        <div className="cashier-dashboard-transaction-duedateR">
                          <span>{sell.totalCard}</span>
                        </div>
                        <div className="cashier-dashboard-transaction-modeR">
                          <span>${sell.totalCard * sell.price}</span>
                        </div>
                      </div>
                    ))
                  ) : (
                    <></>
                  )}
                </div>
              </>
            ) : (
              <>
                <p className="mt-5 text-center"> No Prodeuct Found </p>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default RecentSoldProduct;
