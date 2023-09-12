function AppartmentSheets({ item }) {
  return (
    <div className="appartment-sheets">
      <img src={item.cover} alt="" />
      <h2>{item.title}</h2>
    </div>
  );
}
export default AppartmentSheets;
