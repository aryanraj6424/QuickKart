import { useEffect, useState } from "react";
import axios from "axios";

export default function VendorManagement() {

  const [vendors, setVendors] = useState([]);
  const [loading, setLoading] = useState(true);

  // =====================================
  // ASSIGN AREA MODAL STATE
  // =====================================

  const [showAreaModal, setShowAreaModal] =
    useState(false);

  const [selectedVendor, setSelectedVendor] =
    useState(null);

  const [areaData, setAreaData] =
    useState({
      areaName: "",
      pincode: "",
      latitude: "",
      longitude: "",
      serviceRadius: "",
    });

  // =====================================
  // FETCH VENDORS
  // =====================================

  const fetchVendors = async () => {
    try {

      const response =
        await axios.get(
          `${import.meta.env.VITE_API_URL}/admin/vendors/all`
        );

      setVendors(
        response.data.vendors || []
      );

    } catch (error) {

      console.log(error);

      alert(
        "Failed to fetch vendors"
      );

    } finally {

      setLoading(false);

    }
  };

  useEffect(() => {
    fetchVendors();
  }, []);

  // =====================================
  // CHANGE ACCOUNT STATUS
  // =====================================

  const handleAccountStatusChange =
  async (id, status) => {
    try {

      await axios.put(
        `${import.meta.env.VITE_API_URL}/admin/vendors/account-status/${id}`,
        {
          accountStatus: status,
        }
      );

      fetchVendors();

    } catch (error) {

      console.log(error);

      alert(
        "Failed to update account status"
      );

    }
  };


  const changeAccountStatus = async (
    vendorId,
    status
  ) => {

    try {

      // FUTURE API

      // await axios.put(
      // `${import.meta.env.VITE_API_URL}/admin/vendors/account-status/${vendorId}`,
      // { accountStatus: status }
      // );

      console.log(
        "Vendor:",
        vendorId,
        "Status:",
        status
      );

      alert(
        `Status changed to ${status}`
      );

    } catch (error) {

      console.log(error);

      alert(
        "Failed to update status"
      );

    }
  };

  // =====================================
  // SAVE AREA
  // =====================================

  const handleAreaSave = async () => {

    try {

      console.log(
        selectedVendor
      );

      console.log(areaData);

      // FUTURE API

      // await axios.put(
      // `${import.meta.env.VITE_API_URL}/admin/vendors/assign-area/${selectedVendor._id}`,
      // areaData
      // );

      alert(
        "Area Assigned Successfully"
      );

      setShowAreaModal(false);

      setAreaData({
        areaName: "",
        pincode: "",
        latitude: "",
        longitude: "",
        serviceRadius: "",
      });

    } catch (error) {

      console.log(error);

      alert(
        "Failed to assign area"
      );

    }
  };

  return (
    <div className="p-6">

      {/* ===================================== */}
      {/* HEADER */}
      {/* ===================================== */}

      <div className="mb-8">

        <h1 className="text-3xl font-bold">
          Vendor Management
        </h1>

        <p className="text-gray-500 mt-2">
          Manage vendor approvals,
          account status,
          area assignment and
          vendor details.
        </p>

      </div>

      {/* ===================================== */}
      {/* VENDOR TABLE */}
      {/* ===================================== */}

      <div className="bg-white rounded-2xl shadow p-6">

        {loading ? (

          <p>Loading...</p>

        ) : vendors.length === 0 ? (

          <p>No Vendors Found</p>

        ) : (

          <div className="overflow-x-auto">

            <table className="w-full border border-gray-200">

              <thead>

                <tr className="bg-gray-100">

                  <th className="p-4 border">
                    Shop Name
                  </th>

                  <th className="p-4 border">
                    Phone
                  </th>

                  <th className="p-4 border">
                    Registration Status
                  </th>

                  <th className="p-4 border">
                    Account Status
                  </th>

                  <th className="p-4 border">
                    Assigned Area
                  </th>

                  <th className="p-4 border">
                    Actions
                  </th>

                </tr>

              </thead>

              <tbody>

                {vendors.map((vendor) => (

                  <tr
                    key={vendor._id}
                    className="hover:bg-gray-50"
                  >

                    <td className="p-4 border">
                      {vendor.shopName}
                    </td>

                    <td className="p-4 border">
                      {vendor.phone}
                    </td>

                    {/* STATUS */}

                    <td className="p-4 border">

                      {vendor.status ===
                        "approved" && (
                        <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full">
                          Approved
                        </span>
                      )}

                      {vendor.status ===
                        "pending" && (
                        <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full">
                          Pending
                        </span>
                      )}

                      {vendor.status ===
                        "rejected" && (
                        <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full">
                          Rejected
                        </span>
                      )}

                    </td>

                    {/* ACCOUNT STATUS */}

                    <td className="p-4 border">

                      <select
  value={vendor.accountStatus}
  onChange={(e) =>
    handleAccountStatusChange(
      vendor._id,
      e.target.value
    )
  }
  className="border rounded-lg px-3 py-2 w-full"
>

                        <option value="active">
                          Active
                        </option>

                        <option value="hold">
                          Hold
                        </option>

                        <option value="suspended">
                          Suspended
                        </option>

                        <option value="deactivated">
                          Deactivated
                        </option>

                      </select>

                    </td>

                    {/* ASSIGNED AREA */}

                    <td className="p-4 border">

                      {vendor.assignedArea ||
                        "Not Assigned"}

                    </td>

                    {/* ACTIONS */}

                    <td className="p-4 border">

                      <div className="flex flex-wrap gap-2">

                        {vendor.status ===
                          "pending" && (
                          <>
                            <button
                              className="bg-green-500 hover:bg-green-600 text-white px-3 py-2 rounded-lg"
                            >
                              Approve
                            </button>

                            <button
                              className="bg-red-500 hover:bg-red-600 text-white px-3 py-2 rounded-lg"
                            >
                              Reject
                            </button>
                          </>
                        )}

                        <button
                          onClick={() => {

                            setSelectedVendor(
                              vendor
                            );

                            setShowAreaModal(
                              true
                            );

                          }}
                          className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-2 rounded-lg"
                        >
                          Assign Area
                        </button>

                        <button
                          className="bg-gray-700 hover:bg-gray-800 text-white px-3 py-2 rounded-lg"
                        >
                          View
                        </button>

                      </div>

                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>

        )}

      </div>

      {/* ===================================== */}
      {/* ASSIGN AREA MODAL */}
      {/* ===================================== */}

      {showAreaModal && (

        <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">

          <div className="bg-white w-[500px] rounded-2xl p-6">

            <h2 className="text-2xl font-bold mb-5">

              Assign Area

            </h2>

            <input
              type="text"
              placeholder="Area Name"
              value={areaData.areaName}
              onChange={(e) =>
                setAreaData({
                  ...areaData,
                  areaName:
                    e.target.value,
                })
              }
              className="w-full border p-3 rounded-lg mb-3"
            />

            <input
              type="text"
              placeholder="Pincode"
              value={areaData.pincode}
              onChange={(e) =>
                setAreaData({
                  ...areaData,
                  pincode:
                    e.target.value,
                })
              }
              className="w-full border p-3 rounded-lg mb-3"
            />

            <input
              type="text"
              placeholder="Latitude"
              value={areaData.latitude}
              onChange={(e) =>
                setAreaData({
                  ...areaData,
                  latitude:
                    e.target.value,
                })
              }
              className="w-full border p-3 rounded-lg mb-3"
            />

            <input
              type="text"
              placeholder="Longitude"
              value={areaData.longitude}
              onChange={(e) =>
                setAreaData({
                  ...areaData,
                  longitude:
                    e.target.value,
                })
              }
              className="w-full border p-3 rounded-lg mb-3"
            />

            <input
              type="number"
              placeholder="Service Radius (KM)"
              value={
                areaData.serviceRadius
              }
              onChange={(e) =>
                setAreaData({
                  ...areaData,
                  serviceRadius:
                    e.target.value,
                })
              }
              className="w-full border p-3 rounded-lg mb-5"
            />

            <div className="flex gap-3">

              <button
                onClick={
                  handleAreaSave
                }
                className="bg-green-500 text-white px-5 py-2 rounded-lg"
              >
                Save Area
              </button>

              <button
                onClick={() =>
                  setShowAreaModal(
                    false
                  )
                }
                className="bg-red-500 text-white px-5 py-2 rounded-lg"
              >
                Cancel
              </button>

            </div>

          </div>

        </div>

      )}

    </div>
  );
}