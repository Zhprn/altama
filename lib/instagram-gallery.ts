import { apiClient } from "@/lib/api-client";
import { getImageUrl } from "@/lib/utils";

export interface InstagramGalleryItem {
  id: string;
  title: string;
  link: string;
  image: string;
  created_at: string;
}

export interface InstagramGalleryData {
  posts: InstagramGalleryItem[];
  paging?: {
    cursors: {
      before: string;
      after: string;
    };
    next?: string;
  };
}

export interface InstagramGalleryResponse {
  success: boolean;
  message: string;
  data: InstagramGalleryData;
}

export async function fetchInstagramGallery(): Promise<InstagramGalleryItem[]> {
  const response = await apiClient.get<InstagramGalleryData>("/instagram");
  return response.data.posts;
}

export interface WebGalleryItem {
  id: string;
  title: string;
  image: string;
}

export async function fetchWebGallery(): Promise<WebGalleryItem[]> {
  const response = await apiClient.get<WebGalleryItem[]>("/gallery");
  return response.data;
}

export { getImageUrl };
