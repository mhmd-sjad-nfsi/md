import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useSearchParams, Link } from 'react-router-dom';
import { addToCart, removeFromCart } from '../redux/slices/cartSlice';
import {
  Typography,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Divider,
  Box,
  Button,
  Grid,
  Stack,
  Paper,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

function CartScreen() {
  const { id: productId } = useParams();
  const [searchParams] = useSearchParams();
  const qty = Number(searchParams.get('qty')) || 1;

  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  useEffect(() => {
    if (productId) {
      fetch(`/api/products/${productId}`)
        .then((res) => res.json())
        .then((data) => {
          dispatch(addToCart({ ...data, qty }));
        });
    }
  }, [dispatch, productId, qty]);

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
  };

  const increaseQtyHandler = (id) => {
    const item = cartItems.find(item => item._id === id);
    if (item) {
      dispatch(addToCart({ ...item, qty: item.qty + 1 }));
    }
  };

  const decreaseQtyHandler = (id) => {
    const item = cartItems.find(item => item._id === id);
    if (item && item.qty > 1) {
      dispatch(addToCart({ ...item, qty: item.qty - 1 }));
    }
  };

  return (
    <Box sx={{ mt: 4 }}>
      <Typography variant="h5" gutterBottom>
        سبد خرید شما
      </Typography>
      {cartItems.length === 0 ? (
        <Typography variant="h6" color="text.secondary">
          سبد خرید شما خالی است!
        </Typography>
      ) : (
        <Grid container spacing={2}>
          {cartItems.map((item) => (
            <Grid item xs={12} sm={6} md={4} key={item._id}>
              <Paper sx={{ p: 2, display: 'flex', alignItems: 'center', gap: 2 }}>
                <Box
                  component="img"
                  src={item.image}
                  alt={item.name}
                  sx={{
                    width: '80px',
                    height: '80px',
                    objectFit: 'cover',
                    borderRadius: 2,
                  }}
                />
                <Stack sx={{ flex: 1 }}>
                  <Typography variant="h6" noWrap>
                    {item.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.description}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    قیمت: ${item.price}
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <IconButton onClick={() => decreaseQtyHandler(item._id)} size="small">
                      <RemoveIcon />
                    </IconButton>
                    <Typography variant="body1">{item.qty}</Typography>
                    <IconButton onClick={() => increaseQtyHandler(item._id)} size="small">
                      <AddIcon />
                    </IconButton>
                  </Box>
                </Stack>
                <IconButton
                  edge="end"
                  color="error"
                  onClick={() => removeFromCartHandler(item._id)}
                >
                  <DeleteIcon />
                </IconButton>
              </Paper>
            </Grid>
          ))}
        </Grid>
      )}

      <Box sx={{ mt: 4 }}>
        <Typography variant="h6">
          مجموع: $
          {cartItems
            .reduce((acc, item) => acc + item.price * item.qty, 0)
            .toFixed(2)}
        </Typography>

        <Button
          variant="contained"
          color="primary"
          sx={{ mt: 2 }}
          fullWidth
          disabled={cartItems.length === 0}
          component={Link}
          to="/shipping"
        >
          ادامه به پرداخت
        </Button>
      </Box>
    </Box>
  );
}

export default CartScreen;
