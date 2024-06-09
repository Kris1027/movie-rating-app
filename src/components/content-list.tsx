export function ContentList({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-3 gap-4 text-center p-4">{children}</div>
  );
}
