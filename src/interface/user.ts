import { type } from "os";

export interface IUser {
  user_id: number;
  fullname_users: string | null;
  username_users: string | null;
  password_users: string | null;
  role_id: number;
  email_users: string | null;
  created_at_users: Date | string | null;
  updated_at_users: Date | string | null;
}

// membuang kolom yang tidak dibutuhkan
export type IAddUser = Omit<IUser, "user_id" | "created_at_users" | "updated_at_users">;

//memilih beberapa type yang dibutuhkan (pick)