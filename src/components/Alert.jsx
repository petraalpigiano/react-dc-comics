export default function Alert({ text, color }) {
  return (
    <>
      <div className="container">
        <div className={`alert alert-${color || "danger"}`}>
          {text || "si è verificato un errore"}
        </div>
      </div>
    </>
  );
}
