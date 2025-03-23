import { useContext } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";

export default function Update() {
  const { user } = useContext(AuthContext);
  const data = useLoaderData();
  // console.log(user.displayName, user.email)

  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.target;

    const photo = form.photo.value;
    const title = form.title.value;
    const type = form.type.value;
    const description = form.description.value;
    const amount = form.amount.value;
    const deadline = form.deadline.value;
    const email = form.email.value;
    const name = form.name.value;

    const campaignInfo = {
      photo,
      title,
      type,
      description,
      amount,
      deadline,
    };
    // console.log(campaignInfo)

    fetch(
      `https://assignment-10-server-vert-two.vercel.app/campaigns/${data._id}`,
      {
        method: "put",
        body: JSON.stringify(campaignInfo),
        headers: { "content-type": "application/json" },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire("Updated Successfully!");
        }
      });
  };

  return (
    <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-md mt-10">
      <h2 className="h2 text-center ">Update Campaign</h2>

      <form onSubmit={handleSubmit} className="space-y-4 mt-6">
        {/* Image URL */}
        <div>
          <label className="block font-medium text-gray-700">
            Campaign Image URL
          </label>
          <input
            defaultValue={data.photo}
            type="url"
            name="photo"
            className="w-full mt-1 p-2 border rounded-md focus:outline-primary"
            placeholder="Enter image URL"
            required
          />
        </div>

        {/* Campaign Title */}
        <div>
          <label className="block font-medium text-gray-700">
            Campaign Title
          </label>
          <input
            defaultValue={data.title}
            type="text"
            name="title"
            className="w-full mt-1 p-2 border rounded-md focus:outline-primary"
            placeholder="Enter campaign title"
            required
          />
        </div>

        {/* Campaign Type Dropdown */}
        <div>
          <label className="block font-medium text-gray-700">
            Campaign Type
          </label>
          <select
            defaultValue={data.type}
            name="type"
            className="w-full mt-1 p-2 border rounded-md focus:outline-primary"
          >
            <option value="personal issue">Personal Issue</option>
            <option value="startup">Startup</option>
            <option value="business">Business</option>
            <option value="creative ideas">Creative Ideas</option>
          </select>
        </div>

        {/* Description */}
        <div>
          <label className="block font-medium text-gray-700">Description</label>
          <textarea
            defaultValue={data.description}
            name="description"
            className="w-full mt-1 p-2 border rounded-md focus:outline-primary"
            placeholder="Enter campaign details"
            rows="4"
            required
          ></textarea>
        </div>

        {/* Minimum Donation */}
        <div>
          <label className="block font-medium text-gray-700">
            Minimum Donation Amount ($)
          </label>
          <input
            defaultValue={data.amount}
            type="number"
            name="amount"
            className="w-full mt-1 p-2 border rounded-md focus:outline-primary"
            placeholder="Enter minimum donation amount"
            required
          />
        </div>

        {/* Deadline */}
        <div>
          <label className="block font-medium text-gray-700">Deadline</label>
          <input
            defaultValue={data.deadline}
            type="date"
            name="deadline"
            className="w-full mt-1 p-2 border rounded-md focus:outline-primary"
            required
          />
        </div>

        {/* User Email (Read-Only) */}
        <div>
          <label className="block font-medium text-gray-700">User Email</label>
          <input
            value={user?.email}
            type="email"
            name="email"
            className="w-full mt-1 p-2 border bg-gray-100 rounded-md cursor-not-allowed"
          />
        </div>

        {/* User Name (Read-Only) */}
        <div>
          <label className="block font-medium text-gray-700">User Name</label>
          <input
            value={user?.displayName}
            type="text"
            name="name"
            className="w-full mt-1 p-2 border bg-gray-100 rounded-md cursor-not-allowed"
          />
        </div>

        {/* Submit Button */}
        <button type="submit" className="button">
          Update
        </button>
      </form>
    </div>
  );
}
