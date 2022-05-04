import React from "react";
import { storiesOf } from "@storybook/react";

import { Login } from "./Login";

storiesOf("Login", module).add("Default", () => (
  <>
    <div style={{ display: "flex", justifyContent: "space-evenly" }}>
      <Login />
    </div>
  </>
));
