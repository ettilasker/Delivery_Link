import React from "react";
import { Routes, Route } from "react-router-dom";
import AddUser from "./components/AddUser";
import UpdateUser from "./components/UpdateUser";
import UserDetail from "./components/UserDetail";
import UserList from "./components/UserList";
import AddReview from "./components/AddReview";
import UpdateReview from "./components/UpdateReview";
import ReviewDetail from "./components/ReviewDetail";
import ReviewList from "./components/ReviewList";
import AddPackage from "./components/AddPackage";
import UpdatePackage from "./components/UpdatePackage";
import PackageDetail from "./components/PackageDetail";
import PackageList from "./components/PackageList";
import PackageByAddress from "./components/PackageByAddress";

const AppRoutes = () => {
  return (
    <Routes>
      {/* User Routes */}
      <Route path="/user/add" element={<AddUser />} />
      <Route path="/user/update" element={<UpdateUser />} />
      <Route path="/user/:phoneNumber" element={<UserDetail />} />
      <Route path="/user" element={<UserList />} />

      {/* Review Routes */}
      <Route path="/reviews/add" element={<AddReview />} />
      <Route path="/reviews/update" element={<UpdateReview />} />
      <Route path="/reviews/:id" element={<ReviewDetail />} />
      <Route path="/reviews" element={<ReviewList />} />

      {/* Package Routes */}
      <Route path="/packages" element={<PackageList />} />
      <Route path="/package/address/:a/:b" element={<PackageByAddress />} />
      <Route path="/packages/id/:id" element={<PackageDetail />} />
      <Route path="/update-package/:id" element={<UpdatePackage />} />
      <Route path="/add-package" element={<AddPackage />} />

      {/* Default Route */}
      <Route path="/" element={<PackageList />} />
    </Routes>
  );
};

export default AppRoutes;
