import jwtDecode from "jwt-decode";
import {login, logout} from "contexts/UserContext";
import {setAuthorizationHeader} from "api";

const dispatch = jest.fn();
const token = "12345";

afterEach(() => {
  jest.resetAllMocks();
});

jest.mock("jwt-decode");
jwtDecode.mockImplementation(() => ({user: {}}));
jest.mock("api");

test("login should store in localStorage", () => {
  login(dispatch, token);

  expect(jwtDecode).toHaveBeenCalledTimes(1);
  expect(jwtDecode).toHaveBeenCalledWith(token);

  expect(setAuthorizationHeader).toHaveBeenCalledTimes(1);

  expect(localStorage.filmsToken).toBe(token);
});

test("logout should remove in localStorage", () => {
  logout(dispatch);

  expect(setAuthorizationHeader).toHaveBeenCalledTimes(1);

  expect(localStorage.filmsToken).not.toBe(token);
  expect(localStorage.filmsToken).toBe(undefined);
});
