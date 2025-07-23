const cardAStyle = {
  border: "1px solid",
  width: "240px",
  boxShadow: "1px 1px 1px 1px grey",
  padding: "20px",
};

const boxFlex = {
  display: "flex",
  gap: "20px",
  alignItem: "center",
  border: "2px solid",
  padding: "20px ",
  justifyContent: "center",
  // flexDirection: "",
};

export default function Card() {
  return (
    <div style={boxFlex}>
      <div style={cardAStyle}>
        <img
          src="https://cdn-icons-png.flaticon.com/512/219/219969.png"
          alt="user-img"
          style={{ width: "200px" }}
        />
        <p> Dhanshree Tanaji Londhe</p>
        <b> Software Engineer</b>
      </div>
    </div>
  );
}
