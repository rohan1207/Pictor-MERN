import { createContext, useState, useEffect } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const AppContext = createContext();

const AppContextProvider = (props) => {
  const [user, setUser] = useState(false);
  const [showLogin, setshowLogin] = useState(false);

  const backendUrl =
    import.meta.env.VITE_BACKEND_URL || "http://localhost:5000"; // Default to localhost if not set

  const [token, settoken] = useState(localStorage.getItem("token"));
  const [credit, setCredit] = useState(false);
  const navigate = useNavigate();
  // Load credit data from the backend
  const loadCreditsData = async () => {
    try {
      const { data } = await axios.get(backendUrl + "/api/user/credits", {
        headers: { token },
      });
      if (data.success) {
        setCredit(data.credits); // Set the fetched credit value
        setUser(data.user); // Set the user info
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  // Synchronize token with localStorage
  useEffect(() => {
    if (token) {
      loadCreditsData(); // Call the function to load credits
    }
  }, [token]);

  const generateImage = async (prompt) => {
    try {
      const { data } = await axios.post(
        backendUrl + "/api/image/generate-image",
        { prompt },
        { headers: { token } }
      );

      if (data.success) {
        loadCreditsData();
        return data.resultImage;
      } else {
        toast.error(data.message);
        loadCreditsData();
        if (data.creditBalance === 0) {
          navigate("/buy");
        }
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    settoken(""); // Clear token
    setUser(null); // Clear user info
    setCredit(false); // Clear credits
  };

  const value = {
    user,
    setUser,
    showLogin,
    setshowLogin,
    backendUrl,
    token,
    settoken,
    credit,
    setCredit,
    loadCreditsData,
    logout,
    generateImage,
  };

  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};

export default AppContextProvider;
