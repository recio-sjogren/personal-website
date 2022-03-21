import Link from './Link'
import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'

export default function Footer() {
  return (
    <footer>
      <div className="flex flex-col items-center mt-16 mb-8">
        <div className="flex mb-2 space-x-1 text-base text-slate-600 dark:text-slate-400">
          <div>{`© ${new Date().getFullYear()} ${siteMetadata.author}.`}</div>
          {/* <div>{`${new Date().getFullYear()}.`}</div> */}
          {/* <div>
            Made with <a href="https://nextjs.org/">Next.JS</a>, deployed on{' '}
            <a href="https://vercel.com/">Vercel</a>.
          </div> */}
          {/* <div>{` • `}</div>
          <Link href="/">{siteMetadata.title}</Link> */}
        </div>
        {/* <div className="mb-8 text-sm text-gray-500 dark:text-gray-400">
          <Link href="https://github.com/timlrx/tailwind-nextjs-starter-blog">
            Tailwind Nextjs Theme
          </Link>
        </div> */}
      </div>
    </footer>
  )
}
