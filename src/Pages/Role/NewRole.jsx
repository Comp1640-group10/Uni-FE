function NewDepartment() {
  return (
    <div className="">
      <div className="category">
        <h3>new Role</h3>
        <div className="input-page">
          <div className="input_id">
            <h4>Id</h4>
            <input
              type="text"
              placeholder="add new department"
              size="50"
              maxLength="50"
            />
          </div>
          <div className="input_name">
            <h4>name Role</h4>
            <input
              type="text"
              placeholder="add new department"
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

export default NewDepartment;
