"use server";
import cloudinary from "cloudinary";
const useImage = async () => {
  return await cloudinary.v2.search
    .expression("resource_type:image")
    .sort_by("public_id", "asc")
    .with_field("tags")
    .max_results(40)
    .execute();
};

const useGetFavoriteImages = async () => {
  return await cloudinary.v2.search
    .expression("resource_type:image AND tags=favorites")
    .sort_by("public_id", "asc")
    .with_field("tags")
    .max_results(40)
    .execute();
};
const useUpdateFavoriteTag = async (publicId: string, isFavorite: boolean) => {
  if (isFavorite) {
    return await cloudinary.v2.uploader.remove_tag("favorites", [publicId]);
  }
  return await cloudinary.v2.uploader.add_tag("favorites", [publicId]);
};
export { useImage, useUpdateFavoriteTag, useGetFavoriteImages };
