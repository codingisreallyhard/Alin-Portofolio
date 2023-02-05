import styles from "./style";
import {
  Billing,
  Business,
  CardDeal,
  Clients,
  CTA,
  Footer,
  Testimonials,
  // Hero,
} from "./components";

import NavigationBar from "./components/Navbar";
// import About from "./components/About";
import Test from "./components/Test";
import Gallery from "./components/Gallery";

const App = () => (
  <div className=" bg-black w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <NavigationBar />
      </div>
    </div>

    <div className="w-screen h-screen">
      <div className="w-screen h-screen">{/* <Hero /> */ <Test />}</div>
    </div>

    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Gallery />
        <Business />
        <Billing />
        <CardDeal />
        <Testimonials />
        <Clients />
        <CTA />
        <Footer />
      </div>
    </div>
  </div>
);

export default App;
