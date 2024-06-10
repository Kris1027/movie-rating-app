import { LoaderFunctionArgs } from "react-router-dom";
import { getDetails } from "./getDetails";
import { type contentTypes } from "@/types/content-types";

export const detailsLoader = async ({
  params,
}: LoaderFunctionArgs<{ id: string; contentType: contentTypes }>) => {
  if (!params.id || !params.contentType) {
    throw new Error("Invalid movie ID or content type");
  }
  const contentType = params.contentType as contentTypes;
  return getDetails({ id: params.id, contentType });
};
