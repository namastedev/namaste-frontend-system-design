import { useState, useEffect } from "react";
import ChatMessage from "./ChatMessage";

// Limit of messages in chat window, after which old messages will be removed
// This is done to prevent the chat window from getting too large and slowing down the application
// because if we don't remove old messages, the chat window will keep on increasing in size resulting in a lot of DOM elements
const CHAT_MESSAGES_LIMIT = 100;

// List of random names
var nameList = [
  "Time",
  "Past",
  "Future",
  "Dev",
  "Fly",
  "Flying",
  "Soar",
  "Soaring",
  "Power",
  "Falling",
  "Fall",
  "Jump",
  "Cliff",
  "Mountain",
  "Rend",
  "Red",
  "Blue",
  "Green",
  "Yellow",
  "Gold",
  "Demon",
  "Demonic",
  "Panda",
  "Cat",
  "Kitty",
  "Kitten",
  "Zero",
  "Memory",
  "Trooper",
  "XX",
  "Bandit",
  "Fear",
  "Light",
  "Glow",
  "Tread",
  "Deep",
  "Deeper",
  "Deepest",
  "Mine",
  "Your",
  "Worst",
  "Enemy",
  "Hostile",
  "Force",
  "Video",
  "Game",
  "Donkey",
  "Mule",
  "Colt",
  "Cult",
  "Cultist",
  "Magnum",
  "Gun",
  "Assault",
  "Recon",
  "Trap",
  "Trapper",
  "Redeem",
  "Code",
  "Script",
  "Writer",
  "Near",
  "Close",
  "Open",
  "Cube",
  "Circle",
  "Geo",
  "Genome",
  "Germ",
  "Spaz",
  "Shot",
  "Echo",
  "Beta",
  "Alpha",
  "Gamma",
  "Omega",
  "Seal",
  "Squid",
  "Money",
  "Cash",
  "Lord",
  "King",
  "Duke",
  "Rest",
  "Fire",
  "Flame",
  "Morrow",
  "Break",
  "Breaker",
  "Numb",
  "Ice",
  "Cold",
  "Rotten",
  "Sick",
  "Sickly",
  "Janitor",
  "Camel",
  "Rooster",
  "Sand",
  "Desert",
  "Dessert",
  "Hurdle",
  "Racer",
  "Eraser",
  "Erase",
  "Big",
  "Small",
  "Short",
  "Tall",
  "Sith",
  "Bounty",
  "Hunter",
  "Cracked",
  "Broken",
  "Sad",
  "Happy",
  "Joy",
  "Joyful",
  "Crimson",
  "Destiny",
  "Deceit",
  "Lies",
  "Lie",
  "Honest",
  "Destined",
  "Bloxxer",
  "Hawk",
  "Eagle",
  "Hawker",
  "Walker",
  "Zombie",
  "Sarge",
  "Capt",
  "Captain",
  "Punch",
  "One",
  "Two",
  "Uno",
  "Slice",
  "Slash",
  "Melt",
  "Melted",
  "Melting",
  "Fell",
  "Wolf",
  "Hound",
  "Legacy",
  "Sharp",
  "Dead",
  "Mew",
  "Chuckle",
  "Bubba",
  "Bubble",
  "Sandwich",
  "Smasher",
  "Extreme",
  "Multi",
  "Universe",
  "Ultimate",
  "Death",
  "Ready",
  "Monkey",
  "Elevator",
  "Wrench",
  "Grease",
  "Head",
  "Theme",
  "Grand",
  "Cool",
  "Kid",
  "Boy",
  "Girl",
  "Vortex",
  "Paradox",
];

// This function will return RandomNames from above list
function generateRandomNames() {
  const finalName = nameList[Math.floor(Math.random() * nameList.length)];
  return finalName;
}

const ChatWindow = () => {
  // State to store messages
  const [messages, setMessages] = useState([]);

  const fetchData = () => {
    // Make API call and get Data

    const data = [
      {
        name: generateRandomNames(),
        photo:
          "https://yt4.ggpht.com/zYmqKzmpe7tii989E4d7grHsSgm3SxW7m_iViiBSIWEs2R0t93XMd7bF9UlveEVU2UFY1LgK=s32-c-k-c0x00ffffff-no-rj",
        message:
          "This is a live streaming chat video in Namaste Frontend System Design series.",
      },
    ];

    setMessages((messages) => {
      // Add new messages to the existing messages
      let newMessageList = [...data, ...messages];
      // If the number of messages exceeds the limit, then remove the old messages
      newMessageList = newMessageList.splice(0, CHAT_MESSAGES_LIMIT);
      return newMessageList;
    });
  };

  useEffect(() => {
    // We have done polling here, as youtube chat uses polling to get new messages
    const s = setInterval(fetchData, 1000);

    return () => {
      clearInterval(s);
    };
  }, []);

  return (
    <div className="flex w-full h-[600px] border border-black m-5 overflow-y-scroll flex-col-reverse">
      {messages.map((message, i) => (
        <ChatMessage key={i} {...message} />
      ))}
    </div>
  );
};
export default ChatWindow;
