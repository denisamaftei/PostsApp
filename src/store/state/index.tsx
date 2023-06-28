import { PostsState } from "./posts.state";
import { UserState } from "./users.state";

export interface RootState {
    posts: PostsState;
    users: UserState;
  }