import { connect } from "react-redux";

const mapStateToProps = state => {
  return {
    count: (state.games && state.games.length) || 0
  };
};

const withCount = Component => connect(mapStateToProps)(Component);

export default withCount;
