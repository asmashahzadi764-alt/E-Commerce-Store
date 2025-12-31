import ProductCard from "../Components/ProductCard";

const products = [
  {
    _id: "64f234bcd567ef1234567890",
    name: "Bonsai Tree",
    price: 1500,
    img: "https://via.placeholder.com/200x150?text=Bonsai",
  },
  {
    _id: "64f234bcd567ef1234567891",
    name: "Ficus Bonsai",
    price: 2000,
    img: "https://via.placeholder.com/200x150?text=Ficus",
  },
  // Add more products here
];

const Home = ({ onAdd }) => {
  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Our Bonsai Collection</h2>
      <div style={styles.grid}>
        {products.map((p) => (
          <ProductCard key={p._id} product={p} onAdd={onAdd} />
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "20px",
  },
  heading: {
    textAlign: "center",
    marginBottom: "30px",
    fontSize: "2rem",
    color: "#1f2937",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "20px",
  },
};

export default Home;
