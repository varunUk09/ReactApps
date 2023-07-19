export default function Profile({ p }) {
  return (
    <li
      key={p.id}
      style={{
        display: "flex",
        alignItems: "center",
        gap: "30px",
        marginBottom: "30px",
      }}>
      <img
        src={p.img}
        style={{
          width: "100px",
          height: "100px",
          borderRadius: "100vmax",
        }}
      />
      <p>{p.name}</p>
      <small>{p.profession}</small>
    </li>
  );
}
