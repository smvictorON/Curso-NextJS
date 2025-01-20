export default function Logo() {
  return (
    <div className="bg-white h-12 w-12 rounded-full flex flex-col items-center justify-center">
      <div className="h-3 w-3 rounded-full bg-red-600"></div>
      <div className="flex">
        <div className="h-3 w-3 rounded-full bg-green-600"></div>
        <div className="h-3 w-3 rounded-full bg-yellow-600 ml-0.5"></div>
      </div>
    </div>
  )
}