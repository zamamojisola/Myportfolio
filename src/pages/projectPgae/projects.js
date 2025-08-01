import paysimg from "../../assets/pays.png"
import portfolio from "../../assets/porfolioimg.png";
import contentApi from "../../assets/contentApiImg.png";
export const projectList = [
  { id: 1, image: contentApi, 
    preview:"The E-coomerce backend manages user onboarding, products and cart management, order processes, while ensuring authorized access while using the app. ",
    link: "https://github.com/zamamojisola/alanizaneyserver",
    title:"Al-anizaney Backend"
  },
  { id: 2, image: paysimg, 
    preview:"The web application allows user to sign-up and verify their email in order to buy internet data and airtime from their wallet or other payment means.",
    link: "https://github.com/zamamojisola/frontendUtlityDashboard.git",
    title:"utlityApp"
  },
  { id: 3, image: portfolio,
     preview:"The web application allows users to get to know me professionally and interact with me via an email, which was achieved by plugging into an email provider's API.",
     link: "https://github.com/zamamojisola/My-portfolio.git",
     title:"web porfolio"
    },
  { id: 4, image: contentApi,
     preview:"The Application Programming Interface allows users to seemlessly post,get-single,get-all,update and delete articles and users data from the database while ensuring security during interactions with the API.", 
     link:"https://github.com/zamamojisola/contentManagementApi.git",
     title: "contentAPI"
  }
 
  // { id: 5, image: portfolio, preview:" Preview: Lorem ipsum dolor sit amet consectetur adipisicing elit.Et numquam aspernatur tempore. Quasi iure, eaque nihil iste verovitae laboriosam unde reiciendis nulla architecto velit quidebitis. Quos, ipsum distinctio."},
]
