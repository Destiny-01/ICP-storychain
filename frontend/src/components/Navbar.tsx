import Logo from "../assets/logo.png";

function Navbar() {
  return (
    <div className="flex items-center pl-8 pr-16 py-2 justify-between uppercase">
      <div className="flex gap-x-8 items-center">
        <img src={Logo} className="h-16" alt="logo" />
        <ul className="list-none flex gap-x-6">
          <li>Home</li>
          <li>About</li>
          <li>How To</li>
          <li>Create</li>
        </ul>
      </div>
      <button>Connect Wallet</button>
    </div>
  );
}

export default Navbar;
