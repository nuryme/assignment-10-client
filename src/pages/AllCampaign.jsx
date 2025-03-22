import React from "react";
import { Link, useLoaderData } from "react-router-dom";

export default function AllCampaign() {
  const campaigns = useLoaderData();
  return (
    <div className="mt-20">
      <h2 className="h2 text-center mb-6">All campaign here</h2>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th className="h6">Title</th>
              <th className="h6">Deadline</th>
              <th className="h6">Campaign Type</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {campaigns.map((campaign, index) => (
              <tr key={campaign._id}>
                <th className="bodyText">{index + 1}</th>
                <td className="bodyText">{campaign.title}</td>
                <td className="bodyText">{campaign.deadline}</td>
                <td>
                  <Link to={`/details/${campaign._id}`}>
                    <button className="secondaryButton mt-4">See More</button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
