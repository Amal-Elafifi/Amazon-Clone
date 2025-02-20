import Button from "./button"

const Card = ({ description, image, sold, price, ratingNum }) => {

  return (
      <div className="card  p-3 border-2 border-[#D9D9D9] ">
      <div className="card-container flex flex-col gap-6">
          <img className="" src={`${image}`} alt="product" />
          <div className="details flex flex-col gap-4">
              <h3 className="text-[16px] font-medium leading-5">{description.length > 80 ? description.slice(0, 80)+ '...': description}</h3>
              <div className="review flex flex-col gap-2">
                  <div className="rate-box flex gap-3 items-center">
                      <div className="stars">
                          <img src="/src/assets/images/Star.png" alt="" />
                      </div>
                      <img className="h-fit cursor-pointer" src="/src/assets/images/Vector 5.png" alt="" />
                      <span className="text-[#1F8394] text-base">{ratingNum}</span>
                  </div>
                  <p className="text-[#717171] text-sm">
                 {sold} bought in past month
                  </p>
              </div>
              <div className="price-box">
                  <h2 className="text-xl font-normal flex items-end gap-1">₹{price} <p className="text-[#717171] text-sm">(46% off)</p></h2>
                  <p className="text-[#717171] text-sm">Save extra with No Cost EMI</p>
              </div>
              <div className="ship-details">
                  <div className="text-sm font-semibold">
                  <span className="font-normal">FREE delivery by</span> Sat, 14 Sept,
                  7:00 am - 9:00 pm</div>
              </div>
              <Button />
          </div>
      </div>
  </div>
  )
}

export default Card