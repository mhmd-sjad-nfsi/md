import React from "react";
import {
  Container,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Stack,
  Rating,
  Button,
  Chip,
} from "@mui/material";
import { useParams } from "react-router-dom"; // برای گرفتن اطلاعات محصول از URL

// فرض می‌کنیم که اطلاعات محصولات از فایل یا API میاد
import products from "../products"; // یا مسیر مناسب

function ProductScreen() {
  // استفاده از useParams برای دریافت ID محصول از URL
  const { id } = useParams();
  const product = products.find((p) => p._id === id); // پیدا کردن محصول بر اساس id

  if (!product) {
    return <Typography variant="h6">محصول پیدا نشد</Typography>;
  }

  return (
    <Container sx={{ mt: 4 }}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Card>
            <CardMedia
              component="img"
              alt={product.name}
              image={product.image}
              height="400"
            />
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card sx={{ height: "100%" }}>
            <CardContent>
              <Typography variant="h4" gutterBottom>
                {product.name}
              </Typography>
              <Typography variant="h6" color="primary" gutterBottom>
                ${product.price}
              </Typography>
              <Stack direction="row" spacing={1} alignItems="center">
                <Rating
                  name="read-only"
                  value={product.rating}
                  precision={0.5}
                  readOnly
                  size="small"
                />
                <Typography variant="body2" color="text.secondary">
                  ({product.numReviews} reviews)
                </Typography>
              </Stack>

              <Typography variant="body1" paragraph sx={{ mt: 2 }}>
                {product.description}
              </Typography>

              {product.countInStock > 0 ? (
                <Chip label="In Stock" color="success" size="small" />
              ) : (
                <Chip label="Out of Stock" color="error" size="small" />
              )}

              <Stack direction="row" spacing={2} mt={3}>
                <Button
                  size="large"
                  variant="contained"
                  color="primary"
                  disabled={product.countInStock === 0}
                  fullWidth
                >
                  Add to Cart
                </Button>
              </Stack>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}

export default ProductScreen;
