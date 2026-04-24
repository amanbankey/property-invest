import React from 'react'
import { useSelector } from 'react-redux'


const WatchList = () => {

    const properties = useSelector((state) => state.property.properties);
    const watchList = useSelector((state) => state.watchlist.watchlist);
    
    const watchListProperties = properties.filter((property) =>
        watchList.includes(property.id)
      );

      // console.log('watcha', watchListProperties)
  return (
   <div className="overflow-x-auto bg-white rounded-2xl mt-10 shadow-lg border border-emerald-100 w-10/12 mx-auto">
  <table className="min-w-full text-sm text-left">
    
    
    <thead className="bg-emerald-600 text-white">
      <tr>
        <th className="px-6 py-3 font-semibold">ID</th>
        <th className="px-6 py-3 font-semibold">Property Name </th>
        <th className="px-6 py-3 font-semibold">Property Image</th>
        <th className="px-6 py-3 font-semibold">Price</th>
        <th className="px-6 py-3 font-semibold">Total Value</th>
      </tr>
    </thead>

    
    <tbody className="divide-y divide-emerald-100">
      {watchListProperties.map((property, index) => (
        <tr 
          key={property.id} 
          className="hover:bg-emerald-50 transition-colors"
        >
          <td className="px-6 py-4 font-medium text-gray-700">
            {index + 1}
          </td>

          <td className="px-6 py-4 text-gray-800 font-semibold">
            {property.name}
          </td>

          <td className="px-6 py-4">
            <img
              src={property.img}
              alt={property.name}
              className="w-16 h-12 object-cover rounded-lg border"
            />
          </td>

         

          <td className="px-6 py-4 text-emerald-600 font-bold">
            ₹ {property.sharePrice}
          </td>

          <td className="px-6 py-4 text-emerald-600 font-bold">
            ₹ {property.totalValue}
          </td>
        </tr>
      ))}
    </tbody>
  </table>


  {watchListProperties.length === 0 && (
    <div className="text-center py-8 text-gray-500">
      No properties in watchlist
    </div>
  )}
  
</div>
  )
}

export default WatchList
