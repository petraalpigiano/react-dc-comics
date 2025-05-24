export default function Alert({ text, color }) {
  return (
    <>
      <div className="container">
        <div className={`alert alert-${color}`}>{text}</div>
      </div>
    </>
  );
}
