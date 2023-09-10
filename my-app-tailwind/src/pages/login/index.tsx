import React, { useState, useEffect } from "react";
import { Input } from "../../components/inputs";
import { loginAPI } from "../../apis/auth";
import { Loading } from "../../components/Loading";
import { setToken } from "../../utils/token";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { Breadcrumbs } from "../../components/Breadcrumbs";
import { useForm, SubmitHandler, useWatch } from "react-hook-form";
import { IFormLoginValues, loginSchema } from "../../domain/login";
import { Checkbox } from "../../components/inputs/Checkbox";
import { yupResolver } from "@hookform/resolvers/yup";

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
        control,
        handleSubmit,
        formState: { errors },
        watch,
    } = useForm<any>({
        resolver: yupResolver(loginSchema),
        // defaultValues: {
        //     email: "shah",
        // },
    });

    const onSubmitForm = (data: any) => {
        console.log(data);
    };

    // {
    //   email : "",
    //   check: true,

    //   address: {
    //     city: "hsda",
    //     code: "fdjdfj"
    //   }

    //   points: [1, 20]
    // }

    return (
        <div className="w-full max-w-xs mx-auto mt-40">
            {isLoading && <Loading />}
            <form onSubmit={handleSubmit(onSubmitForm)} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <Input
                    className="mt-4"
                    name="email"
                    label="Email"
                    placeholder="Enter your email"
                    control={control}
                    errorMessage={errors?.email?.message}
                />
                {/* <Checkbox name="check" control={control} errors={errors} label="Remember me" /> */}
                {/* <Input
                    className="mt-4"
                    name="address.city"
                    label="City"
                    placeholder="Enter your city"
                    control={control}
                    errors={errors}
                />
                <Input
                    className="mt-4"
                    name="address.code.key"
                    label="Code"
                    placeholder="Enter your code"
                    control={control}
                    errors={errors}
                />

                {[0, 1].map((item, index) => {
                    return (
                        <Input
                            className="mt-4"
                            name={`point[${index}]`}
                            label="Min"
                            placeholder="Enter your min point"
                            control={control}
                            errors={errors}
                        />
                    );
                })} */}

                {/* <Input
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
        /> */}
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
