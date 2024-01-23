export const Nav = () => {
  return (
    <div>
      <ul className="w-full bg-slate-100 flex text-2xl">
        <li className="px-9 py-4">
          <a href="default.asp">List</a>
        </li>
        <li className="px-9 py-4">
          <a href="news.asp">Nested List</a>
        </li>
        <li className="px-9 py-4">
          <a href="contact.asp">String</a>
        </li>
        <li className="px-9 py-4">
          <a href="about.asp">Etc</a>
        </li>
      </ul>
    </div>
  );
};
