export default function TechStack({ techStack = [] }) {
  return (
    <ul className="tech-stack">
      {techStack.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}
