import { ExternalLink } from '@/components/ui/external-link'

export default function Footer() {
  return (
    <div className="w-full py-4 text-center">
      <p className="text-gray-500 text-xs">
      All Rights Reserved. Developed by{" "}
        <span className='font-semibold'>Iranzi Dev</span>
      </p>
      <a href="https://www.buymeacoffee.com/iranzithierry" target="_blank" rel="noopener noreferrer" className="mx-auto mt-2 flex max-w-fit items-center justify-center rounded-lgtransition-all duration-75 hover:scale-105">
        <img className='h-8' src="https://img.buymeacoffee.com/button-api/?text=Buy me a coffee&emoji=☕&slug=iranzithierry&button_colour=0069ff&font_colour=ffffff&font_family=Inter&outline_colour=ffffff&coffee_colour=FFDD00" />
      </a>
    </div>
  );
}
