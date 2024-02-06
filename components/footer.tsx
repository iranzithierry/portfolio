import { ExternalLink } from '@/components/ui/external-link'

export default function Footer() {
  return (
    <>
      <div className="flex flex-wrap justify-center w-full">
        <div className="relative flex flex-wrap items-center justify-center px-2 py-1 mx-auto text-sm text-white rounded-full shadow-xl h-9 shrink border-1/2 border-slate-200 bg-primary 2xl:h-14">
          <a href="https://www.buymeacoffee.com/iranzithierry" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center mx-auto transition-all duration-75 rounded-lg max-w-fit hover:scale-105">
            <img className='h-7' src="https://img.buymeacoffee.com/button-api/?text=Buy me a coffee&emoji=☕&slug=iranzithierry&button_colour=0069ff&font_colour=ffffff&font_family=Inter&outline_colour=ffffff&coffee_colour=FFDD00" />
          </a>
        </div>
      </div>
      <div className="w-full py-4 pb-16 text-center">
        <p className="text-xs text-gray-500">
          All Rights Reserved.{" "}
          <span className='font-sans antialiased font-semibold'>IRANZI Dev</span>
        </p>
      </div></>
  );
}
