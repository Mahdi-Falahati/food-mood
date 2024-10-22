import { GiSpellBook } from "react-icons/gi";

export default function Restrictions() {
  return (
    <div className="flex justify-center mx-2">
      <GiSpellBook className="mr-2 text-3xl hidden md:inline" />
      <div className="mb-14 font-semibold max-w-[700px] text-justify">
        <h2 className="text-3xl inline">Restrictions</h2>
        <p className="leading-7 inline ml-3">
          Prohibited items. Merchants may only offer to sell items expressly
          permitted by their agreement with Uber. A merchant cannot offer
          specially regulated or illicit items, like cannabidiol (CBD) and
          tetrahydrocannabinol (THC), on their Uber Eats menu.
        </p>
      </div>
    </div>
  );
}
