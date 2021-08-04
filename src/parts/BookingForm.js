import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import propTypes from "prop-types";

import Button from "elements/Button";
import InputNumber from "elements/Form/InputNumber";
import InputDate from "elements/Form/InputDate";

class BookingForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        duration: 1,
        date: {
          startDate: new Date(),
          endDate: new Date(),
          key: "selection",
        },
      },
    };
  }

  updateData = (e) => {
    this.setState({
      ...this.state,
      data: {
        ...this.state.data,
        [e.target.name]: e.target.value,
      }
    });
  };

  componentDidUpdate(prevProps, prevState) {
    const { data } = this.state;

    if (prevState.data.date !== data.date) {
      const startDate = new Date(data.date.startDate);
      const endDate = new Date(data.date.endDate);
      const countDuration = new Date(endDate - startDate).getDate();
      this.setState({
        data: {
          ...this.state.data,
          duration: countDuration,
        },
      });
    }

    if (prevState.data.duration !== data.duration) {
      const startDate = new Date(data.date.startDate);
      const endDate = new Date(
        startDate.setDate(startDate.getDate() + +data.duration - 1)
      );
      this.setState({
        ...this.state,
        data: {
          ...this.state.data,
          date: {
            ...this.state.data.date,
            endDate: endDate,
          },
        },
      });
    }
  }

  startBooking = () => {
    const { data } = this.state;
    this.props.startBooking({
      _id: this.props.itemDetails._id,
      duration: data.duration,
      date: {
        startDate: data.date.startDate,
        endDate: data.date.endDate,
      },
    });
    this.props.history.push("/checkout");
  };

  render() {
    const { data } = this.state;
    const { itemDetails } = this.props;
    console.log(itemDetails)

    return (
      <div className="card bordered" style={{ padding: "60px 80px" }}>
        <h4 className="mb-3">Booking Sekarang</h4>
        <h5 className="h2 text-teal mb-4">
           Rp.{itemDetails.price}{".000"}
          <span className="text-gray-500 font-weight-light h4">
            /Malam
          </span>
        </h5>

        <label htmlFor="duration">Berapa Lama Kamu Tinggal?</label>
        <InputNumber
          max={30}
          suffix={" Malam"}
          isSuffixPlural
          onChange={this.updateData}
          name="duration"
          value={data.duration}
        />

        <label htmlFor="date">Pilih Tanggal</label>
        <InputDate onChange={this.updateData} name="date" value={data.date} />

        <h6
          className="text-gray-500 font-weight-light"
          style={{ marginBottom: 40 }}
        >
          Harga yang di keluarkan{" "}
          <span className="text-gray-900">
            Rp.{itemDetails.price * data.duration}000 Rupiah
          </span>{" "}
          per{" "}
          <span className="text-gray-900">
            {data.duration} Malam
          </span>
        </h6>

        <Button
          className="btn"
          hasShadow
          isPrimary
          isBlock
          onClick={this.startBooking}
        >
          Continue to Book
        </Button>
      </div>
    );
  }
}

BookingForm.propTypes = {
  itemDetails: propTypes.object,
  startBooking: propTypes.func
};

export default withRouter(BookingForm);