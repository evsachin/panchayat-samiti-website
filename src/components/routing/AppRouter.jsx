import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "../layout/Layout";

import Amachyavishayi from "../../pages/Amchyavishayi";
import Asthapana from "../../pages/Asthapana";
import SpardhaPariksha from "../../pages/SpardhaPariksha";
import NavodayPariksha from "../../pages/NavodayPariksha";
import MissionArambh from "../../pages/MissionArambh";
import MDM from "../../pages/MDM";
import RTEPravesh from "../../pages/RTEPravesh";
import SarvaSamaveshakShikshan from "../../pages/SarvaSamaveshakShikshan";
import Upakram from "../../pages/Upakram";
import Hero from "../common/Hero";
import ShishyavruttiPariksha from "../../pages/ShishyavruttiPariksha";

export default function AppRouter() {
  return (
    <Routes>
      {/* Layout wraps all routes */}
      <Route path="/" element={<Layout />}>
        <Route index element={<Hero />} />
        <Route path="amachyavishayi" element={<Amachyavishayi />} />
        <Route path="asthapana" element={<Asthapana />} />
        <Route path="spardhapariksha" element={<SpardhaPariksha />} />
        <Route path="navoday" element={<NavodayPariksha />} />
        <Route path="mission-arambh" element={<MissionArambh />} />
        <Route path="shishyavrutti" element={<ShishyavruttiPariksha />} />
        <Route path="mdm" element={<MDM />} />
        <Route path="rte" element={<RTEPravesh />} />
        <Route path="sarvasamaveshak" element={<SarvaSamaveshakShikshan />} />
        <Route path="upakram" element={<Upakram />} />
      </Route>
    </Routes>
  );
}
