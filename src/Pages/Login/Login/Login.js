import React, { useEffect } from "react";
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Loading from "../../Shared/Loading/Loading";

const Login = () => {
  const [signInWithGoogle, userGoogle, loadingGoogle, errorGoogle] = useSignInWithGoogle(auth);
  const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);

  //   const [token] = useToken(user || userGoogle);

  let signInError;
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";

  //   useEffect(() => {
  //     if (user || userGoogle) {
  //       navigate(from, { replace: true });
  //     }
  //   }, [user, from, navigate]);

  if (user || userGoogle) {
    navigate(from, { replace: true });
  }

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  if (error || errorGoogle) {
    signInError = (
      <p className="text-red-500 ml-2">
        <small>{error?.message || errorGoogle?.message}</small>
      </p>
    );
  }

  if (loading || loadingGoogle) {
    return <Loading />;
  }

  const onSubmit = (data) => {
    signInWithEmailAndPassword(data.email, data.password);
  };

  return (
    <div className="flex h-screen justify-center items-center">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="text-center text-2xl font-bold mb-4">Login</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Email Field */}
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text text-lg">Email</span>
              </label>
              <input
                type="email"
                placeholder="Your Email"
                className="input input-bordered w-full max-w-xs"
                {...register("email", {
                  required: {
                    value: true,
                    message: "Email is Required",
                  },
                  pattern: {
                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                    message: "Provide a valid Email",
                  },
                })}
              />
              <label className="label">
                {errors.email?.type === "required" && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                {errors.email?.type === "pattern" && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
              </label>
            </div>
            {/* Password Field */}
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text text-lg">Password</span>
              </label>
              <input
                type="password"
                placeholder="Your Password"
                className="input input-bordered w-full max-w-xs"
                {...register("password", {
                  required: {
                    value: true,
                    message: "Password is Required",
                  },
                  minLength: {
                    value: 6,
                    message: "Must be 6 characters or longer",
                  },
                })}
              />
              <label className="label">
                {errors.password?.type === "required" && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                {errors.password?.type === "minLength" && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
              </label>
            </div>
            {/* Button */}
            <input className="btn w-full max-w-xs" type="submit" value="Login" />
            {signInError}

            <p className="text-sm my-2 text-center">
              New to Envy Task?
              <Link className="text-teal-400 ml-1" to="/register">
                Create New Account
              </Link>
            </p>
          </form>
          {/* Divider */}
          <div className="divider">OR</div>
          {/* Google Button */}
          <button onClick={() => signInWithGoogle()} className="btn btn-outline">
            Continue with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
