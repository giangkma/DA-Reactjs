import React, { useState, useEffect } from "react";
import { Input } from "../../components/inputs";
import { loginAPI } from "../../apis/auth";
import { Loading } from "../../components/Loading";
import { setToken } from "../../utils/token";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

export const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { isLogged } = useAuth();

  const onSubmit = async () => {
    try {
      if (!email || !password) {
        return;
      }
      setIsLoading(true);
      const res = await loginAPI(email, password);
      setToken(res.data.accessToken);
      navigate("/home");
    } catch (error: any) {
      console.log(error.info.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (isLogged) {
      navigate("/home");
    }
  }, [isLogged]);

  return (
    <div className="w-full max-w-xs mx-auto mt-40">
      {isLoading && <Loading />}
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <Input
          className="mt-4"
          name="email"
          label="Email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          className="my-6"
          name="password"
          label="Password"
          placeholder="******************"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={onSubmit}
          >
            Sign In
          </button>
        </div>
      </form>
    </div>
  );
};
