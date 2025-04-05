import { Person } from "my-types";
type Props = {
  people: Person[];
};

export default function List({ people }: Props) {
  return (
    <>
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              ID
            </th>
            <th scope="col" className="px-6 py-3">
              Name
            </th>
            <th scope="col" className="px-6 py-3">
              CURP
            </th>
            <th scope="col" className="px-6 py-3">
              Gender
            </th>
            <th scope="col" className="px-6 py-3">
              Status
            </th>
          </tr>
        </thead>
        <tbody>
          {people.map((people, index) => (
            <tr
              key={index}
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200"
            >
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {people.id}
              </th>
              <td className="px-6 py-4">
                {people.first_name +
                  " " +
                  people.second_name +
                  " " +
                  people.first_lastname +
                  " " +
                  people.second_lastname}
              </td>
              <td className="px-6 py-4">{people.curp}</td>
              <td className="px-6 py-4">{people.gender}</td>
              <td className="px-6 py-4">
                {people.status ? "Graduado" : "Reprobado"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
