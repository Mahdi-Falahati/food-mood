import { useRouteError, useNavigate } from "react-router-dom";
import error from "../assets/images/error.png";

export default function ErrorPage() {
  const navigate = useNavigate();
  const errorText = useRouteError();

  return (
    <div className="flex flex-col justify-center items-center">
      <img src={error} alt="Error Page Not Found" className="max-h-[400px]" />
      <p className="px-2 text-center text-xl italic font-semibold tracking-wider">
        Sorry, an unexpected error has occurred.
      </p>
      <p className="px-2 my-2 text-xl italic font-semibold tracking-wider text-red-600">
        <i>{errorText.statusText || errorText.message}</i>
      </p>
      <button
        onClick={() => navigate(-1)}
        className="animate-pulse w-[220px] hover:bg-red-700 hover:text-white tracking-widest font-semibold italic py-2 rounded-md border border-solid border-red-700"
      >
        Back
      </button>
    </div>
  );
}
