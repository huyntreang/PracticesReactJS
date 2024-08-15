import React from "react";
import { withRouter } from "../../components/WithRouter";
// import Color from "../HOC/Color";

class Home extends React.Component {
  componentDidMount() {
    setTimeout(() => {
      this.props.navigate("/todo");
    }, 3000);
  }

  render() {
    return <div>Hello world from Homepage</div>;
  }
}

// export default Color(Home);
export default withRouter(Home);
// export default Home;
