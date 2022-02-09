import Link from '@/components/Link'
import SectionContainer from '@/components/SectionContainer'
import { BlogSEO } from '@/components/SEO'
import Image from '@/components/Image'
import siteMetadata from '@/data/siteMetadata'
import Comments from '@/components/comments'
import ScrollTopAndComment from '@/components/ScrollTopAndComment'
import SignUpForm from '@/components/SignUpForm'

const editUrl = (fileName) => `${siteMetadata.siteRepo}/blob/master/data/blog/${fileName}`
const discussUrl = (slug) =>
  `https://mobile.twitter.com/search?q=${encodeURIComponent(
    `${siteMetadata.siteUrl}/blog/${slug}`
  )}`

const postDateTemplate = { year: 'numeric', month: 'long', day: 'numeric' } // I removed (weekday: 'long',)

export default function PostLayout({ frontMatter, authorDetails, next, prev, children }) {
  const { slug, fileName, date, title, tags } = frontMatter

  return (
    <>
      <BlogSEO
        url={`${siteMetadata.siteUrl}/blog/${slug}`}
        authorDetails={authorDetails}
        {...frontMatter}
      />
      {/* <ScrollTopAndComment /> */}
      <article>
        <div className="">
          {/* HEADER */}
          <header className="sm:pt-6">
            <div className="space-y-2 text-left">
              {/* H1 */}
              <h1 className="text-4xl font-extrabold text-slate-900 dark:text-slate-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
                {title}
              </h1>
              {/* time */}
              <dl>
                <dt className="sr-only">Published by</dt>
                <dd className="text-base font-bold leading-6 text-slate-500 dark:text-slate-600">
                  <time dateTime={date}>
                    {new Date(date).toLocaleDateString(siteMetadata.locale, postDateTemplate)}
                  </time>
                </dd>
              </dl>
            </div>
          </header>
          <div className="pb-8" style={{ gridTemplateRows: 'auto 1fr' }}>
            <div className="xl:pb-0">
              <div className="pt-6 pb-8 prose prose-p:leading-relaxed prose-h2:text-3xl prose-h3:text-xl prose-img:rounded-xl dark:prose-dark max-w-none">
                {children}
              </div>
            </div>
            <SignUpForm />
            <footer>
              {/* <div className="text-sm font-medium leading-5 divide-slate-200 xl:divide-y dark:divide-slate-700 xl:col-start-1 xl:row-start-2">
                {(next || prev) && (
                  <div className="flex justify-between py-4 xl:block xl:space-y-8 xl:py-8">
                    {prev && (
                      <div>
                        <h2 className="text-xs tracking-wide text-slate-500 uppercase dark:text-slate-400">
                          Previous Article
                        </h2>
                        <div className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400">
                          <Link href={`/blog/${prev.slug}`}>{prev.title}</Link>
                        </div>
                      </div>
                    )}
                    {next && (
                      <div>
                        <h2 className="text-xs tracking-wide text-slate-500 uppercase dark:text-slate-400">
                          Next Article
                        </h2>
                        <div className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400">
                          <Link href={`/blog/${next.slug}`}>{next.title}</Link>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div> */}
              <div className="pt-4 xl:pt-8">
                <Link
                  href="/blog"
                  className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                >
                  &larr; Back to the blog
                </Link>
              </div>
            </footer>
          </div>
        </div>
      </article>
    </>
  )
}
