"use client"

import React from "react"

import { revalidateByPathname } from "@/lib/actions"

interface Props {
  pathname: string
}

const RevalidatePathButton = ({ pathname }: Props): JSX.Element => {
  return (
    <button
      onClick={() => {
        revalidateByPathname(pathname)
      }}
      className="px-4 py-2 rounded bg-green-500 hover:bg-green-600 active:bg-green-700 border border-green-700"
    >
      Revalidate
    </button>
  )
}

export default RevalidatePathButton
