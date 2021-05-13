import React from "react";
import "./subscribe.css"

import { useHubspotForm } from "@aaronhayes/react-use-hubspot-form";

const SubscribeComponent = () => {
  const { loaded, error, formCreated } = useHubspotForm({
    portalId: "8567670",
    formId: "7be89bbb-d47f-430a-938f-105819b43cd6",
    target: "#subscribe-form",
  });

  return (
    <div id="form-container">
      <div id="subscribe-form"></div>
    </div>
  );
};

export default SubscribeComponent;
