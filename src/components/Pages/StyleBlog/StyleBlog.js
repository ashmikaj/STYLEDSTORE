import classes from "./StyleBlog.module.css";

const StyleBlog = () => {
  var blog = {
    heading: "How to prepare for the return to office in 2022? ",
    content: `"As seasons get more confusing (what’s the deal with balmy 65+ degree
      winter days followed by a snowstorm?!) and COVID variants continue to
      emerge, the start to the new year feels ominous, thus stamping the
      biggest 2022 fashion trends, seen on the runways in September, with a
      sizeable question mark. Though reverting to a 24/7 sweatpants
      existence feels disheartening, it’s likely the only manner of dress
      you’ll be embracing right now as we're working from home once again.
      But it’s not all doom and gloom for the rest of the year. Wile soft
      clothes are, indeed, a piece of the 2022 style puzzle, they’re not the
      only items on deck. Nostalgia is the name of the game. With Y2K
      fashion peaking higher than ever, this new year has plenty of fun
      trends in store for the next reemergence wave. Spotlight-stealing
      attire with a joyous mood is taking over, from vivid colors and prints
      to bold silhouettes like bubble dresses, volume tops, cutouts galore,
      and ultra-low rises on pants and skirts. Accessories are in on the
      fun, too. Think: chunky-AF platforms, rainbow-bright bags, and a
      more-is-more jewelry aesthetic combining beads, pearls, and
      rhinestone-decked baubles. Oh, and if your New Year’s resolution is to
      adopt a new signature color, you better make it purple — it’s the 2022
      hue in all tints, from Pantone’s Very Peri color of the year to
      saturated violet and lavender shades."`,
  };

  const data = JSON.parse(localStorage.getItem("blogdata"));
  console.log(Object.values(data).length);
  return (
    <div className={classes.styleMain}>
      <h6> Here is your style tip for the week </h6>
      {Object.values(data).length < 2 && (
        <div>
          <h3 id="stylehead"> {blog.heading} </h3>
          <div className={classes.styleCard}>
            <text>{blog.content}</text>
          </div>
        </div>
      )}
      {Object.values(data).length === 2 && (
        <div>
          <h3 id="stylehead" defaultValue={blog.heading}>
            {" "}
            {data.heading}{" "}
          </h3>
          <div className={classes.styleCard}>
            <text defaultValue={blog.content}>{data.content}</text>
          </div>
        </div>
      )}
    </div>
  );
};
export default StyleBlog;
