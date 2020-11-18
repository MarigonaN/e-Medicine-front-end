export default {
  login: (user) => {
    return fetch(process.env.REACT_APP_BE_URL + "/user/login", {
      method: "post",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      if (res.status !== 401) return res.json().then((data) => data);
      else return { isAuthenticated: false, user: { username: "", role: "" } };
    });
  },
  register: (user) => {
    return fetch(process.env.REACT_APP_BE_URL + "/user/register", {
      method: "post",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => data);
  },
  logout: () => {
    return fetch(process.env.REACT_APP_BE_URL + "/user/logout")
      .then((res) => res.json())
      .then((data) => data);
  },
  isAuthenticated: () => {
    return fetch(process.env.REACT_APP_BE_URL + "/user/authenticated").then(
      (res) => {
        if (res.status !== 401) return res.json().then((data) => data);
        else
          return { isAuthenticated: false, user: { username: "", role: "" } };
      }
    );
  },
};
