export default function Logo() {
  return (
    <div
      className={`
      flex flex-col
      items-center justify-center
     bg-white h-12 w-12 rounded-full
     gap-1
    `}
    >
      <div className={`h-3 w-3 rounded-full bg-red-600`} />
      <div className={`flex gap-1 mb-0.5`}>
        <div className={`h-3 w-3 rounded-full bg-yellow-500`} />
        <div className={`h-3 w-3 rounded-full bg-green-600`} />
      </div>
    </div>
  );
}
