export default function SignUpForm() {
  return (
    <div id="revue-embed" className="pt-8">
      <form
        action="https://www.getrevue.co/profile/recio_sjogren/add_subscriber"
        method="post"
        id="revue-form"
        name="revue-form"
        target="_blank"
      >
        <div className="bg-white dark:bg-yellow-900/10 rounded-lg p-8 space-y-4 border border-yellow-900/50">
          <div className="text-xl font-bold text-gray-800 dark:text-gray-100">
            Subscribe to my newsletter
          </div>
          <p className="text-base text-gray-800 dark:text-gray-300">
            Stay updated receive my latests posts straight to your inbox.
          </p>
          <label className="sr-only" htmlFor="member_email">
            Email address
          </label>
          <div className="flex">
            <input
              className="px-4 flex-auto rounded-md dark:bg-black focus:outline-none focus:ring-2 focus:border-transparent focus:ring-yellow-600"
              placeholder="your@email.com"
              type="email"
              name="member[email]"
              id="member_email"
            />
            <input
              type="submit"
              className="py-2 bg-yellow-500 px-4 rounded-md font-medium text-white flex mt-2 shadow-sm sm:mt-0 sm:ml-3"
              value="Subscribe"
              name="member[subscribe]"
              id="member_submit"
            />
          </div>
        </div>
      </form>
    </div>
  )
}
