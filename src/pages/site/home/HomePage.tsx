import BestBots from "./components/BestBots";
import Introduction from "./components/Introduction";

const HomePage = () => {
  return (
    <>
      <div className="container mx-auto py-10">
        <BestBots></BestBots>
        <Introduction></Introduction>
      </div>
    </>
  );
};

export default HomePage;
