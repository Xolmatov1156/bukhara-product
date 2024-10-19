import React from "react";
import { useLocation } from "react-router-dom";

const DetailPage = () => {
  const location = useLocation();
  const { state } = location; // The clicked image data

  return (
    <div className="w-[1370px] mx-auto mt-[100px]">
      {state ? (
        <>
          <div className="flex justify-between">
            <img
              src={state.src}
              alt={state.label}
              className="w-[600px] h-[500px] rounded-[20px]"
            />
            <div className="w-[547px]">
              <h2 className="text-[40px] font-semibold mt-[20px]">
                {state.label}
              </h2>
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-300  mt-[20px]">
                  <tbody>
                    <tr>
                      <td className="border px-4 py-2 text-gray-700">
                        Материал:
                      </td>
                      <td className="border px-4 py-2 text-gray-700">
                        100% хлопок фланель
                      </td>
                    </tr>
                    <tr>
                      <td className="border px-4 py-2 text-gray-700">
                        Наволочка:
                      </td>
                      <td className="border px-4 py-2 text-gray-700">
                        50x70 см (2 шт.)
                      </td>
                    </tr>
                    <tr>
                      <td className="border px-4 py-2 text-gray-700">
                        Простынь:
                      </td>
                      <td className="border px-4 py-2 text-gray-700">
                        260×280 см (1 шт.)
                      </td>
                    </tr>
                    <tr>
                      <td className="border px-4 py-2 text-gray-700">
                        Пододеяльник:
                      </td>
                      <td className="border px-4 py-2 text-gray-700">
                        160x220 см (2 шт.)
                      </td>
                    </tr>
                    <tr>
                      <td className="border px-4 py-2 text-gray-700">
                        Размер:
                      </td>
                      <td className="border px-4 py-2 text-gray-700">
                        Special size
                      </td>
                    </tr>
                    <tr>
                      <td className="border px-4 py-2 text-gray-700">
                        Производитель:
                      </td>
                      <td className="border px-4 py-2 text-gray-700">
                        Bukhara Natural Product
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </>
      ) : (
        <p className="text-center">No data available</p>
      )}
    </div>
  );
};

export default DetailPage;
