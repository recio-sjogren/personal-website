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
        <div className="bg-slate-200/75 dark:bg-yellow-900/10 rounded-lg p-8 space-y-4 border-4 border-slate-600">
          <div className="text-xl font-extrabold text-slate-800 dark:text-slate-100">
            Subscribe to improve your product skills!
          </div>
          <p className="text-base text-slate-600 dark:text-slate-300">
            Each week I break down a thought provoking piece on how to build successful products.
          </p>
          <label className="sr-only" htmlFor="member_email">
            Email address
          </label>
          <div className="space-y-5 sm:space-y-0 sm:flex ">
            <input
              className="px-4 w-full sm:flex-auto rounded-md dark:bg-black focus:outline-none focus:ring-2 focus:border-transparent focus:ring-slate-400 border border-slate-400/50"
              placeholder="Enter your best email"
              type="email"
              name="member[email]"
              id="member_email"
            />
            <input
              className="py-2 bg-yellow-500 px-6 rounded-md font-medium text-white mt-2 shadow-sm sm:mt-0 sm:ml-3"
              type="submit"
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
