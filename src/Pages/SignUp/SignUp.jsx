import { Link, useNavigate } from "react-router-dom";
import signUpImg from "../../assets/others/authentication2.png";
import "./signUp.css";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import swal from "sweetalert";

const signUp = () => {
  const { createUSer } = useContext(AuthContext);
const navigate = useNavigate()
  const handlesignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    if (password.length < 6) {
      swal({
        title: "warning!",
        text: "Password Must Contain Minimum 6 Charracter",
        icon: "info",
      });
      return;
    }

    createUSer(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        swal({
          title: "Good job!",
          text: "Registration Successfull",
          icon: "success",
        });
        navigate('/')
      })
      .catch((error) => {
        swal({
          title: "Error!",
          text: error.message.replace("Firebase: Error ", ""),
          icon: "error",
        });
        console.log(error.message);
      });
  };

  return (
    <div className="hero min-h-screen signup">
      <div className="flex flex-col justify-center items-center gap-4">
        <h1 className="text-5xl font-bold text-orange-400">signUp now!</h1>
        <div className="hero-content flex-col lg:gap-10 lg:justify-between md:flex-row-reverse justify-center items-center gap-2">
          <div className="text-center lg:text-left">
            <img src={signUpImg} alt="" />
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-transparant">
            <form onSubmit={handlesignUp} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter Your Email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="Your Password"
                  className="input input-bordered"
                  required
                />
                <div className="form-control"></div>
              </div>
              <input
                type="submit"
                className="btn bg-orange-400 text-white my-2"
                value="Sign Up"
              />
              <p className="text-sm ms-1">
                Already Have An Account?{" "}
                <Link className="text-purple-400" to={"/login"}>
                  Log In Now
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default signUp;
