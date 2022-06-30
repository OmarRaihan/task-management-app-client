import React from "react";
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import Loading from "../../Shared/Loading/Loading";

const Register = () => {
  const [signInWithGoogle, userGoogle, loadingGoogle, errorGoogle] = useSignInWithGoogle(auth);
  const [createUserWithEmailAndPassword, user, loading, error] = useCreateUserWithEmailAndPassword(auth);
  const [updateProfile, updating, updateError] = useUpdateProfile(auth);

  const navigate = useNavigate();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  let signInError;

  if (error || errorGoogle || updateError) {
    signInError = (
      <p className="text-red-500 ml-2">
        <small>{error?.message || errorGoogle?.message}</small>
      </p>
    );
  }

  if (loading || loadingGoogle || updating) {
    return <Loading />;
  }

  if (user || userGoogle) {
    navigate("/to-do");
  }

  const onSubmit = async (data) => {
    console.log(data);
    await createUserWithEmailAndPassword(data.email, data.password);
    await updateProfile({ displayName: data.name });
    console.log("update done");
  };

  return (
    <div className="flex h-screen justify-center items-center">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="text-center text-2xl font-bold mb-4">Sign Up</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Name Field */}
            <div className="form-control w-full max-w-xs">
              {/* <label className="label">
                <span className="label-text text-lg">Name</span>
              </label> */}
              <input
                type="text"
                placeholder="Name"
                className="input input-bordered w-full max-w-xs"
                {...register("name", {
                  required: {
                    value: true,
                    message: "Name is Required",
                  },
                })}
              />
              {/* Error */}
              <label className="label">
                {errors.name?.type === "required" && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
              </label>
            </div>

            {/* Email Field */}
            <div className="form-control w-full max-w-xs">
              {/* <label className="label">
                <span className="label-text text-lg">Email</span>
              </label> */}
              <input
                type="email"
                placeholder="Email"
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
              {/* <label className="label">
                <span className="label-text text-lg">Password</span>
              </label> */}
              <input
                type="password"
                placeholder="Password"
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
            <input className="btn w-full max-w-xs" type="submit" value="Signup" />
            {signInError}

            <p className="text-sm my-2 text-center">
              Already have an account?
              <Link className="text-orange-500 ml-1" to="/login">
                Please Login
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

export default Register;
