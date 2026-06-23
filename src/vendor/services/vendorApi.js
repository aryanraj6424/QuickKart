import axios from "axios";

const API =

  "http://localhost:5000/api/vendor/auth";

export const registerVendor =
  async (vendorData) => {
    const response =
      await axios.post(
        `${API}/register`,
        vendorData
      );

    return response.data;
  };

export const loginVendor =
  async (loginData) => {
    const response =
      await axios.post(
        `${API}/login`,
        loginData
      );

    return response.data;
  };