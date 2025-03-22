import React, { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

export default function MyDonation() {
  const data = useLoaderData([]);
  const { user } = useContext(AuthContext);
  const [donation, setDonation] = useState([]);


  useEffect(() => {
    const userDonation = data.filter(
        (donation) => donation.userEmail == user.email
      );
      setDonation(userDonation);
    
  }
  , [])
  return (
    <div className="mt-20">
        <h2 className="h2 text-center mb-6">My Donation</h2>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {donation.map((donate) => (
          <div className="bg-white rounded-lg shadow-md p-4 w-full mt-6">
            <h3 className="h4">{donate.title}</h3>

            <div className="mt-3 space-y-1">
              <p className="bodyText">
                <strong>Name:</strong> {donate.userName}
              </p>
              <p className="bodyText">
                <strong>Email:</strong> {donate.userEmail}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
