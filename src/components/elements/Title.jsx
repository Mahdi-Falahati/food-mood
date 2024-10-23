export default function Title({ title, icon, color }) {
  return (
    <h2
      className={`shadow-inner ${
        color ? color : "text-gray-700"
      } shadow-slate-400 w-[260px] md:w-[300px] px-2 py-2 rounded-md mb-5 italic flex justify-center items-center font-semibold tracking-wider text-xl md:text-2xl`}
    >
      {title}
      {icon ? icon : null}
    </h2>
  );
}
