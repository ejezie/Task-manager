import React, { Component } from "react";

export default function dataFecth(WrapComponent) {
  return class extends Component {
    constructor(props) {
      super(props);
      this.state = {
        data: [],
        loading: true,
        error: "",
      };
    }
    async componentDidMount() {
      this._isMounted = true;
      try {
        const tickets = await fetch("https://minitasker-3srv0lhc9-ejezie.vercel.app/tickets");
        const ticketJSON = await tickets.json();
        // console.log(ticketJSON);

        if (ticketJSON) {
          this.setState({
            data: ticketJSON,
            loading: false,
          });
        }
      } catch (error) {
        this.setState({
          loading: false,
          error: "Error fectching tickets",
        });
      }
    }

    componentWillUnmount() {
      this._isMounted = false;
    }

    render() {
      const { loading, error, data } = this.state;

      return (
        <WrapComponent
          data={data}
          loading={loading}
          error={error}
          {...this.props}
        ></WrapComponent>
      );
    }
  };
}
