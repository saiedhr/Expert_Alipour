import { useContext } from "react";
import { BestBotsContext } from "../../../../contexts/BestBotsContext";

export default function AddBotTable() {
  let [bestBots, setBestBots] = useContext(BestBotsContext);

  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto  ">
        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <table className="min-w-full text-left text-sm font-light">
              <thead className="border-b bg-white font-medium dark:border-neutral-500 dark:bg-neutral-600">
                <tr>
                  <th scope="col" className="px-1 py-4 text-2xl text-right">
                    شماره
                  </th>
                  <th scope="col" className="px-6 py-4 text-2xl text-right">
                    عنوان
                  </th>
                  <th scope="col" className="px-6 py-4 text-2xl text-right">
                    توضیحات
                  </th>
                  <th scope="col" className="px-6 py-4 text-2xl text-right">
                    قیمت
                  </th>
                </tr>
              </thead>
              <tbody>
                {console.log(bestBots)}
                {bestBots.map((bot: any, index: any) => (
                  <tr className={`border-b bg-neutral-100 dark:bg-neutral-700 ${index % 2 ? 'bg-white': 'bg-neutral-100'}`}>
                    <td className="whitespace-nowrap px-1 py-4 font-bold text-right">
                      {index + 1}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 font-bold text-right">
                      {bot.Title}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 font-bold text-right">
                      {bot.Description}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 font-bold text-right">
                      {" "}
                      {bot.Price.toLocaleString("fa", {
                        useGrouping: true,
                      })}{" "}
                      تومان
                    </td>
                  </tr>
                ))}
                {/* <tr className="border-b bg-neutral-100 dark:border-neutral-500 dark:bg-neutral-700">
                  <td className="whitespace-nowrap px-6 py-4 font-medium">1</td>
                  <td className="whitespace-nowrap px-6 py-4">Mark</td>
                  <td className="whitespace-nowrap px-6 py-4">Otto</td>
                  <td className="whitespace-nowrap px-6 py-4">@mdo</td>
                </tr>
                <tr className="border-b bg-white dark:border-neutral-500 dark:bg-neutral-600">
                  <td className="whitespace-nowrap px-6 py-4 font-medium">2</td>
                  <td className="whitespace-nowrap px-6 py-4">Jacob</td>
                  <td className="whitespace-nowrap px-6 py-4">Thornton</td>
                  <td className="whitespace-nowrap px-6 py-4">@fat</td>
                </tr>
                <tr className="border-b bg-neutral-100 dark:border-neutral-500 dark:bg-neutral-700">
                  <td className="whitespace-nowrap px-6 py-4 font-medium">3</td>
                  <td
                    colSpan={2}
                    className="whitespace-nowrap px-6 py-4 text-center"
                  >
                    Larry the Bird
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">@twitter</td>
                </tr> */}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
