import React from "react";
import "./subscribe.css"

import { useHubspotForm } from "@aaronhayes/react-use-hubspot-form";

const SubscribeComponent = () => {
  useHubspotForm({
    portalId: "8567670",
    formId: "42b27745-051b-4380-b452-8e01c18c5b07",
    target: "#subscribe-form",
  });

  return (
    <div id="form-container-subscribe">
      <div id="subscribe-form"></div>
    </div>
  );
};

export default SubscribeComponent;
