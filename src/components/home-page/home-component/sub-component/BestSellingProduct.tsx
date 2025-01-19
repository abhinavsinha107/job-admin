"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";

const BestSellingProduct = () => {
  const [products, setproducts] = useState([
    {
      productName: "Product A",
      totalValue: 1500,
      totalCardSum: 300,
      productId: "63f2a4e8b7f3c9e123456789",
    },
    {
      productName: "Product B",
      totalValue: 1200,
      totalCardSum: 240,
      productId: "63f2a4e8b7f3c9e987654321",
    },
    {
      productName: "Product C",
      totalValue: 800,
      totalCardSum: 160,
      productId: "63f2a4e8b7f3c9e112233445",
    },
    {
      productName: "Product D",
      totalValue: 600,
      totalCardSum: 120,
      productId: "63f2a4e8b7f3c9e998877665",
    },
    {
      productName: "Product E",
      totalValue: 500,
      totalCardSum: 100,
      productId: "63f2a4e8b7f3c9e556677889",
    },
  ]);
  // useEffect(() => {
  //   axios
  //     .get(`${process.env.BASE_URL}success/best-selling-products`)
  //     .then((res) => {
  //       setproducts(res.data);
  //     })
  //     .catch((e) => console.log(e));
  // }, []);

  return (
    <>
      <div className="col-span-12 xl:col-span-5 lg:col-span-6">
        <div className="cashier-dashboard-supplier-area">
          <div className="pt-5 mb-5 bg-white rounded-lg cashier-balance-area p-7">
            <div className="cashier-dashboard-supplier-header flex flex-wrap items-center justify-between mb-6 m-0.5">
              <h5 className="text-[18px] text-bold font-bold maxSm:mb-2 text-heading">
                Best Selling Product
              </h5>
            </div>
            {products?.length ? (
              <>
                <div className="cashier-dashboard-supplier border border-solid border-grayBorder m-0.5 border-b-0 ">
                  <div className="cashier-dashboard-supplier-list h-10 flex justify-between items-center border-b-[1px] border-solid border-grayBorder">
                    <div className="cashier-dashboard-supplier-list-name pl-7">
                      <h5 className="text-[15px] font-semibold text-heading">
                        Product Name
                      </h5>
                    </div>
                    <div className="cashier-dashboard-supplier-list-amount border-l-[1px] border-solid border-grayBorder pl-7">
                      <h5 className="text-[15px] font-semibold text-heading">
                        Total Sells
                      </h5>
                    </div>
                  </div>

                  {products.length ? (
                    products.map((item: any) => (
                      <div
                        key={item.productId}
                        className="cashier-dashboard-supplier-list h-20 flex justify-between items-center border-b-[1px] border-solid border-grayBorder"
                      >
                        <div className="cashier-dashboard-supplier-list-name pl-7">
                          <span className="text-[14px] font-normal text-bodyText block mb-1">
                            {" "}
                            {item.productName}{" "}
                          </span>
                        </div>
                        <div className="cashier-dashboard-supplier-list-amount border-l-[1px] border-solid border-grayBorder pl-7">
                          <span className="text-[14px] font-normal text-bodyText">
                            ${item.totalValue}
                          </span>
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

export default BestSellingProduct;
