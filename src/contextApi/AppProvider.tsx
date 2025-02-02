"use client";
import React, { createContext, useState, useEffect } from "react";
import { AppContextType, IUser } from "@/interFace/interFace";
import axios from "axios";
import jwtDecode from "jwt-decode";

export const AppContext = createContext<AppContextType | undefined>(undefined);
const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [sideMenuOpen, setSideMenuOpen] = useState<boolean>(false);
  const [scrollDirection, setScrollDirection] = useState("up");
  const [showSidebar, setShowSidebar] = useState<boolean>(false);
  const [update, setUpdate] = useState<boolean>(false);
  const [updateStatus, setUpdateStatus] = useState<boolean>(false);

  const [user, setUser] = useState<IUser>();
  const [loggedIn, setLoggedIn] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);
  const [totalCancelOrder, settotalCancelOrder] = useState<number>(0);

  const token = localStorage.getItem("accessToken");
  const header = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  useEffect(() => {
    if (token || loggedIn) {
      axios
        .get(`${process.env.BASE_URL}auth`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          if (res.data.data) {
            const userinfo = res.data.data;
            setLoggedIn(true);
            setUser(userinfo);
            setLoading(false);
          }
        })
        .catch((e) => {
          setLoading(false);
          console.log(e);
        });
    } else {
      setLoading(false);
    }
  }, [token, loggedIn, update]);

  const logout = () => {
    localStorage.removeItem("accessToken");
    setLoading(false);
    setLoggedIn(false);
    setUser(undefined);
  };

  const toggleSideMenu = () => {
    setSideMenuOpen(!sideMenuOpen);
  };

  const contextValue: AppContextType = {
    sideMenuOpen,
    setSideMenuOpen,
    toggleSideMenu,
    scrollDirection,
    setScrollDirection,
    showSidebar,
    setShowSidebar,
    user,
    setLoggedIn,
    setLoading,
    loading,
    logout,
    setUser,
    header,
    loggedIn,
    update,
    setUpdate,
    updateStatus,
    setUpdateStatus,
    totalCancelOrder,
    settotalCancelOrder,
  };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};

export default AppProvider;
