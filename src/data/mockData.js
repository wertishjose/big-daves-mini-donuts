export const defaultSiteContent = {
  hero: {
    headline: "Hot Fresh Mini Donuts When We're In Your Town 🍩",
    subheadline:
      "Find Big Dave's current location, upcoming events, and fresh fair-style favorites across Minnesota.",
    trailerImage: "/images/661908500_122259026036059769_238648391896525221_n.jpg",
    foodImage: "/images/663107727_122259026348059769_347286374704656782_n.jpg",
    featuredImage: "/images/696792504_122263002350059769_6589352645923373101_n.jpg",
  },
  todayLocation: {
    venue: "Cash Wise Monday Pop-Up",
    address: "1300 Babcock Blvd E, Delano, MN 55328",
    hours: "12:00 PM - 6:00 PM",
    isOpen: true,
    directionsUrl:
      "https://www.google.com/maps/search/?api=1&query=1300+Babcock+Blvd+E+Delano+MN+55328",
    mapEmbedUrl:
      "https://www.google.com/maps?q=1300+Babcock+Blvd+E+Delano+MN+55328&z=13&output=embed",
    featuredSpecial: "Mini Bag $6, Corn Dogs $6, and a 2 for $10 donut special while supplies last.",
    phone: "(320) 555-1234",
  },
  featuredItems: [
    {
      id: "mini-donuts",
      name: "Mini Donuts",
      price: "Mini Bag $6",
      bonus: "2 for $10",
      description: "Served hot, tossed in cinnamon sugar, and made for walking the fair.",
      image: "/images/696765913_122263167566059769_5243532634088996136_n.jpg",
      accent: "from-golden-soft via-golden to-[#f29f05]",
    },
    {
      id: "corn-dogs",
      name: "Corn Dogs",
      price: "Corn Dogs $6",
      bonus: "Crispy fair classic",
      description: "Golden on the outside, savory in the middle, and festival-ready.",
      image: "/images/697262911_122263167326059769_8878770367604943364_n.jpg",
      accent: "from-[#ffcf94] via-[#f6a64f] to-[#c16c1d]",
    },
    {
      id: "cotton-candy",
      name: "Cotton Candy",
      price: "Cotton Candy $5",
      bonus: "Carnival favorite",
      description: "A bright, fluffy fairground extra that rounds out the trailer's sweetest stops.",
      image: "/images/cotton-candy.jpg",
      accent: "from-[#ffe7f2] via-[#ffd1e5] to-[#ff9ccc]",
    },
  ],
  testimonials: [
    {
      id: "review-1",
      author: "Adam Vogel",
      quote:
        "Some of the best mini donuts I've ever had. Evenly coated so all the sugar isn't sitting at the bottom of the bag!",
      featured: false,
    },
    {
      id: "review-2",
      author: "Pam Nemitz",
      quote: "Very good doughnuts and corn dogs 😋",
      featured: false,
    },
    {
      id: "review-3",
      author: "Kimberlee Petersen",
      quote: "Love the service and corn dogs!! Great food.",
      featured: false,
    },
    {
      id: "review-4",
      author: "Mike Heine",
      quote: "Excellent mini donuts! It's always a treat when he comes to town.",
      featured: true,
    },
    {
      id: "review-5",
      author: "Anna Engeman",
      quote: "The best fresh mini donuts! Great food.",
      featured: false,
    },
  ],
  events: [
    {
      id: "1",
      title: "Cash Wise Monday Stop",
      location: "Delano, MN",
      date: "Every Monday",
      time: "12:00 PM - 6:00 PM",
      type: "Grocery Lot Pop-Up",
    },
    {
      id: "2",
      title: "County Fair Rotation",
      location: "Central Minnesota",
      date: "Summer Weekends",
      time: "Posted Weekly",
      type: "County Fair",
    },
    {
      id: "3",
      title: "Community Festival Nights",
      location: "Around the Twin Cities and west-central Minnesota",
      date: "Seasonal Pop-Ups",
      time: "Afternoon + Evening",
      type: "Festival",
    },
  ],
  promotions: {
    title: "Catch the bright red trailer when it rolls into your neighborhood.",
    body:
      "From weekly grocery-lot stops to summer festival weekends, Big Dave's setup feels right at home anywhere families are looking for something fresh, nostalgic, and fun.",
    image: "/images/696792504_122263002350059769_6589352645923373101_n.jpg",
  },
};

export const dashboardInitialEvent = {
  id: "",
  title: "",
  location: "",
  date: "",
  time: "",
  type: "",
};
