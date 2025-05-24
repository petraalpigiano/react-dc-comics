export default function Alert({ children, color }) {
  if (!children) return <></>;
  return (
    <>
      <div className="container">
        <div className={`alert alert-${color || "danger"}`}>{children}</div>
      </div>
    </>
  );
}
