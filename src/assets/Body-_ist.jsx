import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

export const Body_list = () => {
  const [texta, setTexta] = useState("this is the text");
  const todos = useSelector((state) => state.todos);

  useEffect(() => {
    setTexta(todos[0].text);
  }, [todos]); // <- add empty brackets here

  const handeltextareachange = (e) => {
    setTexta(e.target.value);
    // setTexta(todos[0].text);
  };

  return (
    <div className="bg-slate-400 w-screen flex items-center justify-center">
      <textarea
        id="msg"
        value={texta}
        onChange={handeltextareachange}
        className="text-xl w-4/6 h-3/6"
      />
    </div>
  );
};
