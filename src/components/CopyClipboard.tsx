import { Copy, Check } from 'lucide-react';
import { useState } from 'react';

const CopyClipboard = ({ text }: { text: string }) => {
  const [isCopied, setIsCopied] = useState(false);

  const copyClipboard = async () => {
    setIsCopied(true);
    await navigator.clipboard.writeText(text)
    setTimeout(() => setIsCopied(false), 800);
  }

  return (
    <div className='flex items-center	 gap-3'>
      <code className='text-sm'>{text}</code>
      {
        isCopied ? <Check className='h-[1.2rem] w-[1.2rem]' /> :
          <Copy className='h-[1.2rem] w-[1.2rem] cursor-pointer' onClick={copyClipboard} />
      }
    </div>
  )
}

export default CopyClipboard