
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import useMenu from "../../../hooks/useMenu";


const PopularMenu = () => {
    const [menu] = useMenu();
    const popular = menu.filter(item => item.category === "popular");
    
    return (
        <section className="mb-16 w-10/12 mx-auto">
            <SectionTitle
                heading="From Our Menu"
                subHeading="Popular Items">

            </SectionTitle>
            <div className="grid md:grid-cols-2 gap-3">
                {
                    popular.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
                }
            </div>
            <div className="text-center">
                <button className="btn btn-outline border-0 border-b-4 mt-5">View Full Menu</button>
            </div>
        </section>
    );
};

export default PopularMenu;