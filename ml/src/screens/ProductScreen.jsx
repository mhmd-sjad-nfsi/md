import { useParams } from "react-router-dom";
import { useState } from "react";
import {
  Container,
  Grid,
  Typography,
  Button,
  Rating,
  Chip,
  Box,
  Stack,
  Paper,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Divider,
} from "@mui/material";
import products from "../data/products";
import { Link as RouterLink } from "react-router-dom";

function ProductScreen() {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));
  const [qty, setQty] = useState(1);

  if (!product) {
    return (
      <Container sx={{ mt: 4 }}>
        <Typography variant="h5" color="error">
          محصول یافت نشد!
        </Typography>
        <Button component={RouterLink} to="/" sx={{ mt: 2 }}>
          بازگشت به صفحه اصلی
        </Button>
      </Container>
    );
  }

  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Button component={RouterLink} to="/" sx={{ mb: 2 }}>
        ← بازگشت
      </Button>

      <Paper
        elevation={4}
        sx={{
          p: 3,
          borderRadius: 4,
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: 4,
        }}
      >
        {/* تصویر محصول */}
        <Box
          sx={{
            flex: 1,
            minWidth: "300px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            component="img"
            src={product.image}
            alt={product.name}
            sx={{
              width: "100%",
              maxWidth: 400,
              borderRadius: 3,
              objectFit: "cover",
            }}
          />
        </Box>

        {/* جزئیات محصول */}
        <Box sx={{ flex: 2 }}>
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            {product.name}
          </Typography>

          <Stack direction="row" spacing={1} alignItems="center" mb={2}>
            <Rating value={product.rating} precision={0.5} readOnly />
            <Typography variant="body2" color="text.secondary">
              ({product.numReviews} نظر)
            </Typography>
          </Stack>

          <Divider sx={{ my: 2 }} />

          <Typography variant="body1" color="text.secondary" paragraph>
            {product.description}
          </Typography>

          <Stack direction="row" spacing={2} alignItems="center" my={2}>
            <Chip
              label={product.countInStock > 0 ? "موجود در انبار" : "ناموجود"}
              color={product.countInStock > 0 ? "success" : "error"}
              size="medium"
            />

            {product.countInStock > 0 && (
              <FormControl size="small" sx={{ minWidth: 80 }}>
                <InputLabel>تعداد</InputLabel>
                <Select
                  value={qty}
                  label="تعداد"
                  onChange={(e) => setQty(e.target.value)}
                >
                  {[...Array(product.countInStock).keys()].map((x) => (
                    <MenuItem key={x + 1} value={x + 1}>
                      {x + 1}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            )}
          </Stack>

          <Typography variant="h5" fontWeight="bold" color="primary" gutterBottom>
            ${product.price}
          </Typography>

          <Button
            variant="contained"
            fullWidth
            disabled={product.countInStock === 0}
            size="large"
            sx={{ mt: 2, py: 1.5 }}
          >
            افزودن به سبد خرید
          </Button>
        </Box>
      </Paper>
    </Container>
  );
}

export default ProductScreen;
