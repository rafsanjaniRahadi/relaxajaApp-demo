import React, { Component } from 'react';

import { connect } from 'react-redux';

import Header from 'parts/Header';
import PageDetailTitle from 'parts/PageDetailTitle';
import FeaturedImage from 'parts/FeaturedImage';
import PageDetailDescription from 'parts/PageDetailDescription';
import BookingForm from 'parts/BookingForm';
import Activities from 'parts/Activities';
import Testimonial from 'parts/Testimony';
import Footer from 'parts/Footer';

import { checkoutBooking } from 'store/action/checkout';
import { fetchPage } from 'store/action/page';


class DetailPage extends Component {
    
    componentDidMount(){
        window.title = "Details Page";
        window.scrollTo(0,0);

        if (!this.props.page[this.props.match.params.id])
        this.props
          .fetchPage(
            `/detail-page/${this.props.match.params.id}`,
            this.props.match.params.id
          )
    }
    render() {
        const { page, match } = this.props;

        if(!page[match.params.id]) return null
        console.log(page[match.params.id]);
        const breadcrumb = [
            { pageTitle: "Home", pageHref: ""},
            { pageTitle: "House Detail", pageHref: ""}
        ];
        return (
            <>
            <Header {...this.props} />
            <PageDetailTitle
                breadcrumb={breadcrumb}
                data={page[match.params.id]}
            />
            <FeaturedImage  data={page[match.params.id].imageId} />
            <section className="container">
                <div className="row">
                    <div className="col-7 pr-5">
                        <PageDetailDescription data={page[match.params.id]}></PageDetailDescription>
                    </div>
                    <div className="col-5">
                        <BookingForm
                        itemDetails={page[match.params.id]}
                        startBooking={this.props.checkoutBooking} />
                    </div>
                </div>
            </section>
            <Activities data={page[match.params.id].activityId}></Activities>
            <Testimonial data={page[match.params.id].testimonial}></Testimonial>
            <Footer />
            </>
        )
    }
}


const mapsStateToProps = (state) => ({
    page: state.page,
})

export default  connect(mapsStateToProps, { checkoutBooking, fetchPage })(DetailPage);