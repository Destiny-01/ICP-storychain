function Create() {
  return (
    <div className="bg-blue h-screen">
      <h1 className="text-white text-center pt-8">Craft A Story</h1>
      <div className="h-max flex flex-col justify-center items-center p-8 text-center md:max-w-[60%] m-auto">
        <input
          type="text"
          placeholder="Title of Your Story"
          className="border-none rounded-3xl p-4 w-full my-4 focus-visible:outline-0 mt-4"
        />
        <input
          type="text"
          placeholder="Prompt for AI to generate your story"
          className="border-none rounded-3xl p-4 w-full my-4 focus-visible:outline-0 mt-6"
        />
        <button className="border-white text-white mt-16 text-2xl">
          Create
        </button>
      </div>
    </div>
  );
}

export default Create;
