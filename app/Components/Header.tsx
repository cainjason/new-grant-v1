import { BiMenu } from "react-icons/bi";

function Header() {
  return (
    <header>
      <div className="flex ">
        <img
          className="z-0 h-full w-full"
          src="https://scontent-bos5-1.xx.fbcdn.net/v/t1.6435-9/101074825_3125502980804415_7541619665882054656_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=mP8SgmveV24AX99cBFW&_nc_oc=AQlYIR3LIrkgLQSQEvHzXlk_sHvTPtsEsIiq1__NFFL9qUVo5X_VYGGeIcFJN9Boftk&_nc_ht=scontent-bos5-1.xx&oh=00_AfBt6C7ayFO8Qdn0ZQJGUeppEecYlOaW6NtUD6MjwHkgXg&oe=661C5539"
          alt="church"
        />
        <BiMenu className="" />
      </div>
    </header>
  );
}

export default Header;
