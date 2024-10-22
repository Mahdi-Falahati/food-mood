import { Link } from "react-router-dom";
import { LuLink } from "react-icons/lu";
import icon from "../../favicon.ico";

export default function MainFooter() {
  return (
    <footer className="container mx-auto mt-5 px-5">
      <div className="flex flex-col md:flex-row">
        <section className="basis-3/5">
          <Link to="/" className="flex items-center font-semibold text-xl">
            Food
            <img src={icon} alt="food-mood" className="mx-1 h-[22px]" />
            Mood
          </Link>
          <p className="mt-3 font-semibold text-justify tracking-wide leading-5">
            Proident do officia consequat nostrud id esse. Fugiat velit
            incididunt anim culpa id enim eiusmod non. Et enim nulla aliqua sit
            excepteur. Laboris eu exercitation exercitation amet magna proident.
            Laborum ut nostrud do do id do. Dolore cillum occaecat pariatur
            proident magna incididunt mollit Lorem eu dolore Lorem qui mollit.
          </p>
        </section>
        <section className="basis-2/5 px-5 my-5">
          <h4 className="text-xl flex items-center">
            <LuLink className="mr-2" />
            Tools
          </h4>
          <div className="flex justify-around items-center flex-wrap my-5">
            {items.map((item, i) => (
              <Link
                key={i}
                to={item.toLowerCase()}
                className="underline text-gray-500 hover:scale-105 font-semibold "
              >
                {item}
              </Link>
            ))}
          </div>
        </section>
      </div>
      <section className="italic text-gray-600 font-semibold flex justify-center items-center mt-5">
        <p className="text-xl mr-2">Created By</p>
        <a href="https://falahati-mahdi.vercel.app/">Mahdi-Falahti</a>
      </section>
    </footer>
  );
}

const items = ["Menu", "Categories", "Discunts"];
