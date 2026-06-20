export default function Footer() {
  return (
    <footer className="w-full text-center pb-12 pt-8 flex flex-col items-center gap-2">
      <p className="text-zinc-400 text-sm">Prajakta Vinayak Ranbhare</p>
      
      {/* Clickable email with hover color effect */}
      <a 
        href="mailto:ranbhareprajakta0714@gmail.com" 
        className="text-zinc-500 text-xs hover:text-blue-400 transition-colors duration-200 hover:underline"
      >
        ranbhareprajakta0714@gmail.com
      </a>

      {/* Button with premium hover scale pop effect */}
      <a
        href="https://digitalheroesco.com"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-2 inline-block text-sm px-4 py-2 rounded-md bg-zinc-800 text-white hover:scale-105 transition-transform duration-200 ease-in-out"
      >
        Built for Digital Heroes
      </a>
    </footer>
  );
}

