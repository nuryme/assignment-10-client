import React, { useState } from "react";
import { MdDelete, MdEdit } from "react-icons/md";
import { Link, useLoaderData } from "react-router-dom";
import { Tooltip } from "react-tooltip";
import Swal from "sweetalert2";

export default function MyCampaign() {
  const loadedCampaigns = useLoaderData();
  const [campaigns, setCampaigns] = useState(loadedCampaigns);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/campaigns/${id}`, {
          method: "delete",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              const remaining = loadedCampaigns.filter(
                (campaign) => campaign._id !== id
              );
              setCampaigns(remaining);
              Swal.fire({
                title: "Deleted!",
                text: "Your campaign has been deleted.",
                icon: "success",
              });
            }
          });
      }
    });
  };

  return (
    <div className="mt-20">
        <Tooltip id="tooltip-delete" />
        <Tooltip id="tooltip-update" />
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
                <td className="flex gap-4 h6">
                  <Link to={`/updateCampaign/${campaign._id}`}>
                    <MdEdit
                      data-tooltip-id="tooltip-update"
                      data-tooltip-content="Update Me!"
                      data-tooltip-place="top"
                      className="text-secondaryColor"
                      title="Update"
                    />
                  </Link>
                  <Link>
                    <MdDelete
                      onClick={() => {
                        handleDelete(campaign._id);
                      }}
                      className="text-primaryColor"
                      data-tooltip-id="tooltip-delete"
                      data-tooltip-content="Delete Me!"
                      data-tooltip-place="top"
                    />
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
