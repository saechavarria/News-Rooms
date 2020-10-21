import React from "react";
import not_found from "../../public/not_found.gif";

class Page extends React.Component {
  componentDidMount() {
    if (this.props.category === 0) {
      this.props.getHomeNews();
    } else {
      this.props.onGetNews(this.props.category);
    }
  }

  render() {
    const { repos, hasError, isLoading } = this.props;
    if (hasError) {
      return (
        <div className="container">
          <h6>Error al buscar los repos.</h6>
        </div>
      );
    }

    if (isLoading) {
      return (
        <div className="container">
          <div class="d-flex justify-content-center">
            <div class="spinner spinner-border text-primary" role="status">
              <span class="sr-only">Loading...</span>
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className="row">
        {repos.map((repo, i) => (
          <div className="carta main-card col-md-auto">
            <div className="card">
              <img
                src={repo.img_url === null ? not_found : repo.img_url}
                alt="IMG"
                className="img card-img-top"
              />
              <div className="card-body">
                <p className="card-text">{repo.title}</p>
                <h3 className="card-text">{repo.source_name}</h3>
                <div className="text-right">
                  <a
                    href={repo.url}
                    className="btn btn-primary"
                    target="_blank"
                  >
                    VER MÁS
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Page;
