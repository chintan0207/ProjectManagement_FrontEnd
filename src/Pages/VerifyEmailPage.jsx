/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import useAuthStore from "../stores/useAuthStore";

const VerifyEmailPage = () => {
  const { token } = useParams();
  const { verifyEmail } = useAuthStore();
  const [status, setStatus] = useState("loading"); // loading, success

  useEffect(() => {
    const verify = async () => {
      try {
        const res = await verifyEmail(token);
        if (res) {
          setStatus("success");
        } else {
          setStatus("error");
        }
      } catch (error) {
        setStatus("error");
      }
    };

    verify();
  }, [token, verifyEmail]);

  return (
    <div className="w-full h-screen flex items-center justify-center bg-PRIMARY-50">
      <div className="bg-white p-8 rounded-xl shadow-md max-w-md text-center space-y-4">
        {status === "loading" && (
          <>
            <h2 className="text-2xl font-bold text-PRIMARY">
              Verifying your email...
            </h2>
            <p className="text-gray-600">Please wait a moment.</p>
          </>
        )}

        {status === "success" && (
          <>
            <h2 className="text-2xl font-bold text-green-600">
              Email Verified 🎉
            </h2>
            <p className="text-gray-600">
              Your email has been successfully verified. You can now log in.
            </p>
            <Link to="/login">
              <Button className="w-full mt-4">Go to Login</Button>
            </Link>
          </>
        )}

        {status === "error" && (
          <>
            <h2 className="text-2xl font-bold text-red-600">
              Verification Failed
            </h2>
            <p className="text-gray-600">
              The link may be expired or invalid. Please try again.
            </p>
            <Link to="/login">
              <Button className="w-full mt-4">Back to Login</Button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default VerifyEmailPage;
