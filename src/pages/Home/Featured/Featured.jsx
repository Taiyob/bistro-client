import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg";
import "./featured.css";

const Featured = () => {
  return (
    <div className="featured-item bg-fixed text-white pt-10 my-20">
      <SectionTitle
        heading={"Featured Item"}
        subHeading={"Check it out"}
      ></SectionTitle>
      <div className="md:flex justify-center items-center bg-slate-500 bg-opacity-60 pb-20 pt-12 px-36">
        <div>
          <img src={featuredImg} alt="" />
        </div>
        <div className="md:ml-10">
          <p>Aug 20, 2024</p>
          <p className="uppercase">Where can I get some?</p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. At
            architecto quae officiis doloribus nulla asperiores ea et
            dignissimos perspiciatis unde, reprehenderit earum obcaecati
            explicabo molestias reiciendis adipisci similique voluptate deserunt
            natus voluptatum fugit ut, sunt sit! Quam magni expedita illo alias
            perferendis eos facere dolores soluta ex pariatur. Molestiae, quam.
          </p>
          <button className="btn btn-outline border-0 border-b-4 mt-4">
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
