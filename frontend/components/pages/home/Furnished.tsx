const Furnished: React.FC = () => {
  return (
    <section className="bg-[url('/images/furnished.png')] bg-no-repeat bg-center bg-cover w-full">
      <div className="max-w-[1400px] mx-auto lg:px-8 md:px-6 px-4 lg:py-10 py-8 flex justify-end">
        <div className="bg-white py-10 px-8 rounded-[10px] space-y-6">
          <div className="space-y-3.5">
            <h2 className="text-[38px] font-semibold text-secondary leading-snug">
              Need Furnished <br /> Accommodation! Best Place <br /> for Foreigner Guests
            </h2>
            <p className="text-[#575959]">
              Explore our Affordable & Luxurious Furnished Apartments <br /> List.
            </p>
          </div>
          <button className="bg-primary text-white text-sm px-8 py-2.5 rounded hover:bg-primaryHov transition duration-300">
            Explore All
          </button>
        </div>
      </div>
    </section>
  )
}

export default Furnished;