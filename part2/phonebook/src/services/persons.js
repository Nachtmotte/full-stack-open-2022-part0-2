import axios from "axios";
const baseUrl = "http://localhost:3001/persons";

const getAll = () => axios.get(baseUrl).then((res) => res.data);
//With Fetch
/*fetch(baseUrl).then((res) => res.json());*/

const create = (newObject) =>
  axios.post(baseUrl, newObject).then((res) => res.data);
//With Fetch
/*fetch(baseUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(newObject),
  })
    .then((res) => res.json());*/

const deleteObject = (id) =>
  axios.delete(`${baseUrl}/${id}`).then((res) => res.data);
//With Fetch
//fetch(`${baseUrl}/${id}`, { method: "DELETE" }).then((res) => res.json());

const update = (id, newObject) =>
  axios.put(`${baseUrl}/${id}`, newObject).then((res) => res.data);

const personService = { getAll, create, deleteObject, update };

export default personService;
