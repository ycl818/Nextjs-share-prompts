import Feed from "@components/Feed";

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center orange_gradient">
        Discover & Share
        <br className="max-md:hidden" />
        {/* <span className="orange_gradient text-center">AI-Power Prompts</span> */}
      </h1>
      <p className="desc text-center">
        Promptopia is a prompting tool for mordern world to discover, create and
        share creative prompts
      </p>

      <Feed />
      {/* Feed */}
    </section>
  );
};

export default Home;
