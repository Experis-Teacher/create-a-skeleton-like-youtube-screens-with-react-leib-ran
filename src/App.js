import "./App.css";
import dummyData from "./data";
import CardList from "./Components/CardList";
import { Component } from "react";
import SkeletonCard from "./Components/SkeletonCard";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      loading: false,
      timer: null,
    };
  }

  setVideosState(videos = []) {
    this.setState({ videos });
  }

  setLoadingState(value = false) {
    this.setState({ loading: value });
  }

  componentDidMount() {
    this.setLoadingState(true);
    const timer = setTimeout(() => {
      this.setVideosState(dummyData);
      this.setLoadingState(false);
    }, 5000);
    this.setState({ timer });
  }

  componentWillUnmount() {
    clearTimeout(this.state.timer);
  }

  listgenrator(card) {
    let list = [];
    for (let index = 0; index < 3; index++) {
      list.push(card);
    }
    console.log(card);
    return list;
  }

  render() {
    return (
      <div className="App">
        {this.state.videos.map((list, index) => {
          return (
            <section key={index}>
              <h2 className="section-title">{list.section}</h2>
              <CardList list={list} />
              <hr />
            </section>
          );
        })}
        <SkeletonTheme color="grey" highlightColor="#444">
          <p>
            <Skeleton height={32} width={200} count={1} />
          </p>
        </SkeletonTheme>
        <div style={{ display: "flex", justifyContent: "center" }}>
          {this.listgenrator(<SkeletonCard style={{ width: 360 }} />)}
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          {this.listgenrator(<SkeletonCard style={{ width: 360 }} />)}
        </div>
        <SkeletonTheme color="grey" highlightColor="#444">
          <p>
            <Skeleton height={2} width={1000} count={1} />
          </p>
        </SkeletonTheme>
      </div>
    );
  }
}

export default App;
