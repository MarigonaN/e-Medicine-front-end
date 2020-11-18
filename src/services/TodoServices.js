export default {
  getTodos: () => {
    return fetch(process.env.REACT_APP_BE_URL + "/user/todos").then(
      (response) => {
        if (response.status != 401) {
          return response.json().then((data) => data);
        } else return { message: { msgBody: "UnAuthorized" }, msgError: true };
      }
    );
  },
  postTodo: (todo) => {
    return fetch(process.env.REACT_APP_BE_URL + "/user/todo", {
      method: "post",
      body: JSON.stringify(todo),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response) => {
      if (response.status != 401) {
        return response.json().then((data) => data);
      } else return { message: { msgBody: "UnAuthorized" }, msgError: true };
    });
  },
};
