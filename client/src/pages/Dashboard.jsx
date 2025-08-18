import React, { useEffect, useState } from "react";
import { Gem, Sparkles } from "lucide-react";
import { Protect } from "@clerk/clerk-react";
import CreationItem from "../components/CreationItem";
import toast from "react-hot-toast";
import axios from "axios";
import { useAuth } from "@clerk/clerk-react";

axios.defaults.baseURL = import.meta.env.VITE_BASE_URL;

const Dashboard = () => {
  const [creations, setCreations] = useState([]);
  const [loading, setLoading] = useState(true);
  const { getToken } = useAuth();

  const getDashboardData = async () => {
    try {
      const { data } = await axios.get("/api/ai/get-user-creations", {
        headers: {
          Authorization: `Bearer ${await getToken()}`,
        },
      });

      if (data.success) {
        setCreations(data.creations);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
    setLoading(false);
  };

  useEffect(() => {
    getDashboardData();
  }, []);

  return (
    <div className="h-full overflow-y-auto p-6 sm:p-10 bg-gray-50">
  
      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {/* Total Creations */}
        <div className="flex justify-between items-center p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100">
          <div>
            <p className="text-sm text-gray-500">Total Creations</p>
            <h2 className="text-2xl font-semibold text-gray-800">
              {creations.length}
            </h2>
          </div>
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#3588F2] to-[#0BB0D7] flex justify-center items-center shadow-inner">
            <Sparkles className="w-6 h-6 text-white" />
          </div>
        </div>

        {/* Active Plan */}
        <div className="flex justify-between items-center p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100">
          <div>
            <p className="text-sm text-gray-500">Active Plan</p>
            <h2 className="text-2xl font-semibold text-gray-800">
              <Protect plan="premium" fallback="Free">
                Premium
              </Protect>
            </h2>
          </div>
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#FF61C5] to-[#9E53EE] flex justify-center items-center shadow-inner">
            <Gem className="w-6 h-6 text-white" />
          </div>
        </div>
      </div>

      {/* Recent Creations */}
      {loading ? (
        <div className="flex justify-center items-center h-72">
          <div className="w-12 h-12 border-4 border-purple-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      ) : (
        <div>
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Recent Creations
          </h2>

          {creations.length > 0 ? (
            <div className="space-y-4">
              {creations.map((item) => (
                <CreationItem key={item.id} item={item} />
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center text-gray-500 bg-white rounded-xl py-16 shadow-inner border border-gray-100">
              <Sparkles className="w-10 h-10 text-gray-400 mb-3" />
              <p className="text-lg font-medium">No creations yet</p>
              <p className="text-sm text-gray-400">
                Start creating something amazing today!
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Dashboard;
