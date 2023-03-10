function NewDepartment() {
    return (

        <div className='wrapper'>
            <div className='category'>
                <h3>new Department</h3>
                <div className='input-page'>
                    <div className='input'>
                        <h4>name Department</h4>
                        <input type='text' placeholder='add new department' size='50' maxLength='50' />

                    </div>
                    <div className='btn'>
                        <button>add new</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NewDepartment;