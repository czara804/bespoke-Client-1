import api from '../config/api'

export async function loginUser(userInfo) {
  // call to server to login user
  // return user info if successful and error if not
  const response = await api.post("/admin/login", userInfo)
  console.log("got user back from server", response) 
  return response.data
}

export async function logOutUser() {
  // call to server to logout user
  return api.get("/admin/logout")
}

export async function registerUser(userInfo) {
  // call to server to register user
  const response = await api.post("/admin/register", userInfo)
  console.log("got user back from server", response)
  return response.data
}

  
export async function userAuthenticated() {
  try {
    const response =  await api.get("/admin/user")
    return response
  }
  catch(error) {
    console.log("an error occurred checking for authenticated user")
    throw(error)
  }
}

// Get loggedInUser from localStorage
export function getLoggedInUser() {
  return localStorage.getItem("loggedInUser")
}

// Store loggedInUser username in local storage
export function setLoggedInUser(user) {
  user ? localStorage.setItem("loggedInUser", user) : localStorage.removeItem("loggedInUser")
}