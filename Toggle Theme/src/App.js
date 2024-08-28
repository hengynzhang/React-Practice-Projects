import "./App.css";
import { ThemeProvider, useTheme } from "./ThemeContext";
import Switch from "./Switch";

const Title = ({ children }) => {
  const { theme } = useTheme();
  return (
    <h2
      style={{
        color: theme === "light" ? "black" : "white",
      }}
    >
      {children}
    </h2>
  );
};

const Paragraph = ({ children }) => {
  const { theme } = useTheme();
  return (
    <p
      style={{
        color: theme === "light" ? "black" : "white",
      }}
    >
      {children}
    </p>
  );
};

const Header = () => {
  const { theme } = useTheme();
  return (
    <>
      {theme === "light" &&
      <Title>🌞 Good Morning, Sunshine! 🌞</Title>
      }
      {theme === "dark" &&
      <Title>🌜 Good Evening, Stargazer! 🌜</Title>
      }
      <Switch />
    </>
  );
};

const Page = () => {
  const { theme } = useTheme();
  return (
    <div className={theme === "light" ? "light-mode" : "dark-mode"} >
      {theme === "light" &&
      <div>
        <Paragraph>
        Welcome to the bright side of the web! 🌟
        </Paragraph>
        <Paragraph>
        Enjoy a fresh, sunlit experience with vibrant colors and cheerful vibes.
        </Paragraph>
        <Paragraph>
        Click the button on top right to embrace the cozy night mode! 🌜
        </Paragraph>
      </div>
      }
      {theme === "dark" &&
      <div>
        <Paragraph>Welcome to the mystical night mode! 🌌</Paragraph>
        <Paragraph>Immerse yourself in the tranquility of the night with calming colors and soothing darkness.</Paragraph>
        <Paragraph>Click the button below to return to the sunny side! ☀️</Paragraph>
      </div>
    }
    </div>
  );
};

function App() {
  const { theme } = useTheme();
  return (
    <div
      className="App"
      style={{
        backgroundColor: theme === "light" ? "white" : "black",
      }}
    >
      <Header />
      <Page />
    </div>
  );
}

function Root() {
  return (
    <ThemeProvider>
      <App />
    </ThemeProvider>
  );
}

export default Root;
