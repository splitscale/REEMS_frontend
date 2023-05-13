import Head from "next/head";
import SideBar from "../components/SideBar";
import EnergyConsumptionListTable from "../components/EnergyConsumption/EnergyConsumptionListTable";
import MitigationListTable from "../components/Mitigation/MitigationListTable";

export default function Mitigation() {
  return (
    <div className="flex">
      <Head>
        <title>REEMS</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/logo.png" />
      </Head>

      <div className="w-1/6 h-screen bg-gray-200">
        <SideBar />
      </div>

      <div className="w-3/4 h-screen bg-cover bg-center"
        style={{
          backgroundImage: `url('/main-bg.jpg')`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          width: "100%"
        }}>
        <MitigationListTable />
      </div>
    </div >
  );
}
