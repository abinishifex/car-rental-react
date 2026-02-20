

function BrandCard({logo, name}){
    return(
        <div className=" shadow-black border rounded-md p-3  flex flex-col items-center justify-center hover:shadow-md transition cursor-pointer bg-white">
            <img src= {logo} alt={name} 
            className="h-16 object-contain mb-3"/>
            <p className=" flex justify-center text-sm font-medium">{name}</p>
        </div>
    )
}

export default BrandCard;
