
import "@/app/component/main/main.css"
import Posts from "./fech/page";
import Mainheader from "./main-header/page";
export default function Main() {

  return (
    <div className="main">
      <Mainheader />
      <div className="fatura">
        <Posts />
      </div>
    </div>
  )
}