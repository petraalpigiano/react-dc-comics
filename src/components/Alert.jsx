export default function Alert({ text, color }) {
  return (
    <>
      <div className="container content-alert">
        <div>{text}</div>
      </div>
    </>
  );
}
