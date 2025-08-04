export default function AlertMessage({message}) {
  return (
    <>
      <div className="alert alert-success" role="alert">
        {message}
      </div>
    </>
  );
}
