"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button, IconButton, Snackbar } from "@mui/material";
import { useMutation } from "@tanstack/react-query";
import { useMutationLogin } from "@/hooks/useMutationLogin";

const Page = () => {
  const [phone, setPhone] = React.useState<string>("0907942969");
  const [password, setPassword] = React.useState<string>("0907942969");
  const mutation = useMutationLogin();

  const handleLogin = async () => {
    try {
      const response = await mutation.mutate({
        phone,
        password,
      });
    } catch (error) {}
  };
  return (
    <Box
      component="form"
      sx={{
        background: "white",
        "& > :not(style)": { m: 1, width: "25ch" },
        display: "flex",
        alignItems: "end",
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        defaultValue={phone}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          setPhone(event.target.value);
        }}
        label="Phone"
        variant="standard"
      />
      <TextField
        defaultValue={password}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          setPassword(event.target.value);
        }}
        label="Password"
        variant="standard"
      />
      <Button onClick={handleLogin}>Login</Button>
    </Box>
  );
};

export default Page;
