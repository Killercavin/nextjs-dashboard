import { Globe } from 'lucide-react';
import { quicksand } from '@/app/ui/fonts';

export default function AcmeLogo() {
  return (
    <div
      className={`${quicksand.className} flex flex-row items-center leading-none text-white`}
    >
      <Globe className="h-12 w-12 rotate-[15deg]" />
      <p className="text-[44px]">Acme</p>
    </div>
  );
}
