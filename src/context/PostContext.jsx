import { createContext, useContext } from "react";

export const PostsContext = createContext();

export function usePosts() {
    return useContext(PostsContext);
}