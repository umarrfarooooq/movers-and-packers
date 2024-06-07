export function ContactUs() {
  return (
    (<section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container grid gap-12">
        <div
          className="flex flex-col items-start justify-start space-y-4 text-start">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Get in Touch</h2>
            <p
              className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Whether you need a quote, have a question, or just want to say hello, we are here to help. Use the contact information to reach us directly.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Contact Info</h3>
            <div className="space-y-2">
              <div className="flex items-start gap-4">
                <LocateIcon className="mt-1 h-6 w-6 text-gray-500 dark:text-gray-400" />
                <div>
                  <p className="font-medium">Acme Movers and Packers</p>
                  <p className="text-gray-500 dark:text-gray-400">123 Main St, Anytown USA 12345</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <PhoneIcon className="mt-1 h-6 w-6 text-gray-500 dark:text-gray-400" />
                <div>
                  <p className="font-medium">+1 (555) 555-5555</p>
                  <p className="text-gray-500 dark:text-gray-400">Monday - Friday, 9am to 5pm</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <MailIcon className="mt-1 h-6 w-6 text-gray-500 dark:text-gray-400" />
                <div>
                  <p className="font-medium">info@acmemovers.com</p>
                  <p className="text-gray-500 dark:text-gray-400">We will get back to you as soon as possible</p>
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Office Hours</h3>
            <div className="space-y-2">
              <div className="flex items-start gap-4">
                <CalendarIcon className="mt-1 h-6 w-6 text-gray-500 dark:text-gray-400" />
                <div>
                  <p className="font-medium">Monday - Friday</p>
                  <p className="text-gray-500 dark:text-gray-400">9:00 AM - 5:00 PM</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <CalendarIcon className="mt-1 h-6 w-6 text-gray-500 dark:text-gray-400" />
                <div>
                  <p className="font-medium">Saturday</p>
                  <p className="text-gray-500 dark:text-gray-400">10:00 AM - 2:00 PM</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <CalendarIcon className="mt-1 h-6 w-6 text-gray-500 dark:text-gray-400" />
                <div>
                  <p className="font-medium">Sunday</p>
                  <p className="text-gray-500 dark:text-gray-400">Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>)
  );
}

function CalendarIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
    </svg>)
  );
}


function LocateIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <line x1="2" x2="5" y1="12" y2="12" />
      <line x1="19" x2="22" y1="12" y2="12" />
      <line x1="12" x2="12" y1="2" y2="5" />
      <line x1="12" x2="12" y1="19" y2="22" />
      <circle cx="12" cy="12" r="7" />
    </svg>)
  );
}


function MailIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>)
  );
}


function PhoneIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path
        d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>)
  );
}
