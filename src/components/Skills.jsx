export default function Skills({ items = [] }) {
  return (
    <ul className="skills-list">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}
