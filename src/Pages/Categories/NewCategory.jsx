import "./Category.css";
function NewCategory() {
  return (
    <div className="">
      <div className="category">
        <h3>new Category</h3>
        <div className="input-page">
          <div className="input">
            <h4>name category</h4>
            <input
              type="text"
              placeholder="add new category"
              size="50"
              maxLength="50"
            />
          </div>
          <div className="btn">
            <button>add new</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewCategory;
