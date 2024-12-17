# HT Test
A React component library built with Tailwind CSS and TypeScript.
## Installation

To install the HT Test package, run the following command in your terminal:

```bash
npm install ht-test
```
## Usage
To use the components in your React application, import them like so:
### Button
```javascript
import { Button } from 'ht-test';

function App() {
  return (
    <div>
      <Button>Click me!</Button>
    </div>
  );
}
```

## Components
The HT Test package includes the following components:

- Button
- Card
- Input
- Modal
- Notification
- Table
Each component is customizable using Tailwind CSS classes.

# Customization
To customize the components, you can use Tailwind CSS classes. For example, to change the color of the Button component, you can add the bg-blue-500 class:
## Button
```javascript
import { Button } from 'ht-test';

function App() {
  return (
    <div>
      <Button className="bg-blue-500">Click me!</Button>
    </div>
  );
}
```
### Navbar 

```javascript
import { Navbar } from 'ht-test';

function App() {
  return (
    <div> 
      <Navbar />  
    </div>
  )
}
```

To customize the components, you can use Tailwind CSS classes. For example, to change the color of the Navbar component, you can add the tailwindcss class:
To use the Navbar component, import it like so:

```javascript
import React, { useState } from "react";
import { MdMenu } from "react-icons/md";
import { RxCross1 } from "react-icons/rx";
import { BsSearch } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { CiHeart } from "react-icons/ci";
import { IoBagCheckSharp } from "react-icons/io5";

type NavOptionProps = {
  label: string;
  href: string;
  icon?: React.ReactNode;
};

const NavOption: React.FC<NavOptionProps> = ({ label, href, icon }) => (
  <a href={href} className="flex flex-col items-center justify-center text-gray-600 hover:text-black">
    {icon}
    <p className="text-sm">{label}</p>
  </a>
);

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navOptions = [
    { label: "Men", href: "/men" },
    { label: "Women", href: "/women" },
    { label: "Kids", href: "/kids" },
    { label: "Home & Living", href: "/home-living" },
    { label: "Beauty", href: "/beauty" },
  ];

  const actionOptions = [
    { label: "Profile", href: "/profile", icon: <CgProfile /> },
    { label: "Wishlist", href: "/wishlist", icon: <CiHeart /> },
    { label: "Bag", href: "/bag", icon: <IoBagCheckSharp /> },
  ];

  return (
    <nav className="px-4 mt-4 flex items-center gap-4 justify-between">
      {/* Brand logo and name */}
      <div className="flex items-center gap-6">
        <img className="w-10 h-10 rounded-sm" src="/assets/logo.png" alt="logo" />
        <h1 className="text-lg font-bold">EasyShoP</h1>

        {/* Menu Items for Large Screens */}
        <ul className="hidden lg:flex items-center gap-8">
          {navOptions.map((option, index) => (
            <li key={index} className="font-medium text-gray-700 hover:text-black">
              <a href={option.href}>{option.label}</a>
            </li>
          ))}
        </ul>
      </div>

      {/* Search Bar */}
      <div className="flex items-center gap-2">
        <div className="hidden lg:flex items-center border-2 border-gray-300 rounded-md bg-gray-100">
          <div className="relative">
            <input
              type="text"
              placeholder="Search for products, brands and more"
              className="w-64 px-4 py-2 pl-10 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent"
            />
            <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
              <BsSearch />
            </span>
          </div>
        </div>

        {/* Action Options for Large Screens */}
        <div className="hidden lg:flex items-center gap-8">
          {actionOptions.map((option, index) => (
            <NavOption key={index} label={option.label} href={option.href} icon={option.icon} />
          ))}
        </div>
      </div>

      {/* Hamburger Menu for Mobile */}
      <div className="lg:hidden">
        {isOpen ? (
          <RxCross1 onClick={() => setIsOpen(false)} className="text-3xl cursor-pointer" />
        ) : (
          <MdMenu onClick={() => setIsOpen(true)} className="text-3xl cursor-pointer" />
        )}
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md">
          <ul className="flex flex-col items-center gap-4 py-4">
            {navOptions.map((option, index) => (
              <li key={index} className="font-medium text-gray-700 hover:text-black">
                <a href={option.href}>{option.label}</a>
              </li>
            ))}
          </ul>
          <div className="flex items-center justify-center gap-6 py-4">
            {actionOptions.map((option, index) => (
              <NavOption key={index} label={option.label} href={option.href} icon={option.icon} />
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
```
## Contributing
Contributions are welcome! If you'd like to contribute to the HT Test package, please fork the repository and submit a pull request.
## License
The HT Test package is licensed under the MIT License.

### Changelog
- v1.0.0: Initial release testing purposes only.
- Initial release of the HT Test package. The package includes the following components: Button, Card, Input, Modal, Notification, Table. The components are customizable using Tailwind CSS classes. Contributions are welcome! If you'd like to contribute to the HT Test package, please fork the repository and submit a pull request.

## Authors
- [Abu Bakar](https://www.linkedin.com/in/abu-bakar-hasan/)
- [github](https://github.com/HasanBakar/)
- [twitter](https://x.com/ABU_BAK_A_R/)
- [Youtube](https://www.youtube.com/@Hasan_Bakar/)
- [facebook](https://www.facebook.com/abubakar.hosain.925)
- [instagram](https://www.instagram.com/a_bakar505/)
- [threads](https://www.threads.net/@a_bakar505)


## Acknowledgments
- [Tailwind CSS](https://tailwindcss.com/)
- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Rollup](https://rollupjs.org/)

# Support
If you have any questions or need help with the HT Test package, please open an issue on GitHub or contact me directly.
# Contact: [✉](bakar.pbc@gmail.com) bakar.pbc@gmail.com