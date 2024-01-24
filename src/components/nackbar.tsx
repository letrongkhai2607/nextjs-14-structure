import * as React from "react";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { useMutationAddNote } from "@/hooks/useMutationAddNote";

export default function SimpleSnackbar({
  note,
  setNote,
}: {
  note: string;
  setNote: Function;
}) {
  const mutation = useMutationAddNote();

  const [open, setOpen] = React.useState(false);

  const handleClick = async (note: string) => {
    if (note === "") return;
    const response = await mutation.mutate({
      name: note,
    });

    if (response === undefined) {
      setOpen(true);
      setNote("");
    }
  };

  const handleClose = (
    event: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const action = (
    <React.Fragment>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  return (
    <div>
      <Button onClick={() => handleClick(note)}>Create new note</Button>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message="Create successfully"
        action={action}
      />
    </div>
  );
}
