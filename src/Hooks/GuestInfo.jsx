export default function GuestInfo({ guest, setGuest }) {
  if (!guest) return <p>Select a guest to see more details.</p>;

  return (
    <section className="guestInfo">
      <h3>{guest.name}</h3>
      <p>{guest.email}</p>
      <p>{guest.phone}</p>
      <p className="bio">{guest.bio}</p>
      <p className="job">{guest.job}</p>

      <button onClick={() => setGuest(null)}>Back</button>
    </section>
  );
}
