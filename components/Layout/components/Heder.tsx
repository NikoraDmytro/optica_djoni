import Image from "next/image";

import { NavBar } from "./NavBar";

export const Header = () => {
  return (
    <header>
      <Image src="/image/logo.png" alt="Logo" width={180} height={80} />

      <div>
        <div>
          <strong>Где находимся?</strong>
          <span>
            <Image src="/icons/location.svg" alt="" width={18} height={18} />
            Харьков, пр. Героев Сталинграда, 140
          </span>
        </div>

        <div>
          <span>
            <strong>пн - пт</strong> 08:00 - 19:00
          </span>
          <span>
            <strong>сб</strong> 10:00 - 18:00
          </span>
          <span>
            <strong>вс</strong> 10:00 - 17:00
          </span>
        </div>

        <div>
          <strong>
            <Image src="/icons/phone.svg" alt="" width={18} height={18} />
            Запись по телефону
          </strong>
          <span>+ 380 63 604 38 01</span>
        </div>

        <div>
          <strong>Язык сайта</strong>
          <select id="language">
            <option id="language">Русский</option>
            <option id="language">English</option>
          </select>
        </div>
      </div>

      <NavBar orientation="horizontal" />
    </header>
  );
};
