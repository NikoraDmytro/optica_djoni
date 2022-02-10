import Image from "next/image";
import { NavBar } from "./NavBar";

export const Footer = () => {
  return (
    <footer>
      <Image src="/image/logo.png" alt="Logo" width={180} height={80} />

      <NavBar orientation="vertical" />

      <div>
        <div>
          <strong>Где находимся?</strong>
          <span>
            <Image src="/icons/location.svg" alt="" width={18} height={18} />
            Харьков, пр. Героев Сталинграда, 140
          </span>
        </div>

        <div>
          <strong>Как работаем?</strong>
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
      </div>

      <div>
        <div>
          <strong>
            <Image src="/icons/phone.svg" alt="" width={18} height={18} />
            Запись по телефону
          </strong>
          <span>+ 380 63 604 38 01</span>
        </div>

        <div>
          <strong>Мы в социальных сетях:</strong>
          <div>
            <Image
              src="/icons/instagram.svg"
              alt="instagram"
              width={24}
              height={24}
            />
            <Image
              src="/icons/facebook.svg"
              alt="facebook"
              width={24}
              height={24}
            />
          </div>
        </div>
      </div>
    </footer>
  );
};
