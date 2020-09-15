import "./Main.css";
import React, { Component } from "react";
import Header from "../components/header/Header.jsx";
import Greeting from "./greeting/Greeting.jsx";
import Skills from "./skills/Skills.jsx";
import WorkExperience from "./workExperience/WorkExperience";
import StackProgress from "./skillProgress/skillProgress.jsx";
import Projects from "./projects/Projects.jsx";
import Footer from "../components/footer/Footer.jsx";
import Top from "./topbutton/Top.jsx";
import Profile from "./profile/Profile.jsx";
import Blogs from "./blogs/Blogs";
import Talks from "./talks/Talks";
import { StyleProvider } from "../contexts/StyleContext";
import Achievement from "./achievement/Achievement";
import Contact from "./contact/Contact";

export default class Main extends Component {
  state = {
    isDark: false,
  };

  componentDidMount() {
    const darkPref = window.matchMedia("(prefers-color-scheme: dark)");
    this.setState({ isDark: darkPref.matches });
  }
  changeTheme = () => {
    this.setState((prevState) => {
      return { isDark: !prevState.isDark };
    });
  };

  render() {
    return (
      <div className={this.state.isDark ? "dark-mode" : null}>
        <StyleProvider
          value={{ isDark: this.state.isDark, changeTheme: this.changeTheme }}
        >
          <Header />
          <Greeting />
          <Skills />
          <StackProgress />
          <Projects />
          <WorkExperience />
          <Achievement />
          <Blogs />
          <Talks />
          <Profile />
          <Contact />
          <Footer />
          <Top />
        </StyleProvider>
      </div>
    );
  }
}
