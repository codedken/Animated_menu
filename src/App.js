import "./App.css";

function App() {
  const toggleNavigation = () => {
    const navigation = document.querySelector(".navigation");
    navigation.classList.toggle("active");
  };
  return (
    <div className="navigation">
      <div className="userBx">
        <div className="imgBx">
          <img src="./images/champion.JPG" alt="profile" />
        </div>
        <p className="username">Kennedy Ojukwu</p>
      </div>
      <div className="menuToggle" onClick={toggleNavigation}></div>
      <ul className="menu">
        <li>
          <a href="http://localhost:3000/">
            <ion-icon name="person"></ion-icon>My Profile
          </a>
        </li>
        <li>
          <a href="http://localhost:3000/">
            <ion-icon name="chatbubbles"></ion-icon>Messages
          </a>
        </li>
        <li>
          <a href="http://localhost:3000/">
            <ion-icon name="notifications"></ion-icon>Notifications
          </a>
        </li>
        <li>
          <a href="http://localhost:3000/">
            <ion-icon name="settings"></ion-icon>Settings
          </a>
        </li>
        <li>
          <a href="http://localhost:3000/">
            <ion-icon name="help-circle"></ion-icon>Help & Support
          </a>
        </li>
        <li>
          <a href="http://localhost:3000/">
            <ion-icon name="log-out"></ion-icon>Logout
          </a>
        </li>
      </ul>
    </div>
  );
}

export default App;
