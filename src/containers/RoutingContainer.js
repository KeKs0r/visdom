import {connect} from "react-redux";


export default function routingContainer(comp) {
  return connect(
    (state) => {
      return {
        router: state.router
      };
    }
  )(comp);
}
