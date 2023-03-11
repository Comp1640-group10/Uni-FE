function NewSubmission() {
    return (<div className="">
        <div className="category">
            <h3>new Department</h3>
            <div className="input-page">
                <div className="input">
                    <h4>name Submission</h4>
                    <input
                        type="text"
                        placeholder="add new department"
                        size="50"
                        maxLength="50"
                    />
                    <input
                        name="requested_order_ship_date" type="date"
                        disabled={this.state.mode}
                        // eslint-disable-next-line no-undef
                        value={moment(this.state.item.requested_order_ship_date).format("DD-MMM-YYYY")}
                        className="form-control" onChange={this.handleInputChange}
                    />
                    <input
                        name="requested_order_ship_date" type="date"
                        disabled={this.state.mode}
                        // eslint-disable-next-line no-undef
                        value={moment(this.state.item.requested_order_ship_date).format("DD-MMM-YYYY")}
                        className="form-control" onChange={this.handleInputChange}
                    />
                </div>
                <div className="btn">
                    <button>add new</button>
                </div>
            </div>
        </div>
    </div>);
}

export default NewSubmission;