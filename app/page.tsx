import CarCard from "./components/CarCard";
import CustomFilter from "./components/CustomFilter";
import Hero from "./components/Hero";
import SearchBar from "./components/SearchBar";
import { fetchCars } from "./utils";


export default async function Home() {
    const allCars = await fetchCars();
    const dataEmpty = !Array.isArray(allCars) || allCars.length<1 || !allCars;
    return (
        <main className="overflow-hidden">
            <Hero/>
            <div className="mt-12 padding-x padding-y max-width" id="discover">
                <div className="home__text-container">
                    <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
                    <p>Explore the cars you're looking for</p>
                </div>
                <div className="home__filters">
                    <SearchBar />
                    <div className="home__filter-container">
                        <CustomFilter title=""/>
                        <CustomFilter title=""/>
                    </div>
                </div>

                {!dataEmpty ? (
                    <section>
                        <div className="home__cars-wrapper">
                            {allCars.map(car => (
                                <CarCard car={car} />    
                            ))}
                        </div>
                        We Have Cars
                    </section>
                ): (
                    <div className="home__error-container">
                        <h2 className="text-xl font-bold text-black">Oops, no results</h2>
                        {/* <p>{allCars?.message}</p> */}
                    </div>
                )}

            </div>
        </main>
    )
}
