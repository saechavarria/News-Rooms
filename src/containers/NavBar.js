import { connect } from "react-redux";
import { searchNews, getHomeNews, getNews } from "../actions";
import Navbar from "../components/NavBar";

const mapStateToProps = (state, ownProps) => ({
  defaultUser: ownProps.user
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  getHomeNews: () => dispatch(getHomeNews()),
  searchNews: (word) => dispatch(searchNews(word)),
  onGetNews: (category) => dispatch(getNews(category))
});

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
