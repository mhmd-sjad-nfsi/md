import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Button,
  Rating,
  Chip,
  Stack,
  Box,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

function ProductCard({ product }) {
  return (
    <Card
      sx={{
        position: "relative",
        textDecoration: "none",
        maxWidth: 345,
        borderRadius: 4,
        boxShadow: 4,
        transition: "transform 0.3s ease",
        "&:hover": { transform: "scale(1.03)" },
        overflow: "hidden",
      }}
    >
      <Box
        component={RouterLink}
        to={`/product/${product.id}`}
        sx={{
          position: "absolute",
          inset: 0,
          zIndex: 1,
        }}
      />

      <CardMedia
        component="img"
        height="200"
        image={product.image}
        alt={product.name}
        sx={{ objectFit: "cover" }}
      />

      <CardContent sx={{ position: "relative", zIndex: 2 }}>
        <Typography gutterBottom variant="h6" component="div" fontWeight="bold">
          {product.name}
        </Typography>
        <Stack direction="row" spacing={1} alignItems="center">
          <Rating value={product.rating} precision={0.5} readOnly size="small" />
          <Typography variant="body2" color="text.secondary">
            ({product.numReviews})
          </Typography>
        </Stack>
        <Typography variant="h6" color="primary" fontWeight="medium">
          ${product.price}
        </Typography>
      </CardContent>

      <CardActions sx={{ position: "relative", zIndex: 2 }}>
        <Button
          size="small"
          variant="contained"
          disabled={product.countInStock === 0}
          fullWidth
        >
          Add to Cart
        </Button>
      </CardActions>
    </Card>
  );
}

export default ProductCard;
