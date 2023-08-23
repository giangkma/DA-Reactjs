import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

// React.memo
export const HomePage = () => {
  const { isLogged } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLogged) {
      navigate("/login");
    }
  }, [isLogged]);

  return (
    <div
      style={{
        backgroundImage: `url(https://www.pixelstalk.net/wp-content/uploads/2016/08/Pictures-Background-HD.jpg)`,
      }}
      className="bg-cover p-4 bg-center bg-no-repeat"
    >
      <h1>Home</h1>
    </div>
  );
};
