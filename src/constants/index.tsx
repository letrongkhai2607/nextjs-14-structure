import CollectionsIcon from "@mui/icons-material/Collections";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CategoryIcon from "@mui/icons-material/Category";
import LoginIcon from "@mui/icons-material/Login";
const SIDE_BARS = [
  {
    label: "Gallery",
    url: "/",
    icon: <CollectionsIcon />,
    value: "",
  },
  {
    label: "Albums",
    url: "/albums",
    icon: <CategoryIcon />,
    value: "",
  },
  {
    label: "Favorites",
    url: "/favorites",
    icon: <FavoriteIcon />,
    value: "",
  },
];

export { SIDE_BARS };
