import { Avatar } from "@nextui-org/react";
import { datos } from "./info";

export default function ListUsers({ x, title }) {
  return (
    <div>
      <div>
        <p className=" text-red-700">{title}</p>
        <Avatar className="w-20 h-20 text-large" src="/yo.jpg" />

        <p> {datos.nombre}</p>
        <p>{datos.edad}</p>
        <p>{datos.signo}</p>
      </div>
      <div>
        <ul className=" border-3 border-pink-500 max-w-[500px]">
          {x.map((item, i) => (
            <li className=" flex items-center justify-evenly" key={i}>
              <Avatar className="w-14 h-14 text-large  " src={item.image} />
              <p> {item.name}</p>
              <p>{item.email}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
