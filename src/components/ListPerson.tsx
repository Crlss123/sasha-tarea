import Filter from "./Filter";
import List from "./List";
import { Person } from "my-types";
import { useState, useEffect } from "react";
import { getAllPeople } from "../api/PersonAPI";

export default function ListPerson() {
  const [people, setPeople] = useState<Person[]>([]);
  useEffect(() => {
    getAllPeople().then((data: Person[]) => setPeople(data));
  }, []);
  console.log(people);
  return (
    <>
      <div className="flex flex-col gap-4 my-4 ">
        <h3 className="text-3xl font-bold text-gray-800 text-left">
          Lista de productos
        </h3>
        <div className="h-4"></div>

        <Filter />

        <div className="flex justify-end items-center">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Add product
          </button>
        </div>
      </div>
      <div className="relative overflow-x-auto">
        <List people={people} />
      </div>
      {/* <div>
        <Filter />
        <List />
      </div> */}
    </>
  );
}
