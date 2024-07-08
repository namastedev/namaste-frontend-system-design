import ChatWindow from "./ChatWindow";
import VideoStream from "./VideoStream";

const LiveChat = () => {
  return (
    <div className="flex">
      <VideoStream />
      <ChatWindow />
    </div>
  );
};
export default LiveChat;
