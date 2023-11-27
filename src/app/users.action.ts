import { createAction, props } from "@ngrx/store";
import { User } from "./user.model";

export const addUser=createAction(
"[User] add User",
props<{user:User}>()
)