"use server"

import { revalidatePath } from "next/cache"

export const revalidateByPathname = async (path: string) => {
  revalidatePath(path)
}
