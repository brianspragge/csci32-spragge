import Image from 'next/image'
import { Cat } from '@repo/ui/cat'

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-eggshell-200 font-sans">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-eggshell-200 sm:items-start">
        <Image className="dark h-20 w-auto" src="/Vimlogo.svg.webp" alt="Vim logo" width={80} height={80} priority />
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:black">
            VimCats to the rescue
            <code className="rounded bg-black/6 px-1.5 py-0.5 font-mono text-[0.9em] dark:bg-white/8">
              cats.vimrc
            </code>{' '}
            file.
          </h1>
          <p className="max-w-md text-lg leading-8 text-black dark:black">
            Want to learn more about how cats can use Vi-mode better than you? Head over to{' '}
            <a
              href="https://vimhelp.org/quickref.txt.html"
              className="font-medium text-deep-crimson-500 dark:text-deep-crimson-500"
            >
              VimHelp
            </a>{' '}
            or the{' '}
            <a
              href="https://www.vim.org/docs.php"
              className="font-medium text-deep-crimson-500 dark:text-deep-crimson-500"
            >
              Documentation
            </a>{' '}
            page.
          </p>
        </div>
        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row"></div>
      </main>
    </div>
  )
}
