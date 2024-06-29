export function Loader() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="relative w-40 h-40 border-4 border-[#282828] overflow-hidden rounded-full shadow-[-5px_-5px_5px_rgba(255,255,255,0.1),_10px_10px_10px_rgba(0,0,0,0.4),_inset_-5px_-5px_5px_rgba(255,255,255,0.2),_inset_10px_10px_10px_rgba(0,0,0,0.4)]">
        <div className="absolute top-[25px] left-[25px] right-[25px] bottom-[25px] z-10 bg-[#212121] rounded-full border-2 border-[#292929] shadow-[inset_-2px_-2px_5px_rgba(255,255,255,0.2),_inset_3px_3px_5px_rgba(0,0,0,0.5)]"></div>
        <div className="absolute w-full h-full rounded-full bg-gradient-to-br from-[#ff7402] via-[#ffe700] to-[#fff55e] blur-[20px] z-[-1] animate-spin"></div>
      </div>
    </div>
  );
}
