const Sidebar = () => (
  <aside className="w-48 bg-gray-50 border-l border-gray-200 p-4 flex flex-col gap-4 rounded-l-2xl mt-4 mb-4 mr-4">
    {[...Array(5)].map((_, i) => (
      <a key={i} className="h-10 bg-gray-200 rounded-md mb-2 last:mb-0"></a>
    ))}
    <a
      href="/singer"
      key={6}
      className="h-10 bg-gray-200 rounded-md mb-2 last:mb-0"
    >
      Singer
    </a>
  </aside>
);

export default Sidebar;
