import { Container, Grid } from "@mui/material";
import ProductCard from "./components/ProductCard";
import Header from "./components/Header";
import products from "./data/products";

function App({ mode, setMode }) {
  return (
    <>
      <Header mode={mode} setMode={setMode} />
      <Container sx={{ mt: 4 }}>
        <Grid container spacing={3}>
          {products.map((product, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <ProductCard product={product} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
}

export default App;
