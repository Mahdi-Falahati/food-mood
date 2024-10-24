import { useEffect, useState } from "react";
import Title from "../components/elements/Title";
import { MdOutlineCategory } from "react-icons/md";
import { MdSavedSearch } from "react-icons/md";
import { useSearchParams } from "react-router-dom";
import Card from "../components/elements/Card";
import filtering from "../components/filtering";
import { Search } from "../components/constant/Images";

export default function Categories() {
  const [query, setQuery] = useState({ difficulty: "", time: "" });
  const [data, setData] = useState([]);
  let [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const difficulty = searchParams.get("difficulty");
    const time = searchParams.get("time");

    const func = async () => {
      const result = await filtering(difficulty, time);
      setData(result);
    };
    func();
  }, []);

  const changeHandler = (e) => {
    setQuery({ ...query, [e.target.name]: e.target.value });
  };

  const searchHandler = async () => {
    setSearchParams(`?difficulty=${query.difficulty}&time=${query.time}`);
    const result = await filtering(query.difficulty, query.time);
    setData(result);
  };

  return (
    <div className="my-10">
      <Title
        icon={<MdOutlineCategory className="ml-2 text-3xl" />}
        title="Categories"
        color="text-purple-800"
      />

      <div className="flex justify-center my-5 items-center flex-wrap flex-col md:flex-row">
        <select
          className="m-4 font-sans bg-white font-bold italic text-center outline-none tracking-widest"
          value={query.difficulty}
          name="difficulty"
          onChange={changeHandler}
        >
          <option value="">Difficulty</option>
          <option value="Easy">Easy</option>
          <option value="Medium">Medium</option>
          <option value="Hard">Hard</option>
        </select>
        <select
          className="m-4 font-sans font-bold bg-white italic text-center outline-none tracking-widest"
          value={query.time}
          name="time"
          onChange={changeHandler}
        >
          <option value="">Cooking Time</option>
          <option value="more">More than 30 min</option>
          <option value="less">Less than 30 min</option>
        </select>
        <button
          className="w-[140px] bg-purple-900 flex items-center justify-center hover:bg-purple-800 text-white rounded-lg py-2 sm:mx-4 font-bold italic outline-none tracking-widest"
          onClick={searchHandler}
        >
          Search
          <MdSavedSearch className="ml-2 animate-pulse text-2xl" />
        </button>
      </div>
      <div className="flex justify-around items-center my-5 flex-wrap">
        {!data.length ? (
          <img src={Search} alt="search food" className="max-h-[300px]" />
        ) : null}
        {data.map((food) => (
          <Card key={food.id} data={food} />
        ))}
      </div>
    </div>
  );
}
