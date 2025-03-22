import React, { useContext, useEffect, useState } from "react";
import Banner from "../components/Banner";
import RunningCampaign from "../components/RunningCampaign";
import { useLoaderData } from "react-router-dom";
import Team from "../components/Team";
import Stories from "../components/Stories";

export default function Home() {

  const loadedCampaigns = useLoaderData();

  const [campaigns, setCampaigns] = useState([]);

  const today = new Date();
  useEffect(() => {
    const runningCampaigns = loadedCampaigns.filter(
      (data) => new Date(data.deadline) > today
    );
    setCampaigns(runningCampaigns.slice(0, 6));
  }, []);
  //   console.log(campaigns);
  return (
    <div>
      <Banner></Banner>

      <main>
        <div className="mt-20">
          <h2 className="h2 text-center">Running Campaign</h2>
          <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {campaigns.map((campaign) => (
              <RunningCampaign
                key={campaign._id}
                campaign={campaign}
              ></RunningCampaign>
            ))}
          </div>
        </div>

        <Team></Team>

        <Stories></Stories>
      </main>
    </div>
  );
}
