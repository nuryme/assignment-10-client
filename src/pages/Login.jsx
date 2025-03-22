import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

export default function Login() {
  const [error, setError] = useState("");
  const { firebaseLogin, setUser, firebaseGoogleLogin } =
    useContext(AuthContext);
  const navigate = useNavigate();
  //   console.log(name)

  const handleLogin = (event) => {
    event.preventDefault();

    const form = event.target;

    const email = form.email.value;
    const password = form.password.value;

    // console.log(name, email, photo, password);

    firebaseLogin(email, password)
      .then((res) => {
        setUser(res.user);
        setError("");
        form.reset();
        navigate("/");
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  const handleGoogleLogin = () => {
    firebaseGoogleLogin()
      .then((res) => {
        setUser(res.user);
        navigate("/");
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
          footer: `<p>${err.message}</p>`,
        });
      });
  };

  return (
    <div className="mt-20">
      <h2 className="h2 mb-6 text-center">Please Login</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <form className="card-body space-y-4  p-0" onSubmit={handleLogin}>
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
                Don't have an account? Please{" "}
                <Link className="text-primaryColor" to={"/registration"}>
                  Register
                </Link>
              </p>
            </label>
          </div>
          {error !== "" && <p className="bodyText text-red-600">{error}</p>}
          <div className="form-control mt-6 flex justify-center">
            <button className="button">Login</button>
          </div>
        </form>

        <div className="flex justify-end">
          <button onClick={handleGoogleLogin} className="secondaryButton w-fit h-fit">Login With Google</button>
        </div>
      </div>
    </div>
  );
}
