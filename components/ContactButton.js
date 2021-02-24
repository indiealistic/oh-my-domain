export default function ContactButton({ contactlink }) {
  return (
    <div>
      <a href={contactlink} className="cursor-pointer">
        <div className="text-white dark:text-black inline-flex items-center py-2 px-4 mt-4 space-x-1 bg-black dark:bg-white rounded-full uppercase text-sm font-bold">
          <div>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              ></path>
            </svg>
          </div>
          <p>Contact the Owner</p>
        </div>
      </a>
    </div>
  );
}
