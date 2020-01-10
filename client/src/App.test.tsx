import React from "react";
import ReactDOM from "react-dom";
import { render } from "@testing-library/react";
import App from "./App";
import { act } from "react-dom/test-utils";

let container: HTMLDivElement | null;
let app: JSX.Element;

beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
  app = <App />;
});

afterEach(() => {
  if (container) {
    document.body.removeChild(container);
  }

  container = null;
});

it("renders learn react link", async () => {
  act(() => {
    ReactDOM.render(app, container);
  });

  expect(container?.querySelector("p")?.innerHTML).toBe("Welcome to gitflow");
});
