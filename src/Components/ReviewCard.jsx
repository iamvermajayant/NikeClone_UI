import { star } from "../assets/icons"

const ReviewCard = ({imgURL, customerName, feedback, rating }) => {
  return (
    <div className="flex justify-center flex-col items-center">
        <img src={imgURL} alt="Customer image" className="rounded-full object-cover w-[120px] h-[120px]"  />
        <p className="mt-6 max-w-sm info-text text-center">{feedback}</p>
        <div className="mt-3 flex justify-center items-center gap-5">
            <img src={star} width={24} height={24} className="object-contain m-0"/>
            <p className="font-montserrat text-xl text-slate-gray">({rating})</p>
        </div>
        <h3 className="text-3xl font-palanquin font-bold text-center">{customerName}</h3>
    </div>
  )
}

export default ReviewCard