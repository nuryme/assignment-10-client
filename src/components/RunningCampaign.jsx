import { useState } from "react";
import { Link } from "react-router-dom";

export default function RunningCampaign({ campaign }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 w-full mt-6 flex flex-col">
      {/* Campaign Image */}
      <img
        src={campaign.photo}
        alt={campaign.title}
        className="w-full h-56 object-cover rounded-md"
      />

      {/* campaign Details */}
      <div className="mt-6 flex-grow">
        <h3 className="h4">{campaign.title}</h3>
        <p className="bodyText">{campaign.type}</p>

        <div className="mt-3 space-y-1">
          <p className="bodyText">
            <strong>Name:</strong> {campaign.name}
          </p>
          <p className="bodyText">
            <strong>Email:</strong> {campaign.email}
          </p>
          <p className="bodyText">
            <strong>Deadline:</strong> {campaign.deadline}
          </p>
          <p className="bodyText text-primaryColor">${campaign.amount}</p>
        </div>

        {/* See More Button */}
      </div>
      <Link to={`/details/${campaign._id}`}>
        <button className="secondaryButton mt-4">See More</button>
      </Link>
    </div>
  );
}
