import RevalidatePathButton from "@/components/RevalidatePathButton"

export default function Home() {
  const time = Date.now()

  return (
    <>
      <h1 className="text-3xl font-bold underline text-center my-2">
        Home page
      </h1>
      <div className="flex flex-col gap-4 justify-center items-center h-[80vh]">
        <p>
          {" "}
          Timestamp: <span className="p-1 bg-pink-300 rounded">{time}</span>
        </p>
        <RevalidatePathButton pathname="/" />
      </div>
    </>
  )
}
