<<<<<<< HEAD
import { httpAxios } from "@/helper/httpHelper";

export async function signUp(user) {
  const result = await httpAxios
    .post("/api/users", user)
    .then((response) => response.data);

  return result;
}

export async function login(loginData) {
  const result = await httpAxios
    .post("/api/login", loginData)
    .then((response) => response.data);
  return result;
}
export async function currentUser() {
  const result = await httpAxios
    .get("/api/current")
    .then((response) => response.data);
  return result;
}

export async function logout() {
  const result = await httpAxios
    .post("/api/logout")
    .then((response) => response.data);
  return result;
}
=======
import { httpAxios } from "@/helper/httpHelper";

export async function signUp(user) {
  const result = await httpAxios
    .post("/api/users", user)
    .then((response) => response.data);

  return result;
}

export async function login(loginData) {
  const result = await httpAxios
    .post("/api/login", loginData)
    .then((response) => response.data);
  return result;
}
export async function currentUser() {
  const result = await httpAxios
    .get("/api/current")
    .then((response) => response.data);
  return result;
}

export async function logout() {
  const result = await httpAxios
    .post("/api/logout")
    .then((response) => response.data);
  return result;
}
>>>>>>> 22658da22f57e96aa41b7f4c00cd744d3407e39d
