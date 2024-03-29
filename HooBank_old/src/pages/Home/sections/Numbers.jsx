import { useContext } from "react";
import { Number } from "../../../components"
import { NumbersContext } from "../../../context/NumbersContext";



export function Numbers () {
  const { number: { userActive, trustedByCompany, transaction } } = useContext(NumbersContext);
 
return (
  <section className="py-4 mb-14 flex flex-wrap gap-3 XS:justify-center SM:pt-0 SM:justify-center SD:justify-center
  HD:justify-around FHD:justify-around">
    <Number numberCount={userActive} numberTitle={'user active'}/>
    <Number numberCount={trustedByCompany} numberTitle={'trusted by company'}/>
    <Number numberCount={transaction} numberTitle={'transaction'}/>
  </section>
)
}