import { assets, HeadphoneImage,Star, ProductDummyData,s24_image } from "@/assets/assets";
import Image from "next/image";
import RatingDisplay from "./RatingDisplay";
export default function TrendingItems(){

   
     return (
        <>
    <div className="w-full overflow-x-auto scrollbar-hide py-4">
      {/* container that holds the horizontal row */}
      <div className="flex gap-4 px-4 w-max snap-x snap-mandatory">
        {ProductDummyData.map((item) => (
          <article
            key={item.id}
            className="snap-start min-w-[220px] max-w-[220px] bg-white shadow-lg rounded-xl p-4 hover:scale-105 transition-transform duration-200 flex flex-col"
            role="article"
            aria-label={item.name}
          >
            {/* image area — use fill for responsive sizing */}
            <div className="relative w-full h-[140px] mb-3">
              {item.image ? (
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-contain rounded-md"
                />
              ) : (
                <div className="w-full h-full bg-gray-100 rounded-md flex items-center justify-center text-sm">
                  No image
                </div>
              )}
            </div>

            {/* title and price */}
            <h3 className="font-semibold text-sm line-clamp-2">{item.name}</h3>
            <p className="font-bold text-lg mt-1">₹{item.price}</p>
            <p className="text-xs text-gray-500">amazon &amp; more</p>

            {/* rating + reviews count aligned to bottom */}
            <div className="mt-auto flex items-center justify-between gap-2 pt-3">
              <div className="flex items-center gap-2">
                <RatingDisplay rating={item.rating ?? 0} />
                <span className="text-xs text-gray-500">({item.reviews ?? "28k"})</span>
              </div>

            </div>
          </article>
        ))}
        
      </div>
      
    </div>
  


    </>
    
  );
}