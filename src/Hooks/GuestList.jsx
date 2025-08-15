// import GuestInfo from "./GuestInfo";

// Alternative Code
// export default function GuestList({ guests, setGuest }) {
//   return (
//     <main>
//       <section className="guestName">
//         <h2>Name</h2>
//         <ol>
//           {guests.map((guest) => (
//             <li key={guest.id} onClick={() => setGuest(guest)}>
//               {guest.name}
//             </li>
//           ))}
//         </ol>
//       </section>
//       <section className="guestEmail">
//         <h2>Email</h2>
//         <ol>
//           {guests.map((guest) => (
//             <li key={guest.id} onClick={() => setGuest(guest)}>
//               {guest.email}
//             </li>
//           ))}
//         </ol>
//       </section>
//       <section className="guestPhone">
//         <h2>Phone</h2>
//         <ol>
//           {guests.map((guest) => (
//             <li key={guest.id} onClick={() => setGuest(guest)}>
//               {guest.phone}
//             </li>
//           ))}
//         </ol>
//       </section>
//     </main>
//   );
// }

// Simplified code above
export default function GuestList({ guests, setGuest }) {
  return (
    <main>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {guests.map((guest) => (
            <tr
              key={guest.id}
              onClick={() => setGuest(guest)}
              style={{ cursor: "pointer" }}
            >
              <td>{guest.name}</td>
              <td>{guest.email}</td>
              <td>{guest.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}
