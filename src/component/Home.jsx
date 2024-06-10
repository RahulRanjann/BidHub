import freightBiddingImage from "../assets/freight-bidding.jpg";

export default function Home() {
  return (
    <div className="flex justify-between container mx-auto items-center h-screen">
      <div className="size-5/12">
        <h1 className="text-6xl font-bold font-mono ">Bid Hub:</h1>
        <h1 className="text-4xl font-bold font-mono ">Your Bid,</h1>
        <h1 className="text-4xl font-bold font-mono">Your Choice</h1>
        <br />
        <p className="text-lg font-sans">
          At BidHub, effortlessly bid on vehicles from banks and
          insurance companies. Discover a wide range of 2 wheelers, 4 wheelers,
          commercial vehicles, tractors, and JCBs available across India. Secure
          your next vehicle with ease and convenience through our platform.
        </p>
      </div>
      <div className="float-right">
        <div className="shadow-xl">
          <img
            src={freightBiddingImage}
            alt="freight-bidding"
            className="w-98 h-96 rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}
