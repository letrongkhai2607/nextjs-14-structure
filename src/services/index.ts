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

const getNotes = async () => {
  try {
    let response = await customAxios.public.get(`api/get-notes`, {
      headers: {
        "Cache-Control": "no-cache",
      },
    });
    return response;
  } catch (error) {
    throw error;
  }
};
const addNote = async (payload: { name: string }) => {
  try {
    let response = await customAxios.public.post(`api/add-note`, {
      data: payload,
    });
  } catch (error) {
    throw error;
  }
};
export { getChargeItems, getPublicChargeItems, getNotes, addNote };
