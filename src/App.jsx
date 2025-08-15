import { useState } from "react";
import getDataHooks from "./Hooks/GetDataHooks";
import GuestList from "./Hooks/GuestList";
import GuestInfo from "./Hooks/GuestInfo";

const API =
  "https://fsa-crud-2aa9294fe819.herokuapp.com/api/2507-FTB-WEB-FT/guests";

export default function App() {
  const [guest, setGuest] = useState(null);
  const { isLoading, guests } = getDataHooks(API);

  console.log("isLoading", isLoading);
  console.log("guests", guests);

  if (isLoading) return <p>Loading...</p>;

  return (
    <>
      <h1>Guest List</h1>
      <GuestList guests={guests} setGuest={setGuest} />
      <GuestInfo guest={guest} setGuest={setGuest} />
    </>
  );
}
