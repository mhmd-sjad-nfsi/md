import { Avatar, Badge, Chip, IconButton, Stack, Tooltip } from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";

function UserHeader() {
  return (
    <Stack direction="row" spacing={2} alignItems="center">
      <Tooltip title="Notifications">
        <IconButton color="inherit">
          <Badge badgeContent={5} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
      </Tooltip>
      <Chip
        avatar={
          <Avatar
            alt="User"
            src="https://th.bing.com/th/id/OIP.aZaq4_VRVrFy1X_gBiA9CQHaHV?w=1024&h=1014&rs=1&pid=ImgDetMain"
          />
        }
        label="MhmsSjad"
        variant="outlined"
        sx={{fontWeight:"bold"}}
      />
    </Stack>
  );
}

export default UserHeader;
