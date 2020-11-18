import React, { useState, useContext, useEffect } from "react";
import TodoItem from "./TodoItem";
import TodoService from "../services/TodoServices";
import Message from "../components/Message";
import { AuthContext } from "../context/AuthContext";
import Doctors from "./doctors/Doctors";

import SecondNavbar from "./SecondNavbar";
import Footer from "./Footer";

const Todos = (props) => {
  const [todo, setTodo] = useState({ name: "" });
  const [todos, setTodos] = useState([]);
  const [message, setMessage] = useState(null);
  const authContext = useContext(AuthContext);

  useEffect(() => {
    TodoService.getTodos().then((data) => {
      setTodos(data.todos);
    });
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();
    TodoService.postTodo(todo).then((data) => {
      const { message } = data;
      resetForm();
      if (!message.msgError) {
        TodoService.getTodos().then((getData) => {
          setTodos(getData.todos);
          setMessage(message);
        });
      } else if (message.msgBody === "UnAuthorised") {
        setMessage(message);
        authContext.setUser({ username: "", role: "" });
        authContext.setIsAuthenticated(false);
      } else {
        setMessage(message);
      }
    });
  };

  const onChange = (e) => {
    setTodo({ name: e.target.value });
  };
  const resetForm = () => {
    setTodo({ name: "" });
  };
  return (
    <div className="container-fluid">
      <SecondNavbar />

      <Doctors />

      <div className="list-group">
        <div style={{ color: "black", marginLeft: "20px", marginTop: "20px" }}>
          {todos.map((todo) => {
            return <TodoItem key={todo._id} todo={todo} />;
          })}
        </div>
        <br></br>
        <form onSubmit={onSubmit} className="submitForm">
          <input
            type="text"
            name="todo"
            value={todo.name}
            onChange={onChange}
            className="form-control"
            placeholder="Any suggestion"
          />
          <button
            className="btn btn-lg btn-block"
            type="submit"
            style={{ backgroundColor: "rgba(128, 128, 128, 0.226)" }}
          >
            Submit
          </button>
        </form>
        {message ? <Message message={message} /> : null}
      </div>
      <Footer />
    </div>
  );
};

export default Todos;
