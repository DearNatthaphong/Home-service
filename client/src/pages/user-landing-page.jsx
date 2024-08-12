import React from "react";
import UserHeader from "../components/user-header.jsx";
import LandingBanner from "../components/user-landing-page/landing-banner.jsx";
import LandingService from "../components/user-landing-page/landing-service.jsx";
import LandingContentFooter from "../components/user-landing-page/landing-content-footer.jsx";
import UserFooter from "../components/user-footer.jsx";

function UserLandingPage() {
  return (
    <div className="h-full bg-background flex flex-col overflow-x-hidden">
      <UserHeader />
      <LandingBanner />
      <LandingService />
      <LandingContentFooter />
      <UserFooter />
    </div>
  );
}

export default UserLandingPage;
