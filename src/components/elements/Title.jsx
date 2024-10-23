export default function Title({ title, icon, color }) {
  return (
    <h2
      className={`shadow-inner ${
        color ? color : "text-gray-700"
      } shadow-slate-400 w-[280px] px-2 py-2 rounded-md mb-5 italic flex items-center font-semibold tracking-wider text-2xl`}
    >
      {title}
      {icon ? icon : null}
    </h2>
  );
}
