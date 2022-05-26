import Card from "../../UI/Card";
import { useContext, useState } from "react";
import classes from "./AdminAdd.module.css";
import { Link } from "react-router-dom";
import { newProductState } from "../../../redux/actions";
import { useDispatch } from "react-redux";
const AddminAdd = () => {
  const dispatcher = useDispatch();

  const [addproduct, setaddproduct] = useState(false);
  const [removeproduct, setremoveproduct] = useState(false);
  const [editstyleblog, seteditstyleblog] = useState(false);
  const [newheading, setNewHeading] = useState("");
  const [newcontent, setNewContent] = useState("");
  const [addFormInputDetails, setAddFormInputDetails] = useState({});
  const [removeFormInputDetails, setRemoveFormInputDetails] = useState(0);

  const styleEdit = () => {
    seteditstyleblog(!editstyleblog);
    setaddproduct(false);
    setremoveproduct(false);
  };

  const removeProduct = () => {
    setremoveproduct(!removeproduct);
    setaddproduct(false);
    seteditstyleblog(false);
  };

  const AddProductFunction = () => {
    setaddproduct(!addproduct);
    seteditstyleblog(false);
    setremoveproduct(false);
  };

  const onChangeHeadingStyleBlog = event => {
    setNewHeading(event.target.value);
  };
  const onChangeContentStyleBlog = event => {
    setNewContent(event.target.value);
  };
  const blog = {
    heading: newheading,
    content: newcontent,
  };
  localStorage.setItem("blogdata", JSON.stringify(blog));

  const onPublish = () => {
    seteditstyleblog(!editstyleblog);
  };

  const onAddProductHandler = e => {
    e.preventDefault();

    const currProducts = JSON.parse(localStorage.getItem("Products"));

    localStorage.setItem(
      "Products",
      JSON.stringify([
        ...currProducts,
        {
          ...addFormInputDetails,
          id: currProducts.length + 1,
          image: " https://source.unsplash.com/random/?clothes",
        },
      ])
    );
    const newState = JSON.parse(localStorage.getItem("Products"));

    dispatcher(newProductState(newState));
    setaddproduct(!addproduct);
  };
  const onRemoveProductHandle = e => {
    e.preventDefault();
    const currProducts = JSON.parse(localStorage.getItem("Products"));

    const newItems = currProducts.filter(
      items => items.id != removeFormInputDetails
    );

    localStorage.setItem("Products", JSON.stringify(newItems));
    const newState = JSON.parse(localStorage.getItem("Products"));

    dispatcher(newProductState(newState));
    setremoveproduct(!removeproduct);
  };

  const handleFormChange = e => {
    setAddFormInputDetails(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleRemoveChange = e => {
    setRemoveFormInputDetails(e.target.value);
  };
  return (
    <Card className={classes.admincard}>
      <h1 className={classes.admin}>Welcome to the Admin Page</h1>
      <div className={classes.adminbutton}>
        <button onClick={AddProductFunction}>Add a product</button>
        <button onClick={removeProduct}>Delete a product</button>
        <button onClick={styleEdit}>Edit the styleBlog</button>
      </div>
      <div>
        {addproduct && (
          <div className={classes.styleform}>
            <h2>Add a new product</h2>
            {/* custom form */}
            <form>
              <div>
                <input
                  value={addFormInputDetails.image}
                  type="file"
                  name="image"
                  onChange={handleFormChange}
                ></input>
              </div>
              <label>Add a title</label>
              <div>
                <input
                  name="title"
                  value={addFormInputDetails.title}
                  onChange={handleFormChange}
                />
              </div>
              <label>Description</label>
              <div>
                <input
                  name="description"
                  value={addFormInputDetails.description}
                  onChange={handleFormChange}
                />
              </div>
              <label>Price</label>
              <div>
                <input
                  name="price"
                  value={addFormInputDetails.price}
                  onChange={handleFormChange}
                />
              </div>
              <div>
                <button
                  onClick={onAddProductHandler}
                  className={classes.stylesubmit}
                >
                  Add to the base
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
      <div>
        {removeproduct && (
          <div>
            <form>
              <label>Enter the Id of the product to remove</label>
              <input
                name="id"
                type="number"
                value={removeFormInputDetails}
                onChange={handleRemoveChange}
              ></input>
              <button
                onClick={onRemoveProductHandle}
                className={classes.stylesubmit}
              >
                Delete the product
              </button>
            </form>
          </div>
        )}
      </div>
      <div className={classes.styleform}>
        {editstyleblog && (
          <div>
            <div>
              <h1 className={classes.welcome}> Welcome!</h1>
              <h4 className={classes.greeting}>
                Let's write a new style blog for this week{" "}
              </h4>
            </div>
            <input
              className={classes.styleheading}
              id="editedstylehead"
              placeholder="Type the heading of the blog here........"
              onChange={onChangeHeadingStyleBlog}
            ></input>
            <div>
              <textarea
                className={classes.bloginput}
                id="editedstylecontent"
                placeholder="Add your blog here....."
                onChange={onChangeContentStyleBlog}
              ></textarea>
            </div>
            <Link to="/styleblog">
              <button className={classes.stylesubmit} onClick={onPublish}>
                Publish
              </button>
            </Link>
          </div>
        )}
      </div>
    </Card>
  );
};

export default AddminAdd;
