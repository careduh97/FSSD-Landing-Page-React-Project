import React from "react";

export function Jumbotron () {
    return (
        <div className="p-5 mb-4 bg-light rounded-3">
            <div className="container py-5">
                <h1 className="display-5 fw-bold">A Warm Welcome</h1>
                <p className="col-md-12 fs-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla maximus libero nulla, a varius erat ultricies eu. Curabitur et lacinia turpis, iaculis rhoncus dui. Curabitur hendrerit magna ac nibh volutpat tincidunt. Donec facilisis est ante, at feugiat ligula placerat eu. Fusce finibus blandit erat, eu pulvinar eros venenatis sit amet.</p>
                <button className="btn btn-primary btn-lg" type="button">Call to action!</button>
            </div>
        </div>
    )
}
