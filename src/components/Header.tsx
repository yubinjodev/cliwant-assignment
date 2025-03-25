"use client";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LogoutIcon from "@mui/icons-material/Logout";
import { Button, Stack, Typography } from "@mui/material";
import Image from "next/image";

export default function Header() {
  return (
    <header>
      <Stack
        direction="row"
        justifyContent="space-between"
        sx={{
          px: 5,
          py: 1,
          borderBottom: "1px solid  #eee",
        }}
      >
        <Image
          src="/logo.png"
          alt="Cliwant Dark Logo"
          width={150}
          height={84}
        />

        <Stack direction="row" alignItems="center" spacing={3}>
          <Stack alignItems="flex-end" spacing={0}>
            <Button endIcon={<LogoutIcon />}>로그아웃</Button>
            <Typography>
              <span>개인 회원</span>&nbsp; 과제클라이원트
            </Typography>
            <Typography>까지 Premium</Typography>
          </Stack>
          <AccountCircleIcon fontSize="large" />
        </Stack>
      </Stack>
    </header>
  );
}
