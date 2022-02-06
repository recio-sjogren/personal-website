import Link from '@/components/Link'
import Image from '@/components/Image'
import SignUpForm from '@/components/SignUpForm'
import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import formatDate from '@/lib/utils/formatDate'

const MAX_DISPLAY = 3

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog')

  return { props: { posts } }
}

export default function Home({ posts }) {
  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      <div className="  ">
        {/* HEADER */}

        <div className="grid grid-cols-4 py-14">
          <div className="space-y-4 col-span-3">
            <h1 className="text-5xl font-extrabold text-gray-900 dark:text-gray-100 sm:leading-10 md:leading-14">
              Hi, I'm Manolo 👋
            </h1>
            <p className="text-xl text-gray-800 dark:text-gray-200">
              I am a maker and an independent product design consultant writing about how to bring
              successful products to market.
            </p>
          </div>
          <div className="flex flex-col items-end">
            <Image
              src="/static/images/profile-square.jpg"
              alt="avatar"
              width="144px"
              height="144px"
              className="rounded-full"
            />
          </div>
        </div>

        <h2 className="text-3xl font-bold py-2">Featured Posts</h2>
        <ul className="">
          {!posts.length && 'No posts found.'}
          {posts.slice(0, MAX_DISPLAY).map((frontMatter) => {
            const { slug, date, title, summary, tags } = frontMatter
            return (
              <li
                key={slug}
                className="bg-slate-50 group hover:bg-white dark:bg-black/25 dark:hover:bg-black/50 transition duration-150 my-5 rounded-xl"
              >
                <Link
                  href={`/blog/${slug}`}
                  className="text-gray-900 block py-7 px-6 dark:text-gray-100"
                >
                  <article>
                    <div className="space-y-2">
                      <div className="">
                        {/* Title */}
                        <h2 className="text-xl font-bold">{title}</h2>
                        {/* Published on */}
                        <dl>
                          <dt className="sr-only">Published on</dt>
                          <dd className="mb-3 text-gray-700 dark:text-gray-400">
                            <time dateTime={date}>{formatDate(date)}</time>
                          </dd>
                        </dl>
                        <div className="mb-3 text-gray-700 max-w-none dark:text-gray-400">
                          {summary}
                        </div>
                      </div>
                      <div className="font-medium">
                        <Link
                          href={`/blog/${slug}`}
                          className="group-hover:text-primary-600 dark:group-hover:text-primary-400"
                          aria-label={`Read "${title}"`}
                        >
                          Continue reading &rarr;
                        </Link>
                      </div>
                    </div>
                  </article>
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
      {posts.length > MAX_DISPLAY && (
        <div className="flex justify-start text-base font-medium leading-6">
          <Link
            href="/blog"
            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            aria-label="all posts"
          >
            Read all Posts &rarr;
          </Link>
        </div>
      )}
      {/* NEWSLETTER SUBSCRIBE FORM */}
      <SignUpForm />
    </>
  )
}
