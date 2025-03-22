export default function Stories() {
  return (
    <div className="mt-20 bg-backgroundColor rounded-md p-8">
      <h2 className="h2 text-center"> Success Stories</h2>
      <p className="bodyText text-center mt-2">
        See how crowdfunding changed lives!
      </p>

      <div className="mt-6 space-y-4">
        <div className="md:flex w-[60%] gap-6">
          <img
            className="rounded-md w-[300px] h-[200px] object-cover"
            src="https://i.pinimg.com/474x/3e/cd/77/3ecd7726312d41669d35bd6e3c36d2a2.jpg"
            alt=""
          />
          <div>
            <h4 className="h4">School for Underprivileged Kids</h4>
            <p className="bodyText">
              Thanks to our supporters, we built a school for 200+ children in
              need. This platform made it possible!
            </p>
          </div>
        </div>
        <div className="w-full flex justify-end">
          <div className="md:flex w-[60%] gap-6">
            <div>
              <h4 className="h4">Medical Aid for Cancer Patients</h4>
              <p className="bodyText">
                Thanks to our supporters, we built a school for 200+ children in
                need. This platform made it possible!
              </p>
            </div>
            <img
              className="rounded-md w-[300px] h-[200px] object-cover"
              src="https://i.pinimg.com/474x/92/2a/25/922a25e19f9575bafe1c76bb094392fb.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
