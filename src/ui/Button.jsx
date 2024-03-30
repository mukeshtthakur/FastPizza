import { Link } from "react-router-dom";

const Button = ({ type, children, disabled, to }) => {
  const base =
    " inline-block rounded-full text-sm bg-yellow-400 font-semibold tracking-wide text-stone-800 transition-colors duration-300 hover:bg-yellow-300 focus:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed uppercase ";

  const styles = {
    primary: base + "px-4 py-3 md:py-4 md:px-6",
    small: base + "py-2 px-4  md:py-2.5 md:px-5 text-xs",
    secondary:
      " inline-block rounded-full border-2 text-sm  border-stone-300 font-semibold tracking-wide text-stone-500 transition-colors duration-300 hover:bg-stone-300 focus:bg-stone-300 focus:outline-none focus:ring focus:ring-stone-300 focus:ring-offset-2 disabled:cursor-not-allowed px-4 py-2.5 md:py-3.5 md:px-6  hover:text-stone-800 uppercase ",
  };

  if (to)
    return (
      <Link className={styles[type]} to={to}>
        {children}
      </Link>
    );
  return (
    <button disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
};
export default Button;
