// import { FaFacebook } from "react-icons/fa";


export default function Team() {
  return (
    <div className="mt-20">
      <h2 className="h2 text-center">Meat Our Team</h2>

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div
            className="flex flex-col items-center text-center bg-backgroundColor p-6 rounded-xl"
          >
            <img
              src='https://i.pinimg.com/474x/2c/dd/1b/2cdd1b72e1334717eed7374a42b39889.jpg'
              alt=''
              className="w-24 h-24 object-cover rounded-full border-4 border-primaryColor"
            />
            <h3 className="h4 mt-3">Sam Monic</h3>
            <p className="bodyText">Founder</p>
            <p className="bodyText text-sm mt-2">I've established this platform in 2022, and it's been one of the best experiences of my life.</p>

            {/* Social Icons */}
          </div>
          <div
            className="flex flex-col items-center text-center bg-backgroundColor p-6 rounded-xl"
          >
            <img
              src='https://i.pinimg.com/474x/59/31/19/5931196ac6b526dd8c25309f2bf7fdff.jpg'
              alt=''
              className="w-24 h-24 object-cover rounded-full border-4 border-primaryColor"
            />
            <h3 className="h4 mt-3">Harshita Patel</h3>
            <p className="bodyText">Co-Founder & CEO</p>
            <p className="bodyText text-sm mt-2">I've established this platform in 2022, and it's been one of the best experiences of my life.</p>

            {/* Social Icons */}
          </div>
          <div
            className="flex flex-col items-center text-center bg-backgroundColor p-6 rounded-xl"
          >
            <img
              src='https://i.pinimg.com/474x/b9/e4/5d/b9e45d2667c272dfb56e22fc0e1fbc64.jpg'
              alt=''
              className="w-24 h-24 object-cover rounded-full border-4 border-primaryColor"
            />
            <h3 className="h4 mt-3">Alexa Kimberly</h3>
            <p className="bodyText">Lead organizer</p>
            <p className="bodyText text-sm mt-2">I've established this platform in 2022, and it's been one of the best experiences of my life.</p>

            {/* Social Icons */}
          </div>
          <div
            className="flex flex-col items-center text-center bg-backgroundColor p-6 rounded-xl"
          >
            <img
              src='https://i.pinimg.com/474x/b4/3a/89/b43a892e3f68c50a5b7ce996aa41a1af.jpg'
              alt=''
              className="w-24 h-24 object-cover rounded-full border-4 border-primaryColor"
            />
            <h3 className="h4 mt-3">Rams Lesli</h3>
            <p className="bodyText">Manager</p>
            <p className="bodyText text-sm mt-2">I've established this platform in 2022, and it's been one of the best experiences of my life.</p>

            {/* Social Icons */}
          </div>
      </div>
    </div>
  );
}
