import Img from "../assets/img.jpg";

function Stories() {
  const stories = [
    {
      title: "A chance to Transform Urban Planning",
      img: Img,
      category: "Analytics",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere quam dolor voluptatibus? Ipsum praesentium rerum tempora in excepturi enim maiores.",
      author: "Ratel Round",
      createdAt: "Saturday 16th September, 2023",
    },
    {
      title: "A chance to Transform Urban Planning",
      img: Img,
      category: "Analytics",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere quam dolor voluptatibus? Ipsum praesentium rerum tempora in excepturi enim maiores.",
      author: "Ratel Round",
      createdAt: "Saturday 16th September, 2023",
    },
    {
      title: "A chance to Transform Urban Planning",
      img: Img,
      category: "Analytics",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere quam dolor voluptatibus? Ipsum praesentium rerum tempora in excepturi enim maiores.",
      author: "Ratel Round",
      createdAt: "Saturday 16th September, 2023",
    },
    {
      title: "A chance to Transform Urban Planning",
      img: Img,
      category: "Analytics",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere quam dolor voluptatibus? Ipsum praesentium rerum tempora in excepturi enim maiores.",
      author: "Ratel Round",
      createdAt: "Saturday 16th September, 2023",
    },
    {
      title: "A chance to Transform Urban Planning",
      img: Img,
      category: "Analytics",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere quam dolor voluptatibus? Ipsum praesentium rerum tempora in excepturi enim maiores.",
      author: "Ratel Round",
      createdAt: "Saturday 16th September, 2023",
    },
  ];
  return (
    <div className="bg-blue h-full">
      <h1 className="text-white text-center pt-8">All Stories</h1>
      <div className="h-full flex flex-wrap justify-center p-8 gap-8">
        {stories.map((story, i) => (
          <div className="md:w-[30%] rounded-lg" key={i}>
            <div className="h-56 overflow-hidden">
              <img
                src={story.img}
                className="w-full rounded-md object-cover"
                alt="img"
              />
            </div>
            <div className="bg-white p-4 rounded-b-lg">
              <div className="bg-[#FEF0EC] px-3 w-fit rounded-2xl">
                <p className="uppercase text-[#F9A07B]">{story.category}</p>
              </div>
              <h2 className="text-2xl my-3 font-semibold">{story.title}</h2>
              <p>{story.description}</p>
              <div className="flex items-center mt-3">
                <img src={Img} className="h-8 w-8 rounded-full" alt="img" />
                <p className="font-semibold mr-4 ml-2">{story.author}</p>
                <p className="text-sm">{story.createdAt}</p>
              </div>
            </div>
          </div>
        ))}
        {/* <div className="w-[30%] rounded-lg">
          <div className="h-56 overflow-hidden">
            <img
              src={Img}
              className="w-full rounded-md object-cover"
              alt="img"
            />
          </div>
          <div className="bg-white p-4 rounded-b-lg">
            <div className="bg-[#FEF0EC] px-3 w-fit rounded-2xl">
              <p className="uppercase">Analytics</p>
            </div>
            <h2 className="text-2xl my-3 font-semibold">
              A chance to Transform Urban Planning
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
              enim doloribus expedita maiores ullam quibusdam voluptatibus
              aliquid vitae nisi suscipit?
            </p>
            <div className="flex items-center mt-3">
              <img src={Img} className="h-8 w-8 rounded-full" alt="img" />
              <p className="font-semibold mr-4 ml-2">Ratel Round</p>
              <p className="text-sm">Saturday 16th September, 2023</p>
            </div>
          </div>
        </div>
        <div className="w-[30%] rounded-lg">
          <div className="h-56 overflow-hidden">
            <img
              src={Img}
              className="w-full rounded-md object-cover"
              alt="img"
            />
          </div>
          <div className="bg-white p-4 rounded-b-lg">
            <div className="bg-[#FEF0EC] px-3 w-fit rounded-2xl">
              <p className="uppercase">Analytics</p>
            </div>
            <h2 className="text-2xl my-3 font-semibold">
              A chance to Transform Urban Planning
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
              enim doloribus expedita maiores ullam quibusdam voluptatibus
              aliquid vitae nisi suscipit?
            </p>
            <div className="flex items-center mt-3">
              <img src={Img} className="h-8 w-8 rounded-full" alt="img" />
              <p className="font-semibold mr-4 ml-2">Ratel Round</p>
              <p className="text-sm">Saturday 16th September, 2023</p>
            </div>
          </div>
        </div>
        <div className="w-[30%] rounded-lg">
          <div className="h-56 overflow-hidden">
            <img
              src={Img}
              className="w-full rounded-md object-cover"
              alt="img"
            />
          </div>
          <div className="bg-white p-4 rounded-b-lg">
            <div className="bg-[#FEF0EC] px-3 w-fit rounded-2xl">
              <p className="uppercase">Analytics</p>
            </div>
            <h2 className="text-2xl my-3 font-semibold">
              A chance to Transform Urban Planning
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
              enim doloribus expedita maiores ullam quibusdam voluptatibus
              aliquid vitae nisi suscipit?
            </p>
            <div className="flex items-center mt-3">
              <img src={Img} className="h-8 w-8 rounded-full" alt="img" />
              <p className="font-semibold mr-4 ml-2">Ratel Round</p>
              <p className="text-sm">Saturday 16th September, 2023</p>
            </div>
          </div> 
        </div>*/}
      </div>
    </div>
  );
}

export default Stories;
