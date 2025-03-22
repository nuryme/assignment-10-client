import { useContext } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";

export default function Details() {
  const campaign = useLoaderData({});
  const { user } = useContext(AuthContext);
  //   console.log(data);

  const handleDonation = () => {
    const userName = user?.displayName;
    const userEmail = user?.email;
    const donationInfo = { userName, userEmail };

    fetch("http://localhost:5000/donations", {
      method: "post",
      body: JSON.stringify(donationInfo),
      headers: { "content-type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => {
        if(data.insertedId) {
          Swal.fire('Donation Successful')
        }
      });
  };

  return (
    <div className="flex justify-center mt-10">
      <div className="bg-white rounded-lg shadow-md p-4 w-full max-w-xl">
        {/* Campaign Image */}
        <img
          src={campaign.photo}
          alt={campaign.title}
          className="w-full h-64 object-cover rounded-md"
        />

        {/* Campaign Details */}
        <div className="mt-6">
          <h3 className="h4">{campaign.title}</h3>
          <p className="bodyText">{campaign.type}</p>
          <p className="bodyText mt-2">{campaign.description}</p>

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
            <p className="bodyText text-secondaryColor">
              ${campaign.amount} Raised
            </p>
          </div>

          {/* See More Button */}
          <Link>
            <button onClick={handleDonation} className="button mt-4">
              Donate
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
