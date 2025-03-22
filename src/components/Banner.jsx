export default function Banner() {
  return (
    <div>
      <div className="carousel w-full h-[calc(100vh-150px)]">
        <div
          id="item1"
          className="carousel-item w-full md:flex justify-between h-full items-center gap-4"
        >
          <h1 className="h1">
            Turn Dreams Into Reality – Fund & Support Today!
          </h1>
          <img
            src="https://i.pinimg.com/474x/cd/b2/c6/cdb2c646e1578e593ff29a0861341aa5.jpg"
            className="w-1/2 object-cover h-[300px] rounded-md"
          />
        </div>
        <div
          id="item2"
          className="carousel-item w-full md:flex justify-between h-full items-center gap-4"
        >
          <h1 className="h1">
            Stronger Together – Empower Ideas, Change Lives
          </h1>

          <img
            src="https://i.pinimg.com/474x/bc/91/c5/bc91c502a2fcccefb744b852d8642668.jpg"
            className="w-full  object-cover h-[300px] rounded-md"
          />
        </div>
        <div
          id="item3"
          className="carousel-item w-full md:flex justify-between h-full items-center gap-4"
        >
        <h1 className="h1">Your Contribution Matters – Make an Impact Now!</h1>
          <img
            src="https://i.pinimg.com/474x/f5/d7/86/f5d786ed045f9dba446fdb21effe9cd4.jpg"
            className="w-full  object-cover h-[300px] rounded-md"
          />
        </div>
        <div
          id="item4"
          className="carousel-item w-full md:flex justify-between h-full items-center gap-4"
        >
          <h1 className="h1">Fuel Innovation – Back the Next Big Idea!</h1>
          <img
            src="https://i.pinimg.com/474x/6d/0b/76/6d0b7670918099732fd087ff78d4c2f1.jpg"
            className="w-full  object-cover h-[300px] rounded-md"
          />
        </div>
      </div>
      <div className="flex w-full justify-center gap-2 py-2">
        <a href="#item1" className="btn bg-secondaryColor text-white btn-xs">
          1
        </a>
        <a href="#item2" className="btn bg-secondaryColor text-white btn-xs">
          2
        </a>
        <a href="#item3" className="btn bg-secondaryColor text-white btn-xs">
          3
        </a>
        <a href="#item4" className="btn bg-secondaryColor text-white btn-xs">
          4
        </a>
      </div>
    </div>
  );
}
