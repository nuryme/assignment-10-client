import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-backgroundColor mt-10">
      <div className="w-11/12 mx-auto py-10 grid grid-cols-1 md:grid-cols-2 items-center">
        <div className="md:w-72 space-y-4">
          <h2 className="h4">
            Empower Change with Crowdfunding
          </h2>
          <p className="">
            Fuel ideas, fund dreams, and make a difference.
          </p>
        </div>

        <div className="">
          <h3 className="font-medium">Platform</h3>
          <ul className="bodyText space-y-2 mt-4">
            <li>
              <Link to={"allCampaign"}>All Campaign</Link>
            </li>
            <li>
              <Link to={"myCampaign"}>My Campaign</Link>
            </li>
            <li>
              <Link to={"addCampaign"}>Add New Campaign</Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Section - Copyright & Links */}
      <div className="bg-primaryColor text-white text-center py-3">
        <p className="">© 2025 Crowdfund Inc. All rights reserved.</p>
      </div>
    </footer>
  );
}
