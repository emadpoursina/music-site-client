import React from "react";
import TopBar from "./TopBar";
import Sidebar from "./Sidebar";

const Layout = ({ children }: { children: React.ReactNode }) => (
  <div className="h-screen w-screen flex flex-col bg-white">
    <TopBar />
    <div className="flex flex-1 overflow-hidden">
      <main className="flex-1 p-6 overflow-auto rounded-2xl border border-gray-200 m-4 mr-4 bg-white">
        {children}
      </main>
      <Sidebar />
    </div>
  </div>
);

export default Layout;
