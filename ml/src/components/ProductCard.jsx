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
} from "@mui/material";

function ProductCard({ product }) {
  return (
    <Card
      sx={{
        maxWidth: 345,
        borderRadius: 4,
        boxShadow: 4,
        transition: "transform 0.3s ease",
        "&:hover": {
          transform: "scale(1.03)",
        },
      }}
    >
      <CardMedia
        component="img"
        height="200"
        image={product.image}
        alt={product.name}
        sx={{ objectFit: "cover" }}
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div" fontWeight="bold">
          {product.name}
        </Typography>
        <Typography variant="body2" color="text.secondary" noWrap>
          {product.description}
        </Typography>

        <Stack direction="row" spacing={1} mt={2} alignItems="center">
          <Rating
            name="read-only"
            value={product.rating}
            precision={0.5}
            readOnly
            size="small"
          />
          <Typography variant="caption" color="text.secondary">
            ({product.numReviews} reviews)
          </Typography>
        </Stack>

        <Typography variant="h6" color="primary" mt={1}>
          ${product.price}
        </Typography>

        {product.countInStock > 0 ? (
          <Chip label="In Stock" color="success" size="small" sx={{ mt: 1 }} />
        ) : (
          <Chip label="Out of Stock" color="error" size="small" sx={{ mt: 1 }} />
        )}
      </CardContent>

      <CardActions>
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
