import WikipediaContent from "./wiki";

export default function Home() {
  return (
    <div className="Page flex flex-col h-screen overflow-hidden">
      <div className="Header bg-purple-200 w-full h-10 flex-shrink-0"></div>
      <div className="flex h-full">
        <div className="Sidebar bg-purple-500 w-12 flex-shrink-0">
          <button className="text-black font-bold mt-4 container">X</button>
        </div>
        <div className="Content bg-yellow-100 flex-grow overflow-y-auto">
          <WikipediaContent flag={true} />
        </div>
      </div>
    </div>
  );
}
