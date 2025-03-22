import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";

export default function Registration() {
  const [error, setError] = useState("");
  const { firebaseSignup, setUser, updateUser } = useContext(AuthContext);
  const navigate = useNavigate()
  //   console.log(name)

  const handleRegistration = (event) => {
    event.preventDefault();

    const form = event.target;

    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photo.value;
    const password = form.password.value;

    // console.log(name, email, photo, password);

    if (!/^(?=.*[A-Z])(?=.*[a-z]).{6,}$/.test(password)) {
      setError(
        "Password must contain at least one uppercase, one lowercase and at least 6 characters long"
      );
      return;
    }

    firebaseSignup(email, password).then((res) => {
      setUser(res.user);

      updateUser({displayName: name, photoURL: photo})
      .then(() => {
        console.log('updated profile')
      }
      )
      .catch(err => console.log(err.message))

      Swal.fire("Registration Successful!");
      setError('')
      form.reset()
      navigate('/')
    })
    .catch((err) => {
      setError(err.message)
    }
    )
  };

  return (
    <div>
      <h2 className="h2 text-center mt-20">Please Register</h2>
      <form
        className="card-body space-y-4 w-8/12 mx-auto p-0"
        onSubmit={handleRegistration}
      >
        <div className="form-control">
          <label className="label h6 text-black block mb-2">
            <span className="label-text">Name:</span>
          </label>
          <input
            name="name"
            type="text"
            placeholder="name"
            className="input input-bordered focus:border-primaryColor focus:outline-none w-full"
            required
          />
        </div>
        <div className="form-control">
          <label className="label h6 text-black block mb-2">
            <span className="label-text">Email:</span>
          </label>
          <input
            name="email"
            type="email"
            placeholder="email"
            className="input input-bordered focus:border-primaryColor focus:outline-none w-full"
            required
          />
        </div>
        <div className="form-control">
          <label className="label h6 text-black block mb-2">
            <span className="label-text">Photo URL:</span>
          </label>
          <input
            name="photo"
            type="url"
            placeholder="photo url"
            className="input input-bordered focus:border-primaryColor focus:outline-none w-full"
            required
          />
        </div>
        <div className="form-control">
          <label className="label h6 text-black block mb-2">
            <span className="label-text">Password:</span>
          </label>
          <input
            name="password"
            type="password"
            placeholder="password"
            className="input input-bordered focus:border-primaryColor focus:outline-none w-full"
            required
          />
          <label className="label bodyText block mt-2">
            <p className="label-text-alt link link-hover">
              Already have an account? Please{" "}
              <Link className="text-primaryColor" to={"/login"}>
                Login
              </Link>
            </p>
          </label>
        </div>
        {error !== "" && <p className="bodyText text-red-600">{error}</p>}
        <div className="form-control mt-6 flex justify-center">
          <button className="button">Registration</button>
        </div>
      </form>
    </div>
  );
}
