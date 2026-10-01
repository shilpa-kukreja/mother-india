"use client";

const announcements = [
  {
    id: 1,
    // image: "/announcementbar/free.jpeg",
    // alt:"free",
    text: "Ekte indiske smaker i Oslo siden 1993 – en familiedrevet restaurant med tradisjon og kjærlighet til indisk mat. ",
  },
  // {
  //   id: 2,
  //   image: "/announcementbar/no.jpeg",
  //   text: "No Return & Exchange",
  // },
//   {
//     id: 3,
//     // image: "/announcementbar/payment.jpeg",
//     alt:"payment",
//     text: "100% Secure Payments",
//   },
//   {
//     id: 4,
//     // image: "/announcementbar/customer.jpeg",
//     alt:"customer",
//     text: "24/7 Premium Customer Support",
//   },
];

const marqueeItems = [...announcements, ...announcements, ...announcements];

export default function AnnouncementBar() {
  return (
    <div className="flex h-[46px] w-full items-center overflow-hidden bg-[#b8860b] md:h-[48px]">
      <div className="relative w-full overflow-hidden">
        <div className="animate-announcement-scroll flex w-max">
          {marqueeItems.map((item, index) => (
            <div
              key={`${item.id}-${index}`}
              className="flex shrink-0 items-center gap-2.5 whitespace-nowrap px-[30px] md:gap-3 md:px-[50px]"
            >
              {/* <img ... /> */}
              <span className="text-[13px] font-medium tracking-wide text-white md:text-medium">
                {item.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}