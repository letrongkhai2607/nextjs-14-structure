import { customAxios } from "@/utils/base";

const getChargeItems = async () => {
  try {
    let response = await customAxios.private.get(`charge-items`);
    return response;
  } catch (error) {
    throw error;
  }
};
const getPublicChargeItems = async () => {
  try {
    let response = await customAxios.public.get(`charge-items`);
    return response;
  } catch (error) {
    throw error;
  }
};

export { getChargeItems, getPublicChargeItems };
