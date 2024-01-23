import { Box, Grid, Stack } from "@mui/material";

import { useGetFavoriteImages, useImage } from "@/hooks";
import Photo from "@/components/photo";
import { Suspense } from "react";
import { lazy } from "react";
import Image from "next/image";
import styles from "./page.module.css";
import MansonryGrid from "@/containers/masonry-grid";

const Upload = lazy(() => import("@/components/upload"));
const PhotoContainer = lazy(() => import("@/containers/photo-container"));
export interface ICloudinaryItem {
  public_id: string;
  url: string;
  tags: string[];
}
export default async function Home() {
  const result = await useImage();

  return (
    <div>
      <PhotoContainer>
        <div>
          <Upload />
          <MansonryGrid result={result} />
        </div>
      </PhotoContainer>
    </div>
  );
}
