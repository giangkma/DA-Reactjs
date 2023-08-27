import React, { useState, useEffect } from "react";
import { Input } from "../../components/inputs";
import { loginAPI } from "../../apis/auth";
import { Loading } from "../../components/Loading";
import { setToken } from "../../utils/token";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { Breadcrumbs } from "../../components/Breadcrumbs";
import { useForm, SubmitHandler, useWatch } from "react-hook-form";
import { IFormLoginValues } from "../../domain/login";

export const LoginPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { isLogged } = useAuth();

  useEffect(() => {
    if (isLogged) {
      navigate("/home");
    }
  }, [isLogged]);

  // ================
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    getValues,
  } = useForm<IFormLoginValues>();

  const onSubmitForm = (data: IFormLoginValues) => {
    console.log(data);
  };

  const address = watch("address");

  const check = () => {
    console.log(address);
  };

  return (
    <div className="w-full max-w-xs mx-auto mt-40">
      <button onClick={check}>get address</button>

      {isLoading && <Loading />}
      <form
        onSubmit={handleSubmit(onSubmitForm)}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <Input
          className="mt-4"
          name="email"
          label="Email"
          placeholder="Enter your email"
          register={register}
          errors={errors}
          rules={{
            required: "Email is required",
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "Entered value does not match email format",
            },
          }}
        />
        <Input
          className="mt-4"
          name="address"
          label="Address"
          placeholder="Enter your address"
          register={register}
          errors={errors}
          rules={{
            required: "Address is required",
            minLength: {
              value: 10,
              message: "Min length is 10",
            },
          }}
        />
        <Input
          className="mt-4"
          name="age"
          label="Age"
          placeholder="Enter your age"
          register={register}
          errors={errors}
          rules={{
            required: "Age is required",
            min: {
              value: 18,
              message: "Min age is 18",
            },
          }}
        />
        <Input
          className="mt-4"
          name="username"
          label="Username"
          placeholder="Enter your username"
          register={register}
          errors={errors}
        />
        <Input
          className="my-6"
          name="password"
          label="Password"
          placeholder="******************"
          type="password"
          register={register}
          errors={errors}
        />
        <Input
          className="my-6"
          name="confirm_password"
          label="Confirm Password"
          placeholder="******************"
          type="password"
          register={register}
          errors={errors}
        />
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Sign In
          </button>
        </div>
      </form>
    </div>
  );
};
