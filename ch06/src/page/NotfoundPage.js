import React, { Component } from 'react';

class NotfoundPage extends Component {
    render() {
        return(
            <div className='bg-faded p-4 my-4'>
                <hr className='divider' />
                <h2 className="text-center text-lg text-uppercase"><strong>Page NotFound</strong></h2>
                <hr className="divider" />
                <form>
                    <div className="row">
                        <div className="form-group col-lg-12">
                            <label className="text-heading"><strong>404Page</strong></label>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default NotfoundPage;