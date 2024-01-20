import Button from "../Components/Button"

const Subscribe = () => {
  return (
    <section className="max-container flex justify-between items-center max-lg:flex-col gap-10 " id="contact-us"
    >
      <h3 className="text-4xl leading-[68px] lg:max-w-md font-palanquin font-bold">
        Sign Up from
        <span className="text-coral-red"> updates </span> & newsletter
      </h3>
      <div className="w-full flex max-sm:flex-col max-sm:gap-2 max-sm:justify-center max-sm:border-none border-2 p-2 border-coral-red rounded-full">
        <input type="text" placeholder="subscribe@nike.com" className="input mx-2" />
        <div>
          <Button label="Sign up"/>
        </div>
      </div>
    </section>  
  )
}

export default Subscribe