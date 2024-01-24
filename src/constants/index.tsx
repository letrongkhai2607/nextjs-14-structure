import CollectionsIcon from "@mui/icons-material/Collections";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CategoryIcon from "@mui/icons-material/Category";

import AcUnitIcon from "@mui/icons-material/AcUnit";
const SIDE_BARS = [
  {
    label: "Gallery",
    url: "/",
    icon: <CollectionsIcon />,
    value: "1",
  },
  {
    label: "Albums",
    url: "/albums",
    icon: <CategoryIcon />,
    value: "2",
  },
  {
    label: "Favorites",
    url: "/favorites",
    icon: <FavoriteIcon />,
    value: "3",
  },
  {
    label: "Notes",
    url: "/notes",
    icon: <AcUnitIcon />,
    value: "4",
  },
  {
    label: "Notes Client Component",
    url: "/notes-client-component",
    icon: <AcUnitIcon />,
    value: "5",
  },
];

export { SIDE_BARS };
