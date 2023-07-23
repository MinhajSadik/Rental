import { footerDataTypes } from "@/types/footerDataTypes";

const footerData: Array<footerDataTypes> = [
  {
    title: "About",
    subData: [
      {
        name: "How it works",
        path: "./how-it-works"
      },
      {
        name: "Featured",
        path: "./featured"
      },
      {
        name: "Partnership",
        path: "./partnership"
      },
      {
        name: "Bussiness Relation",
        path: "./partnership"
      },    
    ]
  },
  {
    title: "Community",
    subData: [
      {
        name: "Events",
        path: "./events"
      },
      {
        name: "Blog",
        path: "./blog"
      },
      {
        name: "Podcast",
        path: "./podcast"
      },
      {
        name: "Invite a friend",
        path: "./invite-a-friend"
      }
    ]
  },
  {
    title: "Socials",
    subData: [
      {
        name: "Discord",
        path: "./discord"
      },
      {
        name: "Instagram",
        path: "./instagram"
      },
      {
        name: "Twitter",
        path: "./twitter"
      },
      {
        name: "Facebook",
        path: "./facebook"
      }
    ]
  }
];

export default footerData;