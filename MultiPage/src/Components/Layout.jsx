export default function Layout({ children, id }) {
  return (
    <>
      <div className='content' id={id}>
        {children}
      </div>
    </>
  );
}
