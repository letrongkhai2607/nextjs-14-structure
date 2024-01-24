import Upload from "@/components/upload";
import MansonryGrid from "@/components/masonry-grid";
import PhotoContainer from "@/containers/photo-container";
import { useGetFavoriteImages } from "@/hooks";
import React from "react";

const Page = async () => {
  const result = await useGetFavoriteImages();
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
};

export default Page;
