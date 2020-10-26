import React from "react";
import {MemoryRouter as Router} from "react-router-dom";
import {render, screen} from "@testing-library/react";
import LoginForm from "pages/LoginPage/components/LoginForm";

test("LoginForm should render correct", () => {
  render(
    <Router>
      <LoginForm />
    </Router>,
  );
  const emailEl = screen.getByLabelText(/email/i);
  const btnEl = screen.getByText(/login/i);

  expect(emailEl).toHaveAttribute("type", "text");
  expect(btnEl).toHaveClass("primary");

  screen.debug();
});
