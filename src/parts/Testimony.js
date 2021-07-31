import React from "react";

import TestimonyAccent from "assets/images/testimonial-landingpages-frame.jpg";

import Star from "elements/Star";
import Button from "elements/Button";

export default function Testimony({ data }) {
    return (
        <section className="container">
            <div className="row align-item-center">
                <div className="col-auto" style={{marginRight:70 }}>
                    <div className="testimonial-hero" style={{margin: `30px 0 0 30px`}}>
                        <img src={`${process.env.REACT_APP_HOST}/${data.imageUrl}`}  
                        alt="Testimonial"
                        className="position-absolute"
                        style={{ zIndex: 1}}
                        />
                        <img 
                        src={TestimonyAccent}
                        alt="Testimonial frame"
                        className="position-absolute"
                        style={{margin: `-30px 0 0 -30px`}}
                        />
                    </div>
                </div>
                <div className="col">
                    <h2 style={{marginBottom: 20, marginTop: 45}}>
                        {data.name}
                        </h2>
                    <Star value={data.rate} width={35} height={35} spacing={4} />
                    <h5 className="h2 font-weight-light line-height-2 my-3">
                        {data.content}
                    </h5>
                    <span className="">
                        {data.familyName}, {data.familyOccupation}
                    </span>
                    {/* <div>
                        <Button className="btn px-5" style={{marginTop: 40 }} hasShadow isPrimary type="link" href={`/testimonial/${data._id}`}>
                            Tampilkan
                        </Button>
                    </div> */}
                </div>
            </div>
        </section>
    )
}
