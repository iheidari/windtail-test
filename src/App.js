import Contact from "./Contact";
function App() {
  return (
    <div className="mx-auto w-1/2 bg-green-700 min-w-350 ">
      <Contact
        name="Aria"
        email="ariaheidari2010@gmail.com"
        image="https://avatars.githubusercontent.com/u/75406554?s=300&u=1ec26e87c905c65cde76db78f774119ebd2edc83&v=4"
      />
      <Contact
        name="Iman"
        email="iman.heydari@gmail.com"
        image="https://avatars.githubusercontent.com/u/1315090?s=300&u=97ccc26fe2d83c08f9b6058634f33d8c3d3e28d1&v=4"
      />
      <Contact
        name="Ali"
        email="ali37500@gmail.com"
        image="http://ecomaster.ca/images/no%20background%20logo.png"
      />
    </div>
  );
}

export default App;
