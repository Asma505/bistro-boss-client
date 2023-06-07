import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg";
import './Featured.css';


const Featured = () => {
    return (
        <div className="featured-item bg-fixed text-white pt-10 my-28">
            <SectionTitle
            subHeading="check it out"
            heading="Featured Item"
            ></SectionTitle>
            <div className="md:flex items-center justify-center bg-slate-500 bg-opacity-50 gap-10 px-36 pb-28 pt-24">
                <div className="w-9/12">
                    <img src={featuredImg} alt="" />
                </div>
                <div>
                    <p>Aug 20, 2029</p>
                    <p className="uppercase">Where Can I Get Some?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, optio repudiandae dicta voluptas iste, ipsam deserunt nesciunt quae sapiente reiciendis veritatis cum repellat id, iusto?.</p>
                    <button className="btn btn-outline border-0 border-b-4 mt-5">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;