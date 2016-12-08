import {connect} from "react-redux";
import {push, replace} from "react-router-redux";


export default function routingContainer(comp) {
  return connect(
    (state) => {
      return {
        router: state.router
      };
    },
    { push, replace }
  )(comp);
}
