import bgImage from "../assets/hero-image-github-profile.jpg";
import Search from "./Search";

function Header() {
  return (
    <header className="relative">
      <img
        src={bgImage}
        alt="background"
        className="h-48 w-full object-cover sm:h-auto"
      />

      <Search />
    </header>
  );
}

export default Header;
