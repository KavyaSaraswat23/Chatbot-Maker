export const signup = async ({ email, password }) => {
  const response = await fetch("/api/auth/signup", {
    header: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({ email, password }),
    method: "POST",
  });
  if (!response.ok) {
    
  }
  return await response.json();
};
 
export const logout = async ({ token}) => {
    const response = await fetch("/api/auth/logout", {
      header: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({token}),
      method: "POST",
    });
    if (!response.ok) {
      const {err} = await response.json()
      console.log(err)
      throw new Error(err || "Logout Failed")
    }
    return await response.json();
  };

  export const login = async ({ email, password }) => {
    const response = await fetch("/api/auth/login", {
      header: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ email, password }),
      method: "POST",
    });
    if (!response.ok) {
      const {err} = await response.json()
      console.log(err);
      throw new Error(err || "Login Failed")
    }
    return await response.json();
  };