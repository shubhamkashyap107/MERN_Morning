import { createContext, useContext } from "react";

const userDataContext = createContext()

const data = [
  {
    id: "u1",
    name: "Aisha Verma",
    age: 27,
    picture: "https://randomuser.me/api/portraits/women/65.jpg",
    bio: "UX designer by day, doodler by night. Chai and poetry keep me going."
  },
  {
    id: "u2",
    name: "Rahul Singh",
    age: 30,
    picture: "https://randomuser.me/api/portraits/men/34.jpg",
    bio: "Fitness freak, foodie, and weekend traveler. Lens always ready."
  },
  {
    id: "u3",
    name: "Sneha Patel",
    age: 25,
    picture: "https://randomuser.me/api/portraits/women/88.jpg",
    bio: "Bookworm and aspiring writer. Capturing life through words and pictures."
  },
  {
    id: "u4",
    name: "Arjun Mehra",
    age: 29,
    picture: "https://randomuser.me/api/portraits/men/22.jpg",
    bio: "Engineer who hikes, cooks, and plays guitar. Mountains are my therapy."
  },
  {
    id: "u5",
    name: "Diya Nair",
    age: 26,
    picture: "https://randomuser.me/api/portraits/women/12.jpg",
    bio: "Plant mom and startup nerd. Turning coffee into ideas since 2019."
  },
  {
    id: "u6",
    name: "Karan Joshi",
    age: 32,
    picture: "https://randomuser.me/api/portraits/men/45.jpg",
    bio: "Tech geek with a travel bug. Always looking for the next adventure."
  },
  {
    id: "u7",
    name: "Meera Shah",
    age: 24,
    picture: "https://randomuser.me/api/portraits/women/21.jpg",
    bio: "Dance, drama, and digital art. Expressing myself in every form."
  },
  {
    id: "u8",
    name: "Nikhil Rao",
    age: 28,
    picture: "https://randomuser.me/api/portraits/men/29.jpg",
    bio: "Coffee addict, indie music fan, and aspiring filmmaker."
  },
  {
    id: "u9",
    name: "Priya Das",
    age: 31,
    picture: "https://randomuser.me/api/portraits/women/45.jpg",
    bio: "Marketing strategist with a love for writing and long drives."
  },
  {
    id: "u10",
    name: "Zaid Ali",
    age: 26,
    picture: "https://randomuser.me/api/portraits/men/19.jpg",
    bio: "Web developer, meme collector, and cat dad. Always debugging life."
  },
  {
    id: "u11",
    name: "Tanya Kapoor",
    age: 23,
    picture: "https://randomuser.me/api/portraits/women/72.jpg",
    bio: "Painter, poet, and peace-seeker. Life’s a canvas—paint it bright."
  },
  {
    id: "u12",
    name: "Rohit Khanna",
    age: 34,
    picture: "https://randomuser.me/api/portraits/men/75.jpg",
    bio: "Finance guy with a funny bone. Stand-up comedy on weekends."
  }
]

export const UserDataContext = ({children}) => {
    return (
        <userDataContext.Provider value={{data}}>
            {children}
        </userDataContext.Provider>
    )
}


export const useUserDataContext = () => {
    return useContext(userDataContext)
}


