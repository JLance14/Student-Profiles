import { render } from "@testing-library/react";
import App from "./App";

import React from "react";
import "@testing-library/jest-dom/extend-expect";

test("renders application", () => {
  render(<App />);
});
