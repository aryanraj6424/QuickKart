import axios from "axios";

const API =

  "https://quickkart-sggn.onrender.com/api/vendor/auth";

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
