import { Link, useLoaderData } from "react-router-dom";

export default function Details() {
  const campaign = useLoaderData({});
  //   console.log(data);
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
          <h3 className="h4">
            {campaign.title}
          </h3>
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
          <Link><button className="button mt-4">Donate</button></Link>
        </div>
      </div>
    </div>
  );
}
